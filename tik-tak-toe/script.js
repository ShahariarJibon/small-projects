let btns = document.querySelectorAll(".btn");
let c = 0;
let text = document.querySelector("h1");
let reset= document.querySelector(".button");
btns.forEach((btn) => {
  btn.onclick = () => {
    if (btn.textContent !== "") return;
    if (c % 2 == 0) {
      btn.textContent = "X";
    } else btn.textContent = "O";

    c++;
    checkWinner();
  };
});

function checkWinner() {
  let board = Array.from(btns).map((b) => b.textContent);

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of wins) {
    let [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      text.textContent = board[a] + " wins!";
      resetBoard();
      return;
    }
  }

  if (board.every((btn) => btn !== "")) {
    text.textContent = "its a draw";
    resetBoard();
  }
}

function resetBoard() {
  btns.forEach((btn) => {
    btn.textContent = "";
  });
  c = 0;
}

reset.onclick=()=>{
  text.textContent=""
  resetBoard();
}
