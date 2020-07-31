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



const main = () => {

}