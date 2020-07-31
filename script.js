const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const testBlock = new Image();
testBlock.src = './blocks/test.png'


class utils {
    parsePosition()
}

class draw {
    picture(pX, pY, picture){
        
    }
}

class blocks {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = color;
        this.x = x;
    }

    intersect(block) {
        return this.x < block.x + block.w
        && block.x < this.x + this.w
        && this.y < block.y + block.h
        && block.y < this.y + this.h;
    }
    render(draw){
        draw.rectangle(this.x, this.y, this.w, this.h, this.picture)
    }
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "ArrowLeft") {
        directions[0] = true;
        console.log(directions[0]);
    }
    else if (event.key === "ArrowRight") {
        directions[1] = true;
        console.log(directions[]);
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

}