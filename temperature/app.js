let text = document.getElementById("text");
let L = document.getElementById("L");
let U = document.getElementById("U");
let N = document.getElementById("N");
let S = document.getElementById("S");
let submit = document.getElementById("submit");

const slider = document.getElementById("slider");
const output = document.getElementById("value");

output.textContent = slider.value;

slider.oninput = function () {
  output.textContent = this.value;
};

function generate(
  passlength,
  includeLower,
  includeUpper,
  includeNumber,
  includeSymbol,
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "!@#$%^&*()-_=+<>?|/{}[]";

  let allowed = "";
  let password = "";

  allowed += includeLower ? lowercase : "";
  allowed += includeUpper ? uppercase : "";
  allowed += includeNumber ? number : "";
  allowed += includeSymbol ? symbol : "";

  if (passlength <= 0) {
    return `( password length must be atleast 1 )`;
  }
  if (allowed.length === 0) {
    return `( Atleast one set of characters needs to be selected)`;
  }

  for (let i = 0; i < passlength; i++) {
    const randomIndex = Math.floor(Math.random() * allowed.length);
    password += allowed[randomIndex];
  }

  return password;
}

submit.onclick = function () {
  const passlength = Number(slider.value);
  const includeLower = L.checked;
  const includeUpper = U.checked;
  const includeNumber = N.checked;
  const includeSymbol = S.checked;

  const password = generate(
    passlength,
    includeLower,
    includeUpper,
    includeNumber,
    includeSymbol,
  );

  console.log(`generated password : ${password}`);
  text.textContent = password;
};
