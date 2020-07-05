var socket = require('socket.io')
var express = require('express')
var app = express()
app.listen(3000, function(){

})

app.use(express.static('public'));

var io= new socket.io.Server({port: 3400})

io.on('connection', client =>{
    console.log('Hi there!');

    // client.on('event', data => {  
    //     console.log('')

    //   })
        client.on('disconnect', () => {

            console.log('Goodbye!');
        })

        client.on('message', function(msg){
            console.log('Client says: ' + msg );
            client.send(msg);
        })

    });
