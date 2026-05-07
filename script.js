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
        if (tokenGrid[row][col] == "white") {
            tokenGrid[row][col] = turnRed ? "red" : "yellow";
            turnRed = !turnRed;
            drawBoard();
            checkWinner();
            break;
    }
}
}
function checkWinner(grid,token){
    for(let col = 0; col < numCols; col ++){
        for(let row = 0; row < numRows; row++){
            if(tokenGrid[row][col] == "white"){
                continue;
            }
            else if(tokenGrid[row][col] == "red" || tokenGrid[row][col] == "yellow"){
                if(col <= numCols - 4){
                let hor1 = tokenGrid[row][col]
                let hor2 = tokenGrid[row][col + 1]
                let hor3 = tokenGrid[row][col + 2]
                let hor4 = tokenGrid[row][col + 3]
                
                if(hor1 == "red" && hor2 == "red" && hor3 == "red" && hor4 == "red"){
                    console.log("Red Wins Horizontally")
                    displayWinner("red");
                }
                else if(hor1 == "yellow" && hor2 == "yellow" && hor3 == "yellow" && hor4 == "yellow"){
                    console.log("Yellow Wins Horizontally")
                    displayWinner("yellow");
                }
            }
                if ( row <= numRows - 4){
                    let vert1 = tokenGrid[row][col]
                    let vert2 = tokenGrid[row + 1][col]
                    let vert3 = tokenGrid[row + 2][col]
                    let vert4 = tokenGrid[row + 3][col]
                
                if(vert1 == "red" && vert2 == "red" && vert3 == "red" && vert4 == "red"){
                    console.log("Red Wins Vertically")
                    displayWinner("red");
                }
                else if(vert1 == "yellow" && vert2 == "yellow" && vert3 == "yellow" && vert4 == "yellow"){
                    console.log("Yellow Wins Vertically")
                    displayWinner("yellow");
                }
            }
                if(row <= numRows - 4 && col <= numCols - 4){
                    let diag1 = tokenGrid[row][col]
                    let diag2 = tokenGrid[row + 1][col + 1]
                    let diag3 = tokenGrid[row + 2][col + 2]
                    let diag4 = tokenGrid[row + 3][col + 3]
                    if(diag1 == "red" && diag2 == "red" && diag3 == "red" && diag4 == "red"){
                        console.log("Red Wins Diagonally Down Right")
                        displayWinner("red");
                    }
                    else if(diag1 == "yellow" && diag2 == "yellow" && diag3 == "yellow" && diag4 == "yellow"){
                        console.log("Yellow Wins Diagonally Down Right")
                        displayWinner("yellow");
                    }
                }
                if(row >= 3 && col <= numCols - 4){
                    let diag1 = tokenGrid[row][col]
                    let diag2 = tokenGrid[row - 1][col + 1]
                    let diag3 = tokenGrid[row - 2][col + 2]
                    let diag4 = tokenGrid[row - 3][col + 3]
                    if(diag1 == "red" && diag2 == "red" && diag3 == "red" && diag4 == "red"){
                        console.log("Red Wins Diagonally Up Right")
                        displayWinner("red");
                    }
                    else if(diag1 == "yellow" && diag2 == "yellow" && diag3 == "yellow" && diag4 == "yellow"){
                        console.log("Yellow Wins Diagonally Up Right")
                        displayWinner("yellow");
                    }
                }
            }
        }
    }
}
function displayWinner(winner){
    window.alert(winner.toUpperCase() + " has won the game")
    context.clearRect(0,0,canvas.width, canvas.height)
    context.fillStyle = "black"
    context.font = "40px Arial"
    context.textAlign = "center";
    context.fillText(winner.toUpperCase() + " WINS!", canvas.width / 2, canvas.height / 2);
    canvas.removeEventListener("click", placeToken)
    let btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    btn.id = "restartBtn";
    btn.style.display = "block";
    btn.style.margin = "20px auto";
    btn.onclick = restartGame;
    document.body.appendChild(btn);
}
function restartGame() {
    tokenGrid = Array.from({ length: numRows }, () => Array(numCols).fill("white"));
    
    turnRed = true;
    canvas.addEventListener("click", placeToken);
    
    let btn = document.getElementById("restartBtn");
    if (btn) btn.remove();
    
    drawBoard();
}

start();