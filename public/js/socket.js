var socketio = new  Websocket('socket.io://localhost:3400');

socketio.addEventListener('open', function() {
    alert('Connected to Websocket')
})

socketio.addEventListener('close', function(){
    alert('Disconnected from Websocket')
})

socketio.addEventListener('message', function(msg) {
    alert('Server says: ' + msg.data);
})

    
document.querySelector('button').addEventListener('click', function(){
    socketio.send(prompt('What do you have to say for yourself?'))
})  

