var use =
  "abcdefghijklmnopqrstuvwxyz\
1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!¬`\
£$\"%^&*()_+-}{[]:;'@#~|<>,.?/+-*";
let gen, pass, result;
pass = document.getElementById("pass");
gen = document.getElementById("gen");
result = document.getElementById("result");

pass.addEventListener("input", input);

function input(e) {
  result.innerHTML = e.target.value;
}

gen.addEventListener("click", (e) => {
  e.preventDefault();
  let p = " ";
  for (let i = 0; i <= 10; i++) {
    var ran = Math.random() * use.length;
    p += use.substring(ran, ran + 1);
  }
  pass.value = p;
  result.innerHTML = pass.value;
});
