let buttons = document.querySelectorAll(".m");
let computerElements = document.querySelectorAll(".c");
let result = document.querySelector(".resu");
let reset = document.querySelector(".res");
let sc= document.querySelector(".sc");
let sm=document.querySelector(".sm");
let cc=0, cm=0;

let choises = ["🪨", "🗞️", "✂️"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let mine = button.innerText;

    buttons.forEach((btn) => {
      if (btn != button) {
        btn.innerText = " ";
      }
    });

    let computerChoise = choises[Math.floor(Math.random() * 3)];

    computerElements.forEach((element) => {
      element.innerText = " ";
    });

    if (computerChoise === "🪨") {
      computerElements[0].innerText = "🪨";
    } else if (computerChoise === "🗞️") {
      computerElements[1].innerText = "🗞️";
    } else {
      computerElements[2].innerText = "✂️";
    }

    if (mine === computerChoise) {
      result.innerText = "DRAW";
    } else if (
      (mine === "🪨" && computerChoise === "✂️") ||
      (mine === "✂️" && computerChoise === "🗞️") ||
      (mine === "🗞️" && computerChoise === "🪨")
    ) {
      result.innerText = "You Won";
      cm++;
      sm.innerText=cm;
    } else {
      result.innerText = "Computer Won";
      cc++;
      sc.innerText=cc;
    }
  });
});

reset.addEventListener("click",()=>{

    buttons[0].innerText = "🪨";
    buttons[1].innerText = "🗞️";
    buttons[2].innerText = "✂️";


    computerElements.forEach((element)=>{

        element.innerText = "#";

    });

    result.innerText = "wins";

})
