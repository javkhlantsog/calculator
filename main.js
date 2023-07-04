let a = [];
let y = null;
let b = [];
let c = 0;

let k = false
if(y === "+" || y === "-" || y === "/"){
  let k = true
}

let x1 = () => {
  k === true ? (
    a.push(document.getElementById("btn1").value)
  ) : (
    b.push(document.getElementById("btn1").value)
  )
  ;
  console.log(a, b);
};
let x4 = () => {
  a.push(document.getElementById("btn4").value);
  console.log(a);
};

let x7 = () => {
  a.push(document.getElementById("btn7").value);
  console.log(a);
};
let x2 = () => {
  a.push(document.getElementById("btn2").value);
  console.log(a);
};
let x5 = () => {
  a.push(document.getElementById("btn5").value);
  console.log(a);
};

let x8 = () => {
  a.push(document.getElementById("btn8").value);
  console.log(a);
};
let x3 = () => {
  a.push(document.getElementById("btn3").value);
  console.log(a);
};
let x6 = () => {
  a.push(document.getElementById("btn6").value);
  console.log(a);
};

let x9 = () => {
  a.push(document.getElementById("btn9").value);
  console.log(a);
};

