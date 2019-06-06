var mqtt = require('mqtt');

//var client  = mqtt.connect('tcp://test.mosquitto.org');
var client = mqtt.connect('tcp://broker.hivemq.com');

client.on('connect', function () {                              //MQTT
    client.subscribe('kitt/+/telemetry', function (err) {        //subscribe to topic kitt/_targa_/telemetria
        if (err) {
            console.log(err);
        }
        if (!err) {
            console.log('sottoscritto al topic con successo');
        }
    })
})

client.on('message', function (topic, message) {                //MQTT
    //message is Buffer

    //console.log('messaggio ricevuto stringato: ' + message.toString());

    upload(topic, message);

    //console.log(topic.toString());

})

function upload(topic, message) {

    var msg = JSON.parse(message);

    var arrTop = topic.split("/");
    let targa = arrTop[1];

    console.log('Targa: ' + targa);
    console.log("temperature "+msg.temperature);
    console.log("speed "+msg.speed);
    console.log("latitude "+msg.latitude);
    console.log("longitude "+msg.longitude);
    console.log("direction "+msg.direction);
    console.log("#####################################");
}