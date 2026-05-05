let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let numRows = 6;
let numCols = 7;
let circleRadius = canvas.width/(numCols*2);
let turnRed = true;
let tokenGrid = Array.from({ length: numRows }, () => Array(numCols).fill("white"));
function start() {
    drawBoard();
    canvas.addEventListener("click",placeToken);
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
        drawCircle(x,y,circleRadius,tokenGrid[row][col])
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

function placeToken(event){
    let rect = canvas.getBoundingClientRect();
    let xClick = event.clientX - rect.left;
    let col = Math.floor(xClick / (canvas.width / numCols));
   for (let row = numRows - 1; row >= 0; row--) {
        if (tokenGrid[row][col] === "white") {
            tokenGrid[row][col] = turnRed ? "red" : "yellow";
            turnRed = !turnRed;
            break;
    }
}
drawBoard();
}
function checkWinner(grid,token){
    if(token[row][col] == "red"){
        
    }
}
start();