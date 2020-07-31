const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
var fs = require("fs");


var testBlock = new Image();
testBlock.src = 'blocks/test.png'

class MathStuff {
    static parsePosition(blockPosition){
        return blockPosition * 40;
    }
}

function initMap(){
    var fs = require("fs");
    fs.readFile("./map.txt", function(data){
        var items = data.split("\r\n").map(function(el){ return el.split(" ");});
        console.log(items);
    });
}


document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Left") {
        directions[0] = true;
        console.log(directions[0]);
    }
    else if (event.key === "Right") {
        directions[1] = true;
        console.log(directions[1]);
    }
    else if (event.key === "Up") {
        directions[2] = true;
        console.log(directions[2]);
    }
    else if (event.key === "Down") {
        directions[3] = true;
        console.log(directions[3]);
    } else {
        directions.forEach(element => {
            element = false;
        });
    }
});

var directions = [false, false, false, false];

const main = () => {
    Draw.picture(500, 500, "testBlock");
}


main();