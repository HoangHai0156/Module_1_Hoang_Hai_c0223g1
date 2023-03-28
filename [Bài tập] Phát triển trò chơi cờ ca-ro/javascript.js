let collumnsSize = 20;
let rowsSize = 20;
let cellSize = 40;
class cellMold {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = "";
        this.getHtml = function () {
            var top = y * cellSize;
            var left = x * cellSize;
            var cellElement = `<div id="cell ${this.x}-${this.y}" onclick="play(${this.x},${this.y})" class="cell" 
            style="position: absolute; top: ${top}px; left: ${left}px; 
            width: ${cellSize}px; height: ${cellSize}px; line-height: ${cellSize}px;">
            </div>`
            return cellElement;
        }
        this.mark = function () {
            var cellDiv = document.getElementById(`cell ${this.x}-${this.y}`);
            switch (this.value) {
                case "x":
                    cellDiv.innerHTML = "X";
                    break;
                case "o":
                    cellDiv.innerHTML = "O";
                    break;
                default:
                    cellDiv.innerHTML = "";
                    break;
            }
        }
    }
}
class gameBoardMold {
    constructor(row, collumn, elementId) {
        this.row = row;
        this.collumn = collumn;
        this.elementId = elementId;
        this.Cells = new Array(this.row);
        this.isOver = false;
        this.turn = 1;
        this.draw = function () {
            var boardDiv = document.getElementById(this.elementId);
            boardDiv.innerHTML = "";
            for (var i = 0; i < this.row; i++) {
                this.Cells[i] = new Array(this.collumn);
                for (var j = 0; j < this.collumn; j++) {
                    var cell = new cellMold(i, j);
                    this.Cells[i][j] = cell;
                    boardDiv.innerHTML += cell.getHtml();
                }
            }
        }
        this.play = function (x, y) {
            var cell = this.Cells[x][y];
            if (this.isOver) {
                return;
            }
            if (cell.value == "") {
                if (this.turn % 2 != 0) {
                    cell.value = "x";
                    this.turn++;
                } else {
                    cell.value = "o";
                    this.turn++;
                }
                cell.mark();
                this.check()
            } else {
                alert("Cell is already marked")
            }
        }
        this.check = function () {
            for (var i = 0; i < this.row; i++) {
                for (var j = 0; j < this.collumn; j++) {
                    if ((this.Cells[i][j].value == "x" && this.Cells[i][j + 1].value == "x" && this.Cells[i][j + 2].value == "x" && this.Cells[i][j + 3].value == "x" && this.Cells[i][j + 4].value == "x")
                        || (this.Cells[i][j].value == "x" && this.Cells[i + 1][j].value == "x" && this.Cells[i + 2][j].value == "x" && this.Cells[i + 3][j].value == "x" && this.Cells[i + 4][j].value == "x")
                        || (this.Cells[i][j].value == "x" && this.Cells[i + 1][j + 1].value == "x" && this.Cells[i + 2][j + 2].value == "x" && this.Cells[i + 3][j + 3].value == "x" && this.Cells[i + 4][j + 4].value == "x")
                        || (this.Cells[i][j].value == "x" && this.Cells[i - 1][j + 1].value == "x" && this.Cells[i - 2][j + 2].value == "x" && this.Cells[i - 3][j + 3].value == "x" && this.Cells[i - 4][j + 4].value == "x")
                    ) {
                        this.isOver = true;
                        alert("X wins");
                    } else if (
                        (this.Cells[i][j].value == "o" && this.Cells[i][j + 1].value == "o" && this.Cells[i][j + 2].value == "o" && this.Cells[i][j + 3].value == "o" && this.Cells[i][j + 4].value == "o")
                        || (this.Cells[i][j].value == "o" && this.Cells[i + 1][j].value == "o" && this.Cells[i + 2][j].value == "o" && this.Cells[i + 3][j].value == "o" && this.Cells[i + 4][j].value == "o")
                        || (this.Cells[i][j].value == "o" && this.Cells[i + 1][j + 1].value == "o" && this.Cells[i + 2][j + 2].value == "o" && this.Cells[i + 3][j + 3].value == "o" && this.Cells[i + 4][j + 4].value == "o")
                        || (this.Cells[i][j].value == "o" && this.Cells[i - 1][j + 1].value == "o" && this.Cells[i - 2][j + 2].value == "o" && this.Cells[i - 3][j + 3].value == "o" && this.Cells[i - 4][j + 4].value == "o")
                    ) {
                        this.isOver = true;
                        alert("O wins");
                    }
                }
            }

        }
    }
}
var gameBoard;
function play(x, y) {
    gameBoard.play(x, y)
}
function start() {
    gameBoard = new gameBoardMold(rowsSize, collumnsSize, "gameBoard");
    gameBoard.draw();
}