let snake;
let food;
let res = 10;
let w;
let h;
var font;
let gScr = 0;

function preload() {
    font = loadFont('Minecraft.ttf');
}

function setup() {
    createCanvas(400, 400);
    frameRate(10);
    w = floor(width / res);
    h = floor(height / res);
    snake = new Snake();
    foodLoc();
}

function init() {
    background(0);
    scale(res);

    //food part
    if (snake.eat(food)) {
        foodLoc();
        gScr++;
    }
    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
    //
}


function foodLoc() {
    let x = floor(random(w - 1));
    let y = floor(random(h - 1));
    food = createVector(x, y);
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    }
}

function drawGameScore() {

    textFont(font);
    textAlign(CENTER, CENTER);
    textSize(1.5);
    text('Score: ' + gScr, 35, 1);

}


function draw() {
    if (snake.isDead()) {
        scale(res);
        snake.setDir(0, 0);
        background(0);
        fill(255, 0, 0);
        textFont(font);
        textAlign(CENTER, CENTER);
        textSize(10);
        text('dead', 20, 20);
        textSize(1.5);
        text('press space to try again!', 20, 25);
        textSize(5);
        text('score: ' + gScr, 21, 13);

        if (key == ' ') {
            snake = new Snake;
            gScr = 0;
            init();
        }
    } else {
        init();
        drawGameScore();
    }
    //In case you need to cheat for some tests
    // if (key == ' ') {
    //    snake.grow();
    //    gScr++;
    // }
    //
    snake.update();
    snake.show();
    //drawGameScore();
}
