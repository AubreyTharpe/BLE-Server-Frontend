# Home Automation Sensing

# Overview

![](static/media/temperature_and_humidity_breath_test-f95cd6ea-9913-4b10-8ae8-cedbb1d9874d.png "Title")

The purpose of this project is to collect temperature and humidity readings from a microcontroller to be monitored on the web. Full stack's connotation doesn't do this project justice. This project required nearly every level of software and some hardware. This project entails hardware aspects, sensor drivers, backend web, database, frontend web, and some SSH DNS finagling to present the URL cleanly.

This project came about from a few things:

1. I wanted a way to monitor the temperature and humidity in my house at various points
2. I wanted to learn how to work with Bluetooth
3. I wanted to learn how work on an ARM chip rather than Arduino

This project was intended to be a jumping point to get familiar with the basics of working with ARM and Bluetooth. Keeping things simple and making good progress.

This project was completed in two weekends. Actual time is about 3 days.

I used Segger Embedded Studio and J-Link to develop on the NRF52840 and I use VS Code for everything else.

### Links to the code

[https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor](https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor)

[https://github.com/AubreyTharpe/DHT22-NRF-Driver](https://github.com/AubreyTharpe/DHT22-NRF-Driver)

[https://github.com/AubreyTharpe/BLE-Server-Frontend](https://github.com/AubreyTharpe/BLE-Server-Frontend)

# Hardware

## Microcontroller

The microcontroller used is an NRF52840-DK

![](Untitled-3e673d38-5458-4371-9b49-9dee7fa3f5da.png)

![](Untitled-0af6b77b-3682-4770-a0dc-a80563a595d6.png)

While the board is capable of Bluetooth 5, I did not utilize it. I've been watching this board for a long time and I have several other projects that I'm hoping to use all of its features in. More on that later.

## Raspberry Pi 3

![](Raspberry_Pi_3-4ee9a19d-43fc-466e-a054-903a0cae0193.png)

![](https://hackaday.com/wp-content/uploads/2016/02/pispecs2.png)

I used the raspberry pi, not because I had it laying around (it was....), but because I wanted to design this application for an embedded linux that had bluetooth. I've been looking for an single board computer that has Bluetooth 5 integrated so that I could test the Bluetooth 5 capabilities of the NRF52840. At the time of this project that wasn't a reality. Currently, the Raspberry Pi 4 is capable of Bluetooth 5. I think the drivers they use are still modeled after their old ones with Bluetooth 4. So I'd likely have to write that myself.

### References

NRF52840-DK page

[https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK](https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK)

NRF52840 product brief

[https://www.nordicsemi.com/-/media/Software-and-other-downloads/Product-Briefs/nRF52840-DK-product-brief.pdf](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Product-Briefs/nRF52840-DK-product-brief.pdf)

Raspberry Pi 3 page

[https://www.raspberrypi.org/products/raspberry-pi-3-model-b/](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)

## Sensor

The sensor was a DHT22. It used a single wire interface with a custom pattern.

![](Untitled-b6090d68-66a8-4372-9d20-1b9f0c0a51e3.png)

This was the sensor that I was most familiar with. I've used it on arduino before. However, I had adafruit ease the pain of interfacing with it by providing a driver. While it's an extremely popular sensor with a large community, an existing driver for the NRF-SDK was nonexistent and through some googling I found that a lot of people struggled to get it working. Particularly the timing. (I know why now). So I'm going to post my driver separately in hopes that others who are trying the same thing have an easier time getting it to work.

The DHT family requires a pullup resistor around 4.7k. The datasheet doesn't mention this or I've glossed over it. The community discovered that requirement. I didn't use an external resistor. I used the internal pullup resistor on my data pin for the NRF52840.

### References

DHT22 Datasheet

[https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf](https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf)

# Software

## Embedded/Firmware

![](Firmware-4066773e-6887-4c12-981d-8a4b1bb5b98e.png)

It comes as no surprise that this code was written in C. I used the NRF-SDK v15 from Nordic.

I found their sdk pretty convoluted. I attribute that to lack of experience in ARM and the occasional well documented library for web or node.

This code ran on top of one of their softdevices (S140) which encapsulated the underlying bluetooth drivers. 

I followed their heart rate peripheral example and modified an empty template example that they provided.

### DHT22 Driver

The DHT22 driver was one that I pieced together from three sources:

- A forum post on nordics forums
- Adafruit's own implementation for the Arduino
- The DHT22 datasheet

It was a challenge due to its single wire interface and the strict timing requirements that it had. I think a big reason why it's hard to get it to work with the NRF boards is that you cannot disable interrupts and any little thing you put in can throw the timing off. If you disable interrupts then you disable the softdevice that's running the bluetooth. That makes microsecond timing difficult. So the trick isn't to see it as strict timing. 

The DHT sends data as pulses. 50 us low followed by a high for 26-28 us for a '0' bit or a 70 us high for a '1' bit.

So:

50 us Low = next bit coming

26-28 us High = 0

70 us High = 1

I realized that the 50 us low was a reference point. If the timing for the next bit was lower than that it was a 0. If the timing was higher than it, then it was a 1. So I kept track of relative timings and parsed the data that way.

### Bluetooth

Ah, bluetooth. That wonderful technology that keeps all of our devices connected from our smart watches to our cars. Peel back that ease of connectivity for the consumer and you find a nightmare of documentation and standards for developers. It makes sense though. With millions of devices, if you don't have a standard way of communicating with each other it's just interference chaos. I have also found that ease of use for consumer and developer tends to be a tug of war. If it makes the user's life easier, it's likely to make the developers job much harder. If it's easy for the developer, then the user experience is going to send them running. So Bluetooth being complicated makes a lot of sense. I just wish it was easy for both side.

According to the Bluetooth GATT specification, I'm using an Environmental Sensing Service (ESS). This service has more specifications for Bluetooth characteristics. There are a ton characteristics that fit within ESS. I'm only using Temperature and Humidity characteristics. Those are defined in GATT Specification Supplement (GSS).

---

So how the firmware works is this:

1. Boot up and start advertising
2. Advertise for 3 minutes blinking an LED each second
3. If no connection is made in 3 minutes, sleep
4. If a connection is made, wait for characteristic to be subscribed to
5. Once a characteristic is subscribed to the data read from the the sensor and sent on a interval of 10 seconds
6. The data reaches the backend server
7. Repeat until the connection is terminated

That's the simple run down of it. To dive into the details, please see the code.

### References

NRF-SDK

[https://infocenter.nordicsemi.com/index.jsp?topic=%2Fstruct_sdk%2Fstruct%2Fsdk_nrf5_latest.html&cp=5_0](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fstruct_sdk%2Fstruct%2Fsdk_nrf5_latest.html&cp=5_0)

GATT Specifications

[https://www.bluetooth.com/specifications/gatt/](https://www.bluetooth.com/specifications/gatt/)

GSS pdf

[https://www.bluetooth.org/DocMan/handlers/DownloadDoc.ashx?doc_id=429632](https://www.bluetooth.org/DocMan/handlers/DownloadDoc.ashx?doc_id=429632)

Environmental Sensing Service 

[https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.environmental_sensing.xml](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.environmental_sensing.xml)

DHT22 sources

[https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf](https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf)

[https://devzone.nordicsemi.com/f/nordic-q-a/39358/dht22-sensor-data-pin-reading-low](https://devzone.nordicsemi.com/f/nordic-q-a/39358/dht22-sensor-data-pin-reading-low)

[https://github.com/adafruit/DHT-sensor-library/blob/master/DHT.cpp](https://github.com/adafruit/DHT-sensor-library/blob/master/DHT.cpp)

## Backend

![](Backend_Diagram-b8b5d79e-7a31-4708-bd5f-4bc14e9f4ba0.png)

The backend application is written in node using express, sockets, sqlite 3, and noble. The language is JavaScript.

- Noble connects to the linux bluetooth driver on the raspberry pi and allows you to connect to and read bluetooth devices in the area
- Express is a web framework for creating routes to serve webpages and APIs
- Sockets allows real-time communication between the frontend and the backend
- Sqlite 3 is the database that stores the temperature and humidity data along with a timestamp

In addition to the code, I use [serveo.net](http://serveo.net) and autossh to establish a tunnel connection with my Raspberry Pi using CloudFlare as my DNS. I had an issue not long ago with someone probing my network for weaknesses and disrupting my internet. So I decided that a tunnel relayed to my own domain would serve better and be more permanent this time. It's set up a service on the Raspberry Pi so it will always be connected.

---

Here's how the backend flows:

1. Search for bluetooth devices.
2. Find one named BLE_Temp_Humid
3. Connect to it and subscribe to the Temperature and Humidity characteristics
4. When data arrives send an event for the characteristic type and store the data in an object.
5. Once both characteristics have arrived then send another event to store both temperature and humidity in the database with a timestamp
6. Repeat for data collection
7. Once a user connects, they establish a socket connection to be notified when new data has arrived.
8. When they receive that notification they make a call to the backend to get the past 25 records for a timing scale they specify.
9. The notification process continues until they close the browser

### References

Express

[http://expressjs.com/](http://expressjs.com/)

Sockets

[https://socket.io/](https://socket.io/)

Sqlite 3

[https://www.npmjs.com/package/sqlite3](https://www.npmjs.com/package/sqlite3)

Noble

[https://www.npmjs.com/package/noble](https://www.npmjs.com/package/noble)

## Frontend

![](Frontend_Diagram-88e67070-bba4-45cf-a904-85cc8508d5a4.png)

The frontend was created using React, React Router, React Vis, Sockets, Axios, and Bootstrap. The language is naturally JavaScript, HTML, and CSS.

- React is a JavaScript library for building user interfaces
- React Router is a JavaScript library for doing routing within the client side
- React Vis is a visualization library for displaying data in charts and graphs
- Sockets allows real-time communication between the frontend and the backend
- Axios is a Promise based HTTP client for the browser and node.js
- Bootstrap is a CSS framework for styling websites

The frontend is setup to be two pages. 

The first page, dashboard, is the page you see when you first go to the website. It shows two graphs. The temperature graph shows temperature over time in either celsius or fahrenheit, defaulting to fahrenheit. The humidity graph shows humidity as a percentage over time.

The second page is this about page that describes everything that's happening.

---

The flow for the frontend is pretty straightforward:

1. Request data with timing scale from backend
2. Display data in charts
3. Establish socket connection to backend
4. On new data arriving, request data with timing scale from backend
5. Update data in charts
6. If timing scale or temperature type changes
    1. Kill socket connection
    2. Restart from step 1 to get new values and establish a new socket connection

### References

React

[https://reactjs.org/](https://reactjs.org/)

React Router

[https://reacttraining.com/react-router/](https://reacttraining.com/react-router/)

React Vis

[https://github.com/uber/react-vis](https://github.com/uber/react-vis)

Sockets

[https://socket.io/](https://socket.io/)

Axios

[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

Bootstrap

[https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

[https://getbootstrap.com/](https://getbootstrap.com/)

## Challenges Faced

### Bluetooth

Figuring out how to navigate and understand bluetooth was a pain. It took me a solid day to sift through the bluetooth documentation and understand how a bluetooth application is suppose to work. I honestly still don't know that I have a firm grasp. I understand it to navigate it though. That's a start.

### NRF-SDK

I mentioned early that it was convoluted. I spent more time searching google for answers that led me to parts of the documentation that I needed than trying to digest the entire documentation. I feel like I have a much better handle on it now and I'm far more comfortable navigating it and going through their documentation to find the pieces that I need. I still think it could use some work to make it easier. 

Going through the examples that they provided with the SDK was as enlightening as it was frustrating. It's been awhile since I dove straight into firmware and I've spent more time working in JavaScript than I have in C. Something I want to change. I miss C and C++. Speaking of C.

### Firmware

C. It's been awhile since I've worked in C. It was a great to jump back into it but at the same time it was rough. School didn't teach me everything I needed to know. I spent a lot of time relearning C and discovering new things about it. (Function pointers are things!) I want to dive deeper into C. Not just for working in embedded systems but for myself. I attribute my programming skills and knowledge of computers to C/C++. They forced me to learn the underlying systems and how to manage memory early on. It's been nothing but a boon for me ever since. So for my deeper dive into C, I bought 3 books:

- Mastering Algorithms with C
- Test Driven Development for Embedded C
- The C Programming Language

I plan on going through these slowly. I don't want to skim for reference. I want to ingrain that knowledge into me. Afterall:

> As developers of software, it is important to remember that we must be more than just proficient with programming languages and development tools; developing elegant software is a matter of craftsmanship. A good understand of data structures and algorithms is an important part of becoming such a craftsman.
-- Kyle Loudon, Mastering Algorithms with C

### DHT22

The DHT22 was a tricky sensor. Not the trickiest sensor I've written a driver for but still tricky. The one wire interface was new and I enjoyed trying to figure it out. I'm lucky enough to have had reference to go off of as well as the datasheet. That timing while having to deal with interrupts was a doozy though. It's done and it works. I hope whoever needs it in the future can take my code and just plug and go.

I also found out that the first sensor I tested wasn't functioning. Its humidity was a constant 1%. My second one worked thankfully.

### Sockets

I've been looking into doing some real time communication in an application. This was a test run with sockets. Bit of a learning curve to get started with them but after you find the pattern it's actually brilliantly simple. I had a rough time getting everything talking to each other. Particularly the temperature and humidity. I wasn't doing one shot reads. I was subscribing to the bluetooth data. So I had to take the separate streams and combine them. It was an interesting problem with a not so interesting solution. I set up two events for each, temperature and humidity. I kept an object with null values for each. When each function fired off, it populated the field in the object and then checked if both properties weren't null. If not then it passed it over to the database function which added it to the database and told the frontend that new data was available.

### SSH Tunnel

To get the url to a clean looking url using my domain I found a way to do it with [serveo.net](http://serveo.net), ssh, and having my DNS routed by CloudFlare. It was a good two hours of fighting to figure out how serveo wanted me to establish my setting on the DNS. Figured out and it's setup as a service with autossh on the Raspberry Pi. So it will always be up now!

# Future Work

These are some of the things I would like to work on in the future:

For sure:

- Multiple boards connected to the raspberry pi for multiple rooms (Need to buy more sensors)
- New sensors, ex: Door sensor, motion sensor, dust sensor, relay to control a lamp (would require learning how to send data to the bluetooth device)
- Cleaner dashboard to accommodate the new sensors
- More modular firmware to quickly develop new sensors

Maybes:

- Add a flag to indicate if temperature changed trend to see when the AC turned on
- Perform analytics to see how often ac unit runs and for how long. Would require quick polling and should likely not be battery powered. Battery powered is still possible but heavy optimation would be required.

### Links to the code

[https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor](https://github.com/AubreyTharpe/nRF-BLE-DHT22-sensor)

[https://github.com/AubreyTharpe/DHT22-NRF-Driver](https://github.com/AubreyTharpe/DHT22-NRF-Driver)

[https://github.com/AubreyTharpe/BLE-Server-Frontend](https://github.com/AubreyTharpe/BLE-Server-Frontend)