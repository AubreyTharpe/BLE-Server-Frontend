import React, { useState, useEffect } from 'react';

import socketClient from 'socket.io-client';
import axios from 'axios';
import '../../../node_modules/react-vis/dist/style.css';
import { XAxis, YAxis, FlexibleWidthXYPlot, AreaSeries } from 'react-vis';
import * as moment from "moment";

// setup url for local development
// 3000 is for if you're doing yarn start
// if using yarn build the ble server will
// serve the built files
let serverUrl
if (window.location.port === '3000') {
  serverUrl = 'http://192.168.1.3:8080';
}
else {
  serverUrl = window.location.origin;
}

const socket = socketClient(serverUrl);

function Dashboard() {
  // All the state that the dashboard uses.
  const [temperatureData, setTempData] = useState([]);
  const [humidityData, setHumidData] = useState([]);
  const [init, setInit] = useState(false);
  const [isCelsius, setTempType] = useState(false);
  const [scale, setScale] = useState('300');

  useEffect(() => {
    if (init) { // If isCelsius or scale changes
      socket.removeAllListeners();
      socket.close();
      getData(scale);
      listenForDataChanges();
    }
    if (!init) { // first pass through. Could probably remove this now?
      getData(scale);
      listenForDataChanges();
      setInit(true);
    }
  }, [init, isCelsius, scale]);

  // The call to the backend once the socket receives dataAdded
  // parses the data for the charts and sets their state
  const getData = (scale) => {
    axios.get(`${serverUrl}/data/${scale}`).then(rows => {
      let tempData;
      if (isCelsius) {
        tempData = rows.data.map(row => ({ x: row.timestamp, y: row.temperature }));
      }
      else {
        tempData = rows.data.map(row => ({ x: row.timestamp, y: row.temperature * 9 / 5 + 32 }));
      }

      const humidData = rows.data.map(row => ({ x: row.timestamp, y: row.humidity }));
      setTempData(tempData);
      setHumidData(humidData);
    }).catch(err => {
      console.log(err);
    });
  };

  // Waitin' around for dataAdded
  const listenForDataChanges = () => {
    socket.connect();
    socket.on('dataAdded', () => {
      getData(scale);
    });
  };

  // temperature type and scale change event handlers
  const handleTempTypeChange = (changeEvent) => {
    setTempType(changeEvent.target.value === 'true');
  }
  const handleScaleChange = (changeEvent) => {
    setScale(changeEvent.target.value);
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <label htmlFor="scaleSelect" className="pr-1 pt-2">Time Scale per tick</label>
          <select name="scaleSelect" onChange={handleScaleChange} value={scale}>
            <option value="10">10 Seconds</option>
            <option value="30">30 Seconds</option>
            <option value="60">1 Minute</option>
            <option value="300">5 Minute</option>
            <option value="600">10 Minute</option>
            <option value="1800">30 Minute</option>
            <option value="3600">1 Hour</option>
          </select>
        </div>
      </div>
      <div className="row mr-0">
        <div className="col-sm col-md-6">
          <span>Temperature Chart</span>
          <div>
            <input type="radio" name="tempType" value="true" checked={isCelsius === true} onChange={handleTempTypeChange} /> <label className="pr-2" htmlFor="tempType">Celsius</label>
            <input type="radio" name="tempType" value="false" checked={isCelsius === false} onChange={handleTempTypeChange} /> <label htmlFor="tempType">Fahrenheit</label>
          </div>
          <FlexibleWidthXYPlot height={300} margin={{ left: 50, bottom: 75 }} yPadding={50} >
            <YAxis tickFormat={v => `${v} ${isCelsius ? 'C' : 'F'}`} />
            <XAxis tickFormat={v => moment(v).format("h:mm:ss a")} tickLabelAngle={-35} />

            <AreaSeries
              curve="curveBasis"
              data={temperatureData}
              opacity={0.5}
              style={{}}
            />
          </FlexibleWidthXYPlot>
        </div>

        <div className="col-sm col-md-6 d-flex flex-column">
          <div className="mb-auto">
            <span>Humidity Chart</span>
          </div>
          <div>
            <FlexibleWidthXYPlot height={300} margin={{ left: 50, bottom: 75 }} yPadding={50}>
              <YAxis tickFormat={v => `${v} %`} />
              <XAxis tickFormat={v => moment(v).format("h:mm:ss a")} tickLabelAngle={-35} />

              <AreaSeries
                curve="curveBasis"
                data={humidityData}
                opacity={0.5}
                style={{}}
              />
            </FlexibleWidthXYPlot>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
