const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


var testBlock = new Image();
testBlock.src = 'blocks/test.png'

var playerImage = new Image();
playerImage.src = 'player/player.png'

var playerWalkingImage = new Image();
playerWalkingImage.src = 'player/player_walking.png'

class MathStuff {
    static parsePosition(blockPosition){
        return blockPosition * 40;
    }
}

var player = {
    x: 200,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump : false,
    height: 80,
    width: 40
};

var keys = {
    right: false,
    left: false,
    up: false,
};

// function initMap(){
//     var map = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
//         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ]
//     ]

//     window.onload = function() {
//         for(var bruh = 0; bruh < 40; bruh++){
//             for(var lOop = 0; lOop < 22; lOop++){
//                 var numberInArray = map[lOop][bruh]
//                 console.log(numberInArray);
//                 var blocks = testBlock;
//                 switch (numberInArray){
//                     case 1:
//                         blocks = testBlock;
//                 }
//                 if(numberInArray != 0){
//                     ctx.drawImage(blocks, bruh*40, lOop*40);
//                 }
                

//             }
//         }
//     }
// }


document.addEventListener('keydown', (event) => {
    // 37 is the code for the left arrow key
    if(event.keyCode == 37) {
        keys.left = true;
    }
    // 38 is the code for the up arrow key
    if(event.keyCode == 38) {
        if(player.jump == true) {
            player.y_v = 10;
        }
    }
    // 39 is the code for the right arrow key
    if(event.keyCode == 39) {
        keys.right = true;
    }
});
document.addEventListener('keyup', (event) => {
    console.log(event.keyCode);
    if(event.keyCode == 37) {
        keys.left = false;
    }
    if(event.keyCode == 38) {
        if(player.y_v < -2) {
        player.y_v = -3;
        
        }
    }
    if(event.keyCode == 39) {
        keys.right = false;
    }
});

var gravity = 0.5;
var friction = 0.5;

function loop(){
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = "#000000"; 
    //initMap()
    if(player.jump == false) {
        player.x_v *= friction;
    } else {
        player.y_v += gravity;
    }
    if(keys.up) {
        player.jump = true; 
    }
    if(keys.left) {
        player.x_v = -2.5;
    }
    if(keys.right) {
        player.x_v = 2.5;
    }
    // ctx.fillStyle("#FFFFFF");
    player.y += player.y_v;
    player.x += player.x_v;
    //console.log(player.y_v)
    //console.log(player.y)
    if(player.x_v != 0 || player.y_v != 0 ) {
        ctx.drawImage(playerWalkingImage, player.x, player.y);
    } else {
        ctx.drawImage(playerImage, player.x, player.y);
    }
    
    for (var loop = 0; loop < 10; loop++){
        compareToPlats(loop);
    }
}


var platforms = []
var playerState = -1;

function compareToPlats(platNumbers){
    if(platforms[platNumbers].x < player.x + 40 && player.x < platforms[platNumbers].x &&
        platforms[platNumbers].y < player.y + 80 && player.y < platforms[platNumbers].y + 40){
        playerState = platNumbers;
        console.log(platforms[platNumbers].x);    
    }
    if (playerState > -1){
        player.jump = false;
        player.y = platforms[playerState].y - 80;
    }
}

function createPlats(num){
    for(i = 0; i < num; i++) {
        platforms.push(
            {
            x: Math.floor(Math.random() * (1500 )),
            y: Math.floor(Math.random() * (850 )),
            }
        );
        //console.log(platforms);
    }

    platforms.push(
            {
            x: 200,
            y: 200+player.height,
            }
    )

    for(i = 0; i < num+1; i++) {
        ctx.fillRect(platforms[i].x, platforms[i].y, 160, 40);
        // console.log(platforms[i].x + 'fuck')
    }
}
//console.log(platforms);
const main = () => {
    createPlats(10);
    //initMap();
    setInterval(loop,20);
}


main();

