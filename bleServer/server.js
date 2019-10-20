var noble = require('noble');
const sqlite3 = require('sqlite3');
const EventEmitter = require('events');
const db = new sqlite3.Database('data');
const express = require('express');
const app = express();
const http = require('http').createServer(app);

// Starts the socket server
const io = require('socket.io')(http);
const cors = require('cors');
const path = require("path");

app.use(cors());

/* 
 * Called when the frontend receives the dataAdded event
 */
app.get('/data/:scale', (req, res) => {
  const seconds = req.params.scale;
  const scale = seconds / 10;
  db.all(`SELECT rowid as id, temperature, humidity, timestamp from data where id % ${scale} = 0 ORDER BY timestamp DESC LIMIT(25)`, (err, rows) => {
    res.send(rows)
  });
});

io.on('connection', function (socket) {
  console.log('a user connected');
});

// These serve the frontend up
app.use('/static', express.static(path.join(__dirname, '../frontend/build/static')));
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
});

// Starts server listening on port 8080
http.listen(8080, (err) => {
  console.log('server started');
});

/*
 *  standard node events
 */

class DataEvent extends EventEmitter { }

const dataEvent = new DataEvent();
let essData = {
  temperature: null,
  humidity: null
}

dataEvent.on('added', () => {
  io.emit('dataAdded', { type: 'temperature' });
});

dataEvent.on('tempData', (temperature) => {
  essData.temperature = temperature;
  if (essData.temperature !== null && essData.humidity !== null) {
    dataEvent.emit('data', essData);
    essData = {
      temperature: null,
      humidity: null
    }
  }
});

dataEvent.on('humidData', (humidity) => {
  essData.humidity = humidity;
  if (essData.temperature !== null && essData.humidity !== null) {
    dataEvent.emit('data', essData);
    essData = {
      temperature: null,
      humidity: null
    }
  }
});

dataEvent.on('data', (data) => {
  db.run("INSERT INTO data VALUES (?, ?, ?)", data.temperature, data.humidity, Date.now());
  dataEvent.emit('added');
});

// Create a table in the database once the power to raspberry pi's bluetooth chip is turned on
// Then start scanning for devices
noble.on('stateChange', (state) => {
  console.log(state);
  if (state === 'poweredOn') {
    db.run("CREATE TABLE IF NOT EXISTS data (temperature REAL, humidity REAL, timestamp INT)");
    noble.startScanning();
  }
  else {
    noble.stopScanning();
  }
});

// Potentially start scanning again for a new device
noble.on('scanStop', (data) => {
  console.log('stopped scanning');
});

// Find a device named BLE_Temp_Humid and dive into its characteristics
noble.on('discover', (peripheral) => {
  console.log('peripheral with ID ' + peripheral.id + 'and name ' + peripheral.advertisement.localName + ' found');
  const advertisement = peripheral.advertisement;
  var localName = advertisement.localName;
  if (localName === 'BLE_Temp_Humid') {
    explore(peripheral);
  }
});

function explore(peripheral) {

  peripheral.connect(function (error) {
    // Once the device is disconnected start scanning again
    // The makes development so much easier. It automatically reestablishes the
    // bluetooth connection with the device
    peripheral.once('disconnect', (data) => {
      noble.startScanning()
    })
    peripheral.discoverServices([], function (error, services) {
      let service = services.filter((service) => service.type === 'org.bluetooth.service.environmental_sensing')[0];
      console.log(service.name);
      service.discoverCharacteristics([], (error, characteristics) => {
        // Get both characteristics and subscribe to the data
        let tempCharacteristic = characteristics.filter(characteristic => characteristic.type === 'org.bluetooth.characteristic.temperature')[0];
        let humidCharacteristic = characteristics.filter(characteristic => characteristic.type === 'org.bluetooth.characteristic.humidity')[0];
        
        // Data comes in as a buffer and can be decoded using Node's buffers
        tempCharacteristic.on('data', (data, isNotification) => {
          // Divide by 100 to decode data. 
          const temperature = data.readIntLE(0, 2) / (100);
          dataEvent.emit('tempData', temperature);
        });
        humidCharacteristic.on('data', (data, isNotification) => {
          // Divide by 100 to decode data. 
          const humidity = data.readUIntLE(0, 2) / (100);
          dataEvent.emit('humidData', humidity);

        })

        // Subscribe and start listening
        tempCharacteristic.subscribe(error => {
          if (error) {
            console.error('Error subscribing to echoCharacteristic');
          } else {
            console.log('Subscribed for temperature echoCharacteristic notifications');
          }
        });
        humidCharacteristic.subscribe(error => {
          if (error) {
            console.error('Error subscribing to echoCharacteristic');
          } else {
            console.log('Subscribed for humidity echoCharacteristic notifications');
          }
        });
      });
    });
  });
}
