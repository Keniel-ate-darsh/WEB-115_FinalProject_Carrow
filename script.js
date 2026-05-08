class Draw {
    constructor(context) {
        this.context = context;
    }
    // Move this here so Board can use it
    drawCircle(x, y, radius, color) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.closePath();
    }
}

class Board extends Draw {
    constructor(context, rows, cols) {
        super(context);
        this.rows = rows;
        this.cols = cols;
        this.grid = Array.from({ length: rows }, () => Array(cols).fill("white"));
    }
    reset() {
        this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill("white"));
    }
}

class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.rows = 6;
        this.cols = 7;
        this.turnRed = true;
        this.board = new Board(this.context, this.rows, this.cols);
        this.init();
    }

    init() {
        this.drawBoard();
        this.handleClick = this.placeToken.bind(this);
        this.canvas.addEventListener("click", this.handleClick);
    }

    drawBoard() {
        this.context.fillStyle = "blue";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // Fixed the 'let =' syntax errors here
        let cellWidth = this.canvas.width / this.cols;
        let cellHeight = this.canvas.height / this.rows;
        let circleRadius = this.canvas.width / (this.cols * 2.5);

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let x = col * cellWidth + cellWidth / 2;
                let y = row * cellHeight + cellHeight / 2;
                this.board.drawCircle(x, y, circleRadius, this.board.grid[row][col]);
            }
        }
    }

    placeToken(event) {
        let rect = this.canvas.getBoundingClientRect();
        let xClick = event.clientX - rect.left;
        let col = Math.floor(xClick / (this.canvas.width / this.cols));

        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.board.grid[row][col] == "white") {
                this.board.grid[row][col] = this.turnRed ? "red" : "yellow";
                this.turnRed = !this.turnRed;
                this.drawBoard();   // Added this.
                this.checkWinner(); // Added this.
                break;
            }
        }
    }

    checkWinner() {
        let grid = this.board.grid;
        for (let col = 0; col < this.cols; col++) {
            for (let row = 0; row < this.rows; row++) {
                let color = grid[row][col];
                if (color === "white") continue;

                // Horizontal
                if (col <= this.cols - 4 && color === grid[row][col+1] && color === grid[row][col+2] && color === grid[row][col+3]) {
                    this.displayWinner(color); return;
                }
                // Vertical
                if (row <= this.rows - 4 && color === grid[row+1][col] && color === grid[row+2][col] && color === grid[row+3][col]) {
                    this.displayWinner(color); return;
                }
                // Diagonals
                if (row <= this.rows - 4 && col <= this.cols - 4 && color === grid[row+1][col+1] && color === grid[row+2][col+2] && color === grid[row+3][col+3]) {
                    this.displayWinner(color); return;
                }
                if (row >= 3 && col <= this.cols - 4 && color === grid[row-1][col+1] && color === grid[row-2][col+2] && color === grid[row-3][col+3]) {
                    this.displayWinner(color); return;
                }
            }
        }
    }

    displayWinner(winner) {
        window.alert(winner.toUpperCase() + " has won the game");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "black";
        this.context.font = "40px Arial";
        this.context.textAlign = "center";
        this.context.fillText(winner.toUpperCase() + " WINS!", this.canvas.width / 2, this.canvas.height / 2);
        
        this.canvas.removeEventListener("click", this.handleClick);

        let btn = document.createElement("button");
        btn.innerHTML = "Play Again";
        btn.id = "restartBtn";
        btn.style.display = "block";
        btn.style.margin = "20px auto";
        btn.onclick = () => this.restartGame();
        document.body.appendChild(btn);
    }

    restartGame() {
        this.board.reset();
        this.turnRed = true;
        this.canvas.addEventListener("click", this.handleClick);
        let btn = document.getElementById("restartBtn");
        if (btn) btn.remove();
        this.drawBoard();
    }
}

new Game("canvas");
