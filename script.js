const boardSize = 10; // Size of the game board
let currentPlayer = 1; // Player 1 starts

function createBoard() {
  const gameBoard = document.querySelector('.game-board');
  gameBoard.innerHTML = '';

  let cellCount = 1;
  for (let i = boardSize; i >= 1; i--) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 1; j <= boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = cellCount;
      row.appendChild(cell);
      cellCount++;
    }

    if (i % 2 === 0) {
      gameBoard.appendChild(row);
    } else {
      const reversedRow = row.cloneNode(true);
      gameBoard.appendChild(reversedRow);
    }
  }
}

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  movePlayer(diceValue);
}

function movePlayer(steps) {
  const cells = document.querySelectorAll('.cell');
  const currentPlayerCell = document.querySelector(`.cell:nth-child(${currentPlayer})`);
  
  currentPlayerCell.classList.remove(`player-${currentPlayer}`);
  
  let newPosition = Number(currentPlayerCell.textContent) + steps;
  newPosition = Math.min(newPosition, boardSize * boardSize);
  
  const newCell = cells[newPosition - 1];
  newCell.classList.add(`player-${currentPlayer}`);
  
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

window.onload = function() {
  createBoard();
};
