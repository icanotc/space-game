const io = require('socket.io')(3000);

io.on('connection', socket => {
    console.log('player joined');
    socket.on('name', message => {
        console.log(name);
    })
})