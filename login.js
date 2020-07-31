const io = require('socket.io')(3000);
const input = document.querySelector("input");
const message = document.getElementById("prompt");

input.addEventListener(input, message);

io.on("connect", socket => {
    console.log(message); 
})