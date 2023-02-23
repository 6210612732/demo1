import React, { useState, Fragment } from "react";
var mqtt = require('mqtt')

/*
var options = {
    //host: 'b0e4bc29b2b04d229cbc0d068e519c0d.s2.eu.hivemq.cloud',
    //port: 8883,
    protocol: 'wss',
    username: 'Abcde55',
    password: 'Abcdef55'
}

// initialize the MQTT client
var client = mqtt.connect("wss://b0e4bc29b2b04d229cbc0d068e519c0d.s2.eu.hivemq.cloud:8884",options);
console.log('sdsd');
// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});  */
const url = 'wss://b0e4bc29b2b04d229cbc0d068e519c0d.s2.eu.hivemq.cloud:8884/mqtt'
const options = {
    // Clean session
    clean: true,
    connectTimeout: 4000,
    // Authentication
    clientId: 'sadad',
    username: 'Abcde55',
    password: 'Abcdef55',
  }
const client  = mqtt.connect(url, options)

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello2');


function Mqx() {
 
  
 
  return (
    <div >
        <h1>Hello MQTT in React</h1>
        <p>The message payload is: </p>
    </div>
  );
}
export default Mqx;