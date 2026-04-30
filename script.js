let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let numRows = 6;
let numCols = 7;
let circleRadius = canvas.width/(numCols*2);
let turnRed = true;

function start() {
    drawBoard();
    //canvas.addEventListener("click",placeToken);
}
function drawBoard(){
    context.fillStyle = "blue";
    context.fillRect(0,0, canvas.width, canvas.height)
    let cellWidth = canvas.width/ numCols;
    let cellHeight = canvas.height/ numRows;
for(let row=0; row <  numRows; row++){
    for(let col = 0; col < numCols; col++){
        let x = col * cellWidth + cellWidth / 2 
        let y = row * cellHeight + cellHeight / 2
        drawCircle(x,y,circleRadius,"white")
}
}
}
function drawCircle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
    context.closePath();
}
start();