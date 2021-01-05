let n = +prompt("Nhập số ô");
var end = false;
var count = 0;
var turn = "X";
next.textContent = "Player: " + turn;

function createRow() {
    var tr = document.createElement("tr");

    for (var i = 0; i < n; i++) {
        var td = document.createElement("td");
        td.addEventListener("click", click, { once: true });
        tr.append(td);
    }

    return tr;
}

function createBoard() {
    var fr = new DocumentFragment();

    for (var i = 0; i < n; i++) {
        fr.append(createRow(n));
    }

    return fr;
}


var click = function (e) {
    if (!end) {
        e.currentTarget.textContent = turn;

        let rowIndex = this.parentElement.rowIndex,
            cellIndex = this.cellIndex;
        
        console.log(rowIndex,cellIndex);
      
        if (horizonal(turn,rowIndex,cellIndex) || vertical(turn,rowIndex,cellIndex) || diagonal(rowIndex, cellIndex, turn)) {
            end = !end;
            next.textContent = "Winner: " + turn;
            reset.hidden = false;
            return;
        }
        count++;
        turn = turn == "X" ? "O" : "X";
        next.textContent = "Player: " + turn;
    }

    if (count == n * n) {
        end = !end;
        next.textContent = "Draw";
        reset.hidden = false;
    }
};


function horizonal(turn, rowIndex, cellIndex) {
  let countHorizonal = 1;
  for (let i = cellIndex - 1; i >= 0; i--) {
    if (board.rows[rowIndex].cells[i].textContent == turn) {
      countHorizonal++;
      if (countHorizonal == 5) return true;
    } else break;
  }
  for (let i = cellIndex + 1; i < n -1 ; i++){
    if (board.rows[rowIndex].cells[i].textContent == turn) {
      countHorizonal++;
      if (countHorizonal == 5) return true;
    } else break;
  }
}

function vertical(turn, rowIndex, cellIndex) {
  let countVertical = 1;
  for (let i = rowIndex - 1; i >= 0; i--) {
    if (board.rows[i].cells[cellIndex].textContent == turn) {
      countVertical++;
      if (countVertical == 5) return true;
    } else break;
  }
  for (let i = rowIndex + 1; i < n - 1; i++){
    if (board.rows[i].cells[cellIndex].textContent == turn) {
      countVertical++;
      if (countVertical == 5) return true;
    } else break;
  }
}


function diagonal(rowIndex, cellIndex, turn) {
  let countDiagonal = 1;
  let upDiagonal = cellIndex;

  for (let i = rowIndex - 1; i >= 0; i--) {
    upDiagonal -= 1;
    if (board.rows[i].cells[upDiagonal].textContent == turn) {
      countDiagonal++;
      if (countDiagonal == 5) return true;
    } else break;
  }
  upDiagonal = cellIndex;
  for (let i = rowIndex + 1; i < n - 1; i++) {
    upDiagonal -= 1;
    if (board.rows[i].cells[upDiagonal].textContent == turn) {
      countDiagonal++;
      if (countDiagonal == 5) return true;
    } else break;
  }
  
  let downDiagonal = cellIndex;
  for (let i = rowIndex - 1; i >= 0; i--) {
    downDiagonal += 1;
    if (board.rows[i].cells[downDiagonal].textContent == turn) {
      countDiagonal++;
      if (countDiagonal == 5) return true;
    } else break;
  }
  downDiagonal = cellIndex;
  for (let i = rowIndex + 1; i < n - 1; i++) {
    downDiagonal += 1;
    if (board.rows[i].cells[downDiagonal].textContent == turn) {
      countDiagonal++;
      if (countDiagonal == 5) return true;
    } else break;
  }
  
  return false;
}

board.append(createBoard(n));

reset.addEventListener("click", function () {
    board.innerHTML = "";
    board.append(createBoard());
    end = !end;
    count = 0;
    turn = "X";
    next.textContent = "Player: " + turn;
    this.hidden = true;
});

