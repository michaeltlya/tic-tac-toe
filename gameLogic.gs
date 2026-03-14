// логика игры — только данные и проверки

class TicTacToe {
  constructor() {
    this.board = Array(9).fill(""); // 3x3 поля: 0..8
    this.currentPlayer = "X";      // текущий игрок
    this.isGameOver = false;       // закончена ли игра
  }

  makeMove(index) {
    // если клетка занята или игра уже окончена
    if (this.board[index] || this.isGameOver) return false;

    this.board[index] = this.currentPlayer;

    const winner = this.getWinner();
    if (winner) {
      this.isGameOver = true;
    } else if (!this.board.includes("")) {
      this.isGameOver = true; // ничья
    } else {
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }

    return true;
  }

  getWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }

    return null;
  }

  reset() {
    this.board = Array(9).fill("");
    this.currentPlayer = "X";
    this.isGameOver = false;
  }
}

// сделать класс глобальным, чтобы ui.js мог его использовать
window.TicTacToe = TicTacToe;
