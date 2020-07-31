var canvas = document.getElementById("space");

const ground = Object.freeze({
    name: 'ground'
})


class draw {

    rectangle(x, y, w, h, color){
        this.fillstyle = color;
        this.fillrect(x, y, w, h)
    }

}

class Rectangle {

    constructor(x, y, w, h, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.x = x;
    }

    intersect(block) {

    }
    render(draw){
        
    }
}

class Blocks extends Rectangle {
    


}



const main = () => {

}