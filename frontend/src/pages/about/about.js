import React from 'react';
import dht22 from './dht22.png';
import Frontend_Diagram from './Frontend_Diagram.png';
import nrf52840 from './nrf52840.png';
import temperature_and_humidity_breath_test from './temperature_and_humidity_breath_test.png';
import Backend_Diagram from './Backend_Diagram.png';
import Firmware_diagram from './Firmware_diagram.png';
import nrf52840_features from './nrf52840_features.png';
import Raspberry_Pi_3 from './Raspberry_Pi_3.png';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="page-body">
        <h1 id="9ad8f6f5-bef1-49f8-b6ad-16041d34f27f" className="">Overview</h1>
        <figure id="f1b9a720-7fdf-45c8-a82e-e8dd4d46ce9d" className="image">
          <a href={temperature_and_humidity_breath_test}>
            <img alt="" style={{ width: '720px' }} src={temperature_and_humidity_breath_test} />
          </a>
        </figure>
        <p id="5d83f016-5a19-4927-b47a-854f2e1bec20" className="">The purpose of this project is to collect temperature and humidity readings from a microcontroller to be monitored on the web. Full stack&#x27;s connotation doesn&#x27;t do this project justice. This project required nearly every level of software and some hardware. This project entails hardware aspects, sensor drivers, backend web, database, frontend web, and some SSH DNS finagling to present the URL cleanly.</p>
        <p id="6a8dcc53-d740-44b8-983c-bc94799ee91f" className="">This project came about from a few things:</p>
        <ol id="0172e96a-d79c-4b70-822e-c4b03d337e66" className="numbered-list" start="1">
          <li>I wanted a way to monitor the temperature and humidity in my house at various points</li>
        </ol>
        <ol id="bc654be0-9ac4-4cf6-b498-b10a50ef7939" className="numbered-list" start="2">
          <li>I wanted to learn how to work with Bluetooth</li>
        </ol>
        <ol id="70a55e6a-3db5-4d94-959c-55e9ad0a490d" className="numbered-list" start="3">
          <li>I wanted to learn how work on an ARM chip rather than Arduino</li>
        </ol>
        <p id="ff499dfc-ab4b-4c07-bdb4-78e53cead259" className="">This project was intended to be a jumping point to get familiar with the basics of working with ARM and Bluetooth. Keeping things simple and making good progress.</p>
        <p id="1eeb7247-b0ac-4b6c-b772-449cf22b92ee" className="">This project was completed in two weekends. Actual time is about 3 days.</p>
        <p id="4034f13c-556b-496e-84ed-436f6e6c5bb1" className="">I used Segger Embedded Studio and J-Link to develop on the NRF52840 and I use VS Code for everything else.</p>
        <h3 id="88ba5762-7a6e-4a21-9d1d-25800e7b7baa" className="">Links to the code</h3>
        <p id="6ea2fda5-f09a-4b0d-b2f1-ea76820c9e4b" className="">
          <a href="https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor">https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor</a>
        </p>
        <p id="f316687e-8023-44c7-bd4b-92b3a395029b" className="">
          <a href="https://github.com/AubreyTharpe/DHT22-NRF-Driver">https://github.com/AubreyTharpe/DHT22-NRF-Driver</a>
        </p>
        <p id="f13ad238-49ec-47c5-ae18-bcc94cad2640" className="">
          <a href="https://github.com/AubreyTharpe/BLE-Server-Frontend">https://github.com/AubreyTharpe/BLE-Server-Frontend</a>
        </p>
        <h1 id="b8c602ac-baa1-4aa7-bb4c-6a9daad5be34" className="">Hardware</h1>
        <h2 id="2557cd4a-9052-4fa2-90be-3167f52f0258" className="">Microcontroller</h2>
        <div id="87990335-f3cd-4646-a936-52994986d3ba" className="column-list">
          <div id="17867f07-4c8d-4bfd-ae32-46fd6f3efa9c" style={{ width: "50%" }} className="column">
            <p id="0bff24da-9ffc-40f1-b2eb-063ca3a67ab3" className="">The microcontroller used is an NRF52840-DK</p>
            <figure id="c4c88386-ae0f-4939-b2eb-5477f65e30a4" className="image">
              <a href={nrf52840_features}>
                <img alt="" style={{ width: "402px" }} src={nrf52840_features} />
              </a>
            </figure>
          </div>
          <div id="db9d9417-bed7-46fd-b73e-06a7a832e0dc" style={{ width: "50%" }} className="column">
            <figure id="68a69f1b-2f76-4a16-899a-261f9d5e7d03" className="image">
              <a href={nrf52840}>
                <img alt="" style={{ width: "350px" }} src={nrf52840} />
              </a>
            </figure>
          </div>
        </div>
        <p id="d053b589-c272-4ff3-b36e-03756e7d0432" className="">While the board is capable of Bluetooth 5, I did not utilize it. I&#x27;ve been watching this board for a long time and I have several other projects that I&#x27;m hoping to use all of its features in. More on that later.</p>
        <h2 id="112b019c-899a-4890-935b-d8eef1d9de6b" className="">Raspberry Pi 3</h2>
        <figure id="23176bd9-50b8-473a-8962-47201860c357" className="image">
          <a href={Raspberry_Pi_3}>
            <img alt="" style={{ width: "861px" }} src={Raspberry_Pi_3} />
          </a>
        </figure>
        <figure id="19170ec3-4418-428a-a1ca-04cb44539ad1" className="image">
          <a href="https://hackaday.com/wp-content/uploads/2016/02/pispecs2.png">
            <img alt="" src="https://hackaday.com/wp-content/uploads/2016/02/pispecs2.png" />
          </a>
        </figure>
        <p id="d1b993f6-a5a1-4835-8ca5-d8b7e194f15f" className="">I used the raspberry pi, not because I had it laying around (it was....), but because I wanted to design this application for an embedded linux that had bluetooth. I&#x27;ve been looking for an single board computer that has Bluetooth 5 integrated so that I could test the Bluetooth 5 capabilities of the NRF52840. At the time of this project that wasn&#x27;t a reality. Currently, the Raspberry Pi 4 is capable of Bluetooth 5. I think the drivers they use are still modeled after their old ones with Bluetooth 4. So I&#x27;d likely have to write that myself.</p>
        <h3 id="f15567f5-5f67-414d-b6e6-eb65bf35f5b8" className="">References</h3>
        <p id="5d59370b-00bd-4b5b-b7a5-2a447b7ae532" className="">NRF52840-DK page</p>
        <p id="12131912-b696-4432-9f1d-526ed79f9ded" className="">
          <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK">https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK</a>
        </p>
        <p id="b0d7a00e-3bcf-4a81-95d1-aa06324ecbb7" className="">NRF52840 product brief</p>
        <p id="88946f9f-d967-4273-89a7-be30449e0ae4" className="">
          <a href="https://www.nordicsemi.com/-/media/Software-and-other-downloads/Product-Briefs/nRF52840-DK-product-brief.pdf">https://www.nordicsemi.com/-/media/Software-and-other-downloads/Product-Briefs/nRF52840-DK-product-brief.pdf</a>
        </p>
        <p id="af05b668-ed55-4be5-a847-39b687deafb4" className="">Raspberry Pi 3 page</p>
        <p id="49018a09-3c68-46e3-9295-2c5b98e66f4e" className="">
          <a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/">https://www.raspberrypi.org/products/raspberry-pi-3-model-b/</a>
        </p>
        <h2 id="7aa61c1a-354f-4149-803f-2bb6eefd1845" className="">Sensor</h2>
        <p id="0a73ba06-fb58-4b55-89c7-81c47468844e" className="">The sensor was a DHT22. It used a single wire interface with a custom pattern.</p>
        <figure id="5efde71d-1da5-412c-a423-142fcb2f1c26" className="image">
          <a href={dht22}>
            <img alt="" style={{ width: "424px" }} src={dht22} />
          </a>
        </figure>
        <p id="a1756899-c3bb-42eb-b519-d95f618b2643" className="">This was the sensor that I was most familiar with. I&#x27;ve used it on arduino before. However, I had adafruit ease the pain of interfacing with it by providing a driver. While it&#x27;s an extremely popular sensor with a large community, an existing driver for the NRF-SDK was nonexistent and through some googling I found that a lot of people struggled to get it working. Particularly the timing. (I know why now). So I&#x27;m going to post my driver separately in hopes that others who are trying the same thing have an easier time getting it to work.</p>
        <p id="6b41b716-2770-4273-9f8c-fd46d9513112" className="">The DHT family requires a pullup resistor around 4.7k. The datasheet doesn&#x27;t mention this or I&#x27;ve glossed over it. The community discovered that requirement. I didn&#x27;t use an external resistor. I used the internal pullup resistor on my data pin for the NRF52840.</p>
        <h3 id="f74c5216-443b-4792-94b1-d78c97db997d" className="">References</h3>
        <p id="59444012-2bcc-45ea-8c05-840bc84889db" className="">DHT22 Datasheet</p>
        <p id="464d675c-48a6-4510-b1e6-c0024fce60ad" className="">
          <a href="https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf">https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf</a>
        </p>
        <h1 id="3a4d0d5e-01b0-484f-96e0-2d1aeed75e71" className="">Software</h1>
        <h2 id="a81f153c-bf2d-4f85-b4c2-2934c572a503" className="">Embedded/Firmware</h2>
        <figure id="09b8bb63-cf30-4c35-a1c8-72f42cca1997" className="image">
          <a href={Firmware_diagram}>
            <img alt="" style={{ width: "922px" }} src={Firmware_diagram} />
          </a>
        </figure>
        <p id="3d5debd1-dabf-4c54-9e70-fea7c18108c9" className="">It comes as no surprise that this code was written in C. I used the NRF-SDK v15 from Nordic.</p>
        <p id="a473df71-5d7b-42e4-abdd-0193c97cfd48" className="">I found their sdk pretty convoluted. I attribute that to lack of experience in ARM and the occasional well documented library for web or node.</p>
        <p id="94a30086-638a-48bf-869d-fd9ec940e987" className="">This code ran on top of one of their softdevices (S140) which encapsulated the underlying bluetooth drivers. </p>
        <p id="9520eeb0-2735-466c-a5ea-39e0366f6d20" className="">I followed their heart rate peripheral example and modified an empty template example that they provided.</p>
        <h3 id="7465212b-6001-4c45-b1a3-423b22966fbf" className="">DHT22 Driver</h3>
        <p id="56bfe386-6293-4d79-98ce-33c6c7843f08" className="">The DHT22 driver was one that I pieced together from three sources:</p>
        <ul id="ae9f8d2b-1199-4023-9663-3af047f2855b" className="bulleted-list">
          <li>A forum post on nordics forums</li>
        </ul>
        <ul id="19cc19f2-43b6-4729-82ae-0cd495bde355" className="bulleted-list">
          <li>Adafruit&#x27;s own implementation for the Arduino</li>
        </ul>
        <ul id="b8261ddc-2b5b-4709-a468-63c4605d75c4" className="bulleted-list">
          <li>The DHT22 datasheet</li>
        </ul>
        <p id="4dd17afd-f016-4903-a467-6fe88eae7a7a" className="">It was a challenge due to its single wire interface and the strict timing requirements that it had. I think a big reason why it&#x27;s hard to get it to work with the NRF boards is that you cannot disable interrupts and any little thing you put in can throw the timing off. If you disable interrupts then you disable the softdevice that&#x27;s running the bluetooth. That makes microsecond timing difficult. So the trick isn&#x27;t to see it as strict timing. </p>
        <p id="bee533ab-d213-41ea-99d2-66eed28e9f67" className="">The DHT sends data as pulses. 50 us low followed by a high for 26-28 us for a &#x27;0&#x27; bit or a 70 us high for a &#x27;1&#x27; bit.</p>
        <p id="c5e9943b-05e8-4986-b3d4-d2c4e7e24799" className="">So:</p>
        <p id="f36a992a-3697-4a0a-96b0-d850f7922e51" className="">50 us Low = next bit coming</p>
        <p id="82f8fdff-b506-448c-992e-ac54481a5c8e" className="">26-28 us High = 0</p>
        <p id="fc88d29c-18b1-4210-8312-d72a9921ec20" className="">70 us High = 1</p>
        <p id="51a681a5-d25f-41a0-876f-6ae59847456f" className="">I realized that the 50 us low was a reference point. If the timing for the next bit was lower than that it was a 0. If the timing was higher than it, then it was a 1. So I kept track of relative timings and parsed the data that way.</p>
        <h3 id="82e267e4-7953-4f16-a416-8518555028ad" className="">Bluetooth</h3>
        <p id="c4c4a8a6-2329-467e-9dc3-f3479214b890" className="">Ah, bluetooth. That wonderful technology that keeps all of our devices connected from our smart watches to our cars. Peel back that ease of connectivity for the consumer and you find a nightmare of documentation and standards for developers. It makes sense though. With millions of devices, if you don&#x27;t have a standard way of communicating with each other it&#x27;s just interference chaos. I have also found that ease of use for consumer and developer tends to be a tug of war. If it makes the user&#x27;s life easier, it&#x27;s likely to make the developers job much harder. If it&#x27;s easy for the developer, then the user experience is going to send them running. So Bluetooth being complicated makes a lot of sense. I just wish it was easy for both side.</p>
        <p id="e94a9ec4-a45c-4955-b363-d179ce31bad4" className="">According to the Bluetooth GATT specification, I&#x27;m using an Environmental Sensing Service (ESS). This service has more specifications for Bluetooth characteristics. There are a ton characteristics that fit within ESS. I&#x27;m only using Temperature and Humidity characteristics. Those are defined in GATT Specification Supplement (GSS).</p>
        <hr id="e615e92b-cc74-430c-8461-a5f19e6b8c4c" />
        <p id="7d0262d4-8ad4-4ba9-ab5d-fcef7b52b216" className="">So how the firmware works is this:</p>
        <ol id="697b1e23-8517-45b8-a05f-95a4a43391a6" className="numbered-list" start="1">
          <li>Boot up and start advertising</li>
        </ol>
        <ol id="023f73c6-6e5c-4ae2-b9cd-1c98c12af098" className="numbered-list" start="2">
          <li>Advertise for 3 minutes blinking an LED each second</li>
        </ol>
        <ol id="5282f1c6-6bbc-4073-a44d-e302e94e1418" className="numbered-list" start="3">
          <li>If no connection is made in 3 minutes, sleep</li>
        </ol>
        <ol id="de824bed-5eae-4e91-8de0-332c3e45ef83" className="numbered-list" start="4">
          <li>If a connection is made, wait for characteristic to be subscribed to</li>
        </ol>
        <ol id="28118927-80cd-427b-8671-b6fc8e353d6e" className="numbered-list" start="5">
          <li>Once a characteristic is subscribed to the data read from the the sensor and sent on a interval of 10 seconds</li>
        </ol>
        <ol id="8821f6cd-db39-436e-9536-eb9c0fad50d7" className="numbered-list" start="6">
          <li>The data reaches the backend server</li>
        </ol>
        <ol id="c018272b-bad0-48a3-8543-160a816923a1" className="numbered-list" start="7">
          <li>Repeat until the connection is terminated</li>
        </ol>
        <p id="775b6bfc-140e-44cf-a20f-81f38644257c" className="">That&#x27;s the simple run down of it. To dive into the details, please see the code.</p>
        <h3 id="c17a3406-17ef-4875-b9f6-a80d357637c5" className="">References</h3>
        <p id="5bc4d3fe-b75f-474e-ba94-f4fc79e01929" className="">NRF-SDK</p>
        <p id="1e71ac87-ef3d-4c42-9b1a-ce09cf809d68" className="">
          <a href="https://infocenter.nordicsemi.com/index.jsp?topic=%2Fstruct_sdk%2Fstruct%2Fsdk_nrf5_latest.html&amp;cp=5_0">https://infocenter.nordicsemi.com/index.jsp?topic=%2Fstruct_sdk%2Fstruct%2Fsdk_nrf5_latest.html&amp;cp=5_0</a>
        </p>
        <p id="ec8c7874-b9f3-4467-9177-fd0308a04ce4" className="">GATT Specifications</p>
        <p id="925bf5e4-fb0f-4e57-8218-fa6218e917d2" className="">
          <a href="https://www.bluetooth.com/specifications/gatt/">https://www.bluetooth.com/specifications/gatt/</a>
        </p>
        <p id="94aca95e-e613-47a1-a21e-312f942df011" className="">GSS pdf</p>
        <p id="5491cd1c-b259-4b7d-8e89-361a6059bcc1" className="">
          <a href="https://www.bluetooth.org/DocMan/handlers/DownloadDoc.ashx?doc_id=429632">https://www.bluetooth.org/DocMan/handlers/DownloadDoc.ashx?doc_id=429632</a>
        </p>
        <p id="e0f307a8-78e1-4dac-b039-021827d7e8ac" className="">Environmental Sensing Service </p>
        <p id="8cc6e130-eb58-440d-97a7-46d1daf01148" className="">
          <a href="https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.environmental_sensing.xml">https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.environmental_sensing.xml</a>
        </p>
        <p id="0a48de9c-d98a-4958-ad61-a76b1b2a0a3e" className="">DHT22 sources</p>
        <p id="6d1b62b1-a1e6-4530-9c41-28dea902c03f" className="">
          <a href="https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf">https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf</a>
        </p>
        <p id="40c4637b-9c35-462b-9183-a95dd4dbbcd6" className="">
          <a href="https://devzone.nordicsemi.com/f/nordic-q-a/39358/dht22-sensor-data-pin-reading-low">https://devzone.nordicsemi.com/f/nordic-q-a/39358/dht22-sensor-data-pin-reading-low</a>
        </p>
        <p id="334d21b7-1490-41cc-8779-92018924b4ea" className="">
          <a href="https://github.com/adafruit/DHT-sensor-library/blob/master/DHT.cpp">https://github.com/adafruit/DHT-sensor-library/blob/master/DHT.cpp</a>
        </p>
        <h2 id="5f72efc3-b805-4f59-a83f-bb2278227eb6" className="">Backend</h2>
        <figure id="1042f6bc-4f36-46ed-baa4-3f061f60dc96" className="image">
          <a href={Backend_Diagram}>
            <img alt="" style={{ width: "1081px" }} src={Backend_Diagram} />
          </a>
        </figure>
        <p id="c395d139-0dd4-4dad-ac47-2b642fc6f5e4" className="">The backend application is written in node using express, sockets, sqlite 3, and noble. The language is JavaScript.</p>
        <ul id="b86f37dd-34e6-418e-837c-0e437a8eecab" className="bulleted-list">
          <li>Noble connects to the linux bluetooth driver on the raspberry pi and allows you to connect to and read bluetooth devices in the area</li>
        </ul>
        <ul id="33c1e979-bec8-4857-8fa0-b2d625995d16" className="bulleted-list">
          <li>Express is a web framework for creating routes to serve webpages and APIs</li>
        </ul>
        <ul id="3b80f3e2-334f-4d37-946f-f5a0f1777d33" className="bulleted-list">
          <li>Sockets allows real-time communication between the frontend and the backend</li>
        </ul>
        <ul id="103fe903-5de5-4dc8-842d-7f5b9165bc5d" className="bulleted-list">
          <li>Sqlite 3 is the database that stores the temperature and humidity data along with a timestamp</li>
        </ul>
        <p id="001fb6fd-07af-4a2f-bc63-0595331adf4b" className="">In addition to the code, I use <a href="http://serveo.net">serveo.net</a> and autossh to establish a tunnel connection with my Raspberry Pi using CloudFlare as my DNS. I had an issue not long ago with someone probing my network for weaknesses and disrupting my internet. So I decided that a tunnel relayed to my own domain would serve better and be more permanent this time. It&#x27;s set up a service on the Raspberry Pi so it will always be connected.</p>
        <hr id="e7ace592-5bad-47c8-b656-4806bbc0313a" />
        <p id="4fca81fd-5fb0-4489-87bd-026613abc2dd" className="">Here&#x27;s how the backend flows:</p>
        <ol id="7532477c-b1e5-43cb-9d1d-bf1cecea013a" className="numbered-list" start="1">
          <li>Search for bluetooth devices.</li>
        </ol>
        <ol id="789e68f8-251a-4944-b61b-e19a29d43f8b" className="numbered-list" start="2">
          <li>Find one named BLE_Temp_Humid</li>
        </ol>
        <ol id="c765d7b5-38b6-441e-9fea-6186f100283f" className="numbered-list" start="3">
          <li>Connect to it and subscribe to the Temperature and Humidity characteristics</li>
        </ol>
        <ol id="9d0ae076-03af-4f82-802a-88deb0433d01" className="numbered-list" start="4">
          <li>When data arrives send an event for the characteristic type and store the data in an object.</li>
        </ol>
        <ol id="6af061a6-53ee-4f31-bd1d-fed018402ce1" className="numbered-list" start="5">
          <li>Once both characteristics have arrived then send another event to store both temperature and humidity in the database with a timestamp</li>
        </ol>
        <ol id="4e1e21a7-d76c-4a10-a7fa-086d2839f4f6" className="numbered-list" start="6">
          <li>Repeat for data collection</li>
        </ol>
        <ol id="658525a8-d89c-4ed9-bcd5-b5cbc125910c" className="numbered-list" start="7">
          <li>Once a user connects, they establish a socket connection to be notified when new data has arrived.</li>
        </ol>
        <ol id="6f21e662-d73c-4255-a794-e9599cd378ee" className="numbered-list" start="8">
          <li>When they receive that notification they make a call to the backend to get the past 25 records for a timing scale they specify.</li>
        </ol>
        <ol id="ff5042ee-fe4f-473b-b143-eb7ff2c31d8b" className="numbered-list" start="9">
          <li>The notification process continues until they close the browser</li>
        </ol>
        <h3 id="6039e391-2a71-4e4a-92a1-54571628f78e" className="">References</h3>
        <p id="6ac1d44d-c71b-42bf-9ae1-f7e23df75c53" className="">Express</p>
        <p id="3310d3b2-b564-4da9-8faf-72b9edb9f4ed" className="">
          <a href="http://expressjs.com/">http://expressjs.com/</a>
        </p>
        <p id="8bbf746b-f4a5-43d2-ba17-e514d01e66f5" className="">Sockets</p>
        <p id="55d25dc2-adef-4485-a0cf-58a21837c2e2" className="">
          <a href="https://socket.io/">https://socket.io/</a>
        </p>
        <p id="8270c238-5ea3-4aef-843c-339999dc50f4" className="">Sqlite 3</p>
        <p id="88574ae8-90ec-4a12-9950-ae0f7ca2fa6d" className="">
          <a href="https://www.npmjs.com/package/sqlite3">https://www.npmjs.com/package/sqlite3</a>
        </p>
        <p id="7ac1226f-c9a9-446b-b7cc-5618a9b26331" className="">Noble</p>
        <p id="9327c482-e68b-47d6-8f80-0bc4ecdfc304" className="">
          <a href="https://www.npmjs.com/package/noble">https://www.npmjs.com/package/noble</a>
        </p>
        <h2 id="f7de8247-e9f7-49cf-9a06-1b1226673b82" className="">Frontend</h2>
        <figure id="5c1e22fd-b318-4f98-a230-413c5673357e" className="image">
          <a href={Frontend_Diagram}>
            <img alt="" style={{ width: "1031px" }} src={Frontend_Diagram} />
          </a>
        </figure>
        <p id="96cdcc0c-983f-41ab-bb71-428800a6a004" className="">The frontend was created using React, React Router, React Vis, Sockets, Axios, and Bootstrap. The language is naturally JavaScript, HTML, and CSS.</p>
        <ul id="73c059e1-d2e6-4448-b20f-6e7e6270f18a" className="bulleted-list">
          <li>React is a JavaScript library for building user interfaces</li>
        </ul>
        <ul id="ee16d052-125f-4c6c-a1c5-54dc9e20d7d5" className="bulleted-list">
          <li>React Router is a JavaScript library for doing routing within the client side</li>
        </ul>
        <ul id="90e16b5b-e296-4a36-89d8-e5b5e3e6de90" className="bulleted-list">
          <li>React Vis is a visualization library for displaying data in charts and graphs</li>
        </ul>
        <ul id="406a8b83-dcf2-433e-8c9e-4bf71447f32f" className="bulleted-list">
          <li>Sockets allows real-time communication between the frontend and the backend</li>
        </ul>
        <ul id="4620e1de-1463-4497-beed-4c912e1c2802" className="bulleted-list">
          <li>Axios is a Promise based HTTP client for the browser and node.js</li>
        </ul>
        <ul id="b8635334-ee96-416b-8895-af0a6bba5460" className="bulleted-list">
          <li>Bootstrap is a CSS framework for styling websites</li>
        </ul>
        <p id="c4e81170-9421-445e-b706-a72da2f99108" className="">The frontend is setup to be two pages. </p>
        <p id="27515e5a-ac42-4a63-9ace-3c866d20c4cd" className="">The first page, dashboard, is the page you see when you first go to the website. It shows two graphs. The temperature graph shows temperature over time in either celsius or fahrenheit, defaulting to fahrenheit. The humidity graph shows humidity as a percentage over time.</p>
        <p id="3f975812-7c38-455e-bd00-03cd44f44613" className="">The second page is this about page that describes everything that&#x27;s happening.</p>
        <hr id="0c4f186f-76b8-456e-92b2-51ed174dd96e" />
        <p id="c5da7120-5cb7-4e64-8e7c-9a3c9fb933b2" className="">The flow for the frontend is pretty straightforward:</p>
        <ol id="c8069ec1-6a02-48a1-a52f-a4763fbb7297" className="numbered-list" start="1">
          <li>Request data with timing scale from backend</li>
        </ol>
        <ol id="788f8410-39a9-40aa-910e-11073539abd9" className="numbered-list" start="2">
          <li>Display data in charts</li>
        </ol>
        <ol id="91f1f1ba-a65f-4117-870a-2c93a51e383a" className="numbered-list" start="3">
          <li>Establish socket connection to backend</li>
        </ol>
        <ol id="0e9186e3-d9e1-4455-abdc-aee814dc31a5" className="numbered-list" start="4">
          <li>On new data arriving, request data with timing scale from backend</li>
        </ol>
        <ol id="f8775e7f-cbb2-4d81-b8a9-fe040b4247db" className="numbered-list" start="5">
          <li>Update data in charts</li>
        </ol>
        <ol id="60f486a3-a160-4d3e-aaff-423f077103c0" className="numbered-list" start="6">
          <li>If timing scale or temperature type changes<ol id="cea59a02-a7f3-4289-9580-4835ae39017f" className="numbered-list" start="1">
            <li>Kill socket connection</li>
          </ol>
            <ol id="25c18c33-cb4e-4250-8df7-a7e2bbab0500" className="numbered-list" start="2">
              <li>Restart from step 1 to get new values and establish a new socket connection</li>
            </ol>
          </li>
        </ol>
        <h3 id="3bbe8bdb-137c-4a53-9cc3-8ebd2a3cfa09" className="">References</h3>
        <p id="3147ba4c-04c9-4adb-99d9-2c067e7e9453" className="">React</p>
        <p id="f605a341-427f-4a0f-89ff-30c6ab0e92ba" className="">
          <a href="https://reactjs.org/">https://reactjs.org/</a>
        </p>
        <p id="ade5f5ac-dcbd-4316-93e4-285b550934c5" className="">React Router</p>
        <p id="2209e82f-5f8c-4516-a851-851b2b26d358" className="">
          <a href="https://reacttraining.com/react-router/">https://reacttraining.com/react-router/</a>
        </p>
        <p id="cf8b5b27-d15e-4048-9962-5757b03b4690" className="">React Vis</p>
        <p id="9519b3e9-f02b-4a9c-9ebd-d0cc45e11576" className="">
          <a href="https://github.com/uber/react-vis">https://github.com/uber/react-vis</a>
        </p>
        <p id="68d7b135-f882-48af-a892-28931a3b7c26" className="">Sockets</p>
        <p id="a16fea8c-4b7e-4d00-b6f9-f53dc678bb16" className="">
          <a href="https://socket.io/">https://socket.io/</a>
        </p>
        <p id="1eeac721-25f2-4078-a015-dbac5ce9dc3f" className="">Axios</p>
        <p id="7150cad2-8910-4edb-b15a-709d08dbc2b5" className="">
          <a href="https://www.npmjs.com/package/axios">https://www.npmjs.com/package/axios</a>
        </p>
        <p id="2fdebd6c-b5d0-4585-b446-7e86a768a993" className="">Bootstrap</p>
        <p id="66a86157-1c4a-45ab-84fe-8585627b6e9a" className="">
          <a href="https://react-bootstrap.github.io/">https://react-bootstrap.github.io/</a>
        </p>
        <p id="ee5cfb97-af92-4731-b4fe-a95c60b0d2fc" className="">
          <a href="https://getbootstrap.com/">https://getbootstrap.com/</a>
        </p>
        <h2 id="d4270981-3bb6-47e0-863f-0cb00ee96c41" className="">Challenges Faced</h2>
        <h3 id="cca1ec62-4ab8-49e9-8305-d388ed66bf08" className="">Bluetooth</h3>
        <p id="10ae1ff8-ba3f-46d4-96ae-65124682227d" className="">Figuring out how to navigate and understand bluetooth was a pain. It took me a solid day to sift through the bluetooth documentation and understand how a bluetooth application is suppose to work. I honestly still don&#x27;t know that I have a firm grasp. I understand it to navigate it though. That&#x27;s a start.</p>
        <h3 id="b5728c4e-0915-4e01-857c-b2bf4c287b74" className="">NRF-SDK</h3>
        <p id="67480a43-c2f5-48cf-b920-59afbf70e37e" className="">I mentioned early that it was convoluted. I spent more time searching google for answers that led me to parts of the documentation that I needed than trying to digest the entire documentation. I feel like I have a much better handle on it now and I&#x27;m far more comfortable navigating it and going through their documentation to find the pieces that I need. I still think it could use some work to make it easier. </p>
        <p id="84399c22-4d37-40ac-a01e-4b4174c5d21d" className="">Going through the examples that they provided with the SDK was as enlightening as it was frustrating. It&#x27;s been awhile since I dove straight into firmware and I&#x27;ve spent more time working in JavaScript than I have in C. Something I want to change. I miss C and C++. Speaking of C.</p>
        <h3 id="f3d6ed0f-c9d1-47ad-8f93-e05b90b91057" className="">Firmware</h3>
        <p id="7981bb8c-0843-4ea2-89f0-3187a58e415d" className="">C. It&#x27;s been awhile since I&#x27;ve worked in C. It was a great to jump back into it but at the same time it was rough. School didn&#x27;t teach me everything I needed to know. I spent a lot of time relearning C and discovering new things about it. (Function pointers are things!) I want to dive deeper into C. Not just for working in embedded systems but for myself. I attribute my programming skills and knowledge of computers to C/C++. They forced me to learn the underlying systems and how to manage memory early on. It&#x27;s been nothing but a boon for me ever since. So for my deeper dive into C, I bought 3 books:</p>
        <ul id="f1a178ba-24d6-4d10-8303-4f6b6f0d5d7e" className="bulleted-list">
          <li>Mastering Algorithms with C</li>
        </ul>
        <ul id="d6e60d73-088d-485a-bde6-15eb5200c7f7" className="bulleted-list">
          <li>Test Driven Development for Embedded C</li>
        </ul>
        <ul id="67f45829-ca92-4669-99da-e95095696bed" className="bulleted-list">
          <li>The C Programming Language</li>
        </ul>
        <p id="baaf77d1-49ef-43ae-a79d-2dd426665d42" className="">I plan on going through these slowly. I don&#x27;t want to skim for reference. I want to ingrain that knowledge into me. Afterall:</p>
        <blockquote id="cb80bf21-a567-4ddd-b1e7-5e8b1195f1b7" className="">As developers of software, it is important to remember that we must be more than just proficient with programming languages and development tools; developing elegant software is a matter of craftsmanship. A good understand of data structures and algorithms is an important part of becoming such a craftsman.
-- Kyle Loudon, Mastering Algorithms with C</blockquote>
        <h3 id="70981b1f-e5e7-4317-8415-fa0d585bf4a1" className="">DHT22</h3>
        <p id="327a02d1-45de-4c47-b4fb-c405b36c3ef8" className="">The DHT22 was a tricky sensor. Not the trickiest sensor I&#x27;ve written a driver for but still tricky. The one wire interface was new and I enjoyed trying to figure it out. I&#x27;m lucky enough to have had reference to go off of as well as the datasheet. That timing while having to deal with interrupts was a doozy though. It&#x27;s done and it works. I hope whoever needs it in the future can take my code and just plug and go.</p>
        <p id="38f05c36-6691-4db1-8231-fc7676706b98" className="">I also found out that the first sensor I tested wasn&#x27;t functioning. Its humidity was a constant 1%. My second one worked thankfully.</p>
        <h3 id="1edd00a6-543f-4ea5-86a9-eccfa2104f25" className="">Sockets</h3>
        <p id="02ff283c-5b76-45e9-a617-a8f660fbafff" className="">I&#x27;ve been looking into doing some real time communication in an application. This was a test run with sockets. Bit of a learning curve to get started with them but after you find the pattern it&#x27;s actually brilliantly simple. I had a rough time getting everything talking to each other. Particularly the temperature and humidity. I wasn&#x27;t doing one shot reads. I was subscribing to the bluetooth data. So I had to take the separate streams and combine them. It was an interesting problem with a not so interesting solution. I set up two events for each, temperature and humidity. I kept an object with null values for each. When each function fired off, it populated the field in the object and then checked if both properties weren&#x27;t null. If not then it passed it over to the database function which added it to the database and told the frontend that new data was available.</p>
        <h3 id="8c1f0800-282d-485f-a296-462c7c478142" className="">SSH Tunnel</h3>
        <p id="a91151fb-d46d-4e3c-bdfd-a07280520f6d" className="">To get the url to a clean looking url using my domain I found a way to do it with <a href="http://serveo.net">serveo.net</a>, ssh, and having my DNS routed by CloudFlare. It was a good two hours of fighting to figure out how serveo wanted me to establish my setting on the DNS. Figured out and it&#x27;s setup as a service with autossh on the Raspberry Pi. So it will always be up now!</p>
        <h1 id="8a249806-3724-4d70-8d21-f2a13b305147" className="">Future Work</h1>
        <p id="e4780eb5-f190-4b6f-ae6d-6a78fd21a2d7" className="">These are some of the things I would like to work on in the future:</p>
        <p id="4e61d029-4a5e-4178-a254-b06da40bc2a8" className="">For sure:</p>
        <ul id="fac060c8-9db0-4494-a10a-24b3c0a0e7d9" className="bulleted-list">
          <li>Multiple boards connected to the raspberry pi for multiple rooms (Need to buy more sensors)</li>
        </ul>
        <ul id="5d0a0154-9bef-4b37-b1b5-e9a1157cf13a" className="bulleted-list">
          <li>New sensors, ex: Door sensor, motion sensor, dust sensor, relay to control a lamp (would require learning how to send data to the bluetooth device)</li>
        </ul>
        <ul id="e5011f10-07a7-4d90-a7a8-8d6a41acb6cc" className="bulleted-list">
          <li>Cleaner dashboard to accommodate the new sensors</li>
        </ul>
        <ul id="08f5f1d9-d684-4ea0-8477-2b9b42373360" className="bulleted-list">
          <li>More modular firmware to quickly develop new sensors</li>
        </ul>
        <p id="4074b30f-f41e-46df-8013-86f01ec79679" className="">Maybes:</p>
        <ul id="16ea426e-09a6-4642-a27c-33b9e27823e9" className="bulleted-list">
          <li>Add a flag to indicate if temperature changed trend to see when the AC turned on</li>
        </ul>
        <ul id="1682e8e3-77dc-4b89-b488-25bb5576f5e3" className="bulleted-list">
          <li>Perform analytics to see how often ac unit runs and for how long. Would require quick polling and should likely not be battery powered. Battery powered is still possible but heavy optimation would be required.</li>
        </ul>
        <h3 id="9ae385c5-3714-4594-a849-74f9a71828ab" className="">Links to the code</h3>
        <p id="6a8c3215-863e-413f-b7f1-7d70acc638a2" className="">
          <a href="https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor">https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor</a>
        </p>
        <p id="55245fd5-8842-4383-947c-65d17582f441" className="">
          <a href="https://github.com/AubreyTharpe/DHT22-NRF-Driver">https://github.com/AubreyTharpe/DHT22-NRF-Driver</a>
        </p>
        <p id="177b6a7d-fb42-4945-b5f3-9d6072c21adb" className="">
          <a href="https://github.com/AubreyTharpe/BLE-Server-Frontend">https://github.com/AubreyTharpe/BLE-Server-Frontend</a>
        </p>
        <p id="c5aba3a4-1dee-4e82-9118-2945a9178016" className="">
        </p>
      </div>
    </div>
  );
}

export default About;
