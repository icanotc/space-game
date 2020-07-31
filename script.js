const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const testBlock = new Image();
testBlock.src = './blocks/test.png'


class utils {
    parsePosition(blockPosition){
        return blockPosition * 40;
    }
}

class draw {
    picture(pX, pY, picture){
        x = parsePosition(pX);
        y = parsePosition(pY);
        ctx.drawImage(picture, x, y);


    }
}



document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "ArrowLeft") {
        directions[0] = true;
        console.log(directions[0]);
    }
    else if (event.key === "ArrowRight") {
        directions[1] = true;
        console.log(directions[1]);
    }
    else if (event.key === "ArrowUp") {
        directions[2] = true;
        console.log(directions[2]);
    }
    else if (event.key === "ArrowDown") {
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
    draw.picture(0, 0, testBlock);

} 