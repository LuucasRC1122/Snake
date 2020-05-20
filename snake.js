class Snake {
    constructor() {
        this.len = 0;
        this.sBody = [];
        this.sBody[0] = createVector(floor(w / 2), floor(h / 2));
        this.xDir = 0;
        this.yDir = 0;

    }
    setDir(x, y) {
        this.xDir = x;
        this.yDir = y;
    }
    grow() {
        let head = this.sBody[this.sBody.length - 1].copy();
        this.len++;
        this.sBody.push(head);
    }
    eat(fPos) {
        let x = this.sBody[this.sBody.length - 1].x;
        let y = this.sBody[this.sBody.length - 1].y;

        if (x == fPos.x && y == fPos.y) {
            //console.log("Tasty!");
            this.grow();
            return true;
        }
        return false;
    }
    isDead() {
        let x = this.sBody[this.sBody.length - 1].x;
        let y = this.sBody[this.sBody.length - 1].y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true;
        }
        for (let i = 0; i < this.sBody.length - 1; i++) {
            let sBlock = this.sBody[i];
            if (sBlock.x == x && sBlock.y == y) {
                return true;
            }
        }
        return false;
    }

    update() {
        let head = this.sBody[this.sBody.length - 1].copy();
        this.sBody.shift();
        head.x += this.xDir;
        head.y += this.yDir;
        this.sBody.push(head);


        //this.sBody[0].x += this.xDir;
        //this.sBody[0].y += this.yDir;
    }
    show() {
        for (let i = 0; i < this.sBody.length; i++) {
            noStroke();
            fill(0, 255, 0);
            rect(this.sBody[i].x, this.sBody[i].y, 1, 1);
        }

    }
}
