// Numbers
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");

// Operators
const equ = document.getElementById("=");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const div = document.getElementById("/");
const mul = document.getElementById("*");

const currentScreen = document.getElementById("currentsum");
const history = document.getElementById("history");

var equString = "";
var justEqed = false;
function addNum(num) {
    if(justEqed){
        equString=""
        justEqed = false
    }
    equString += num;
    currentScreen.innerHTML = equString;
}
function addOperand(op){
    if(justEqed){
        justEqed = false
    }
    console.log(equString, op);
    equString+=op
    currentScreen.innerHTML = equString;
}

num1.onclick = () => {
  addNum(1);
};
num2.onclick = () => {
  addNum(2);
};
num3.onclick = () => {
  addNum(3);
};
num4.onclick = () => {
  addNum(4);
};
num5.onclick = () => {
  addNum(5);
};
num6.onclick = () => {
  addNum(6);
};
num7.onclick = () => {
  addNum(7);
};
num8.onclick = () => {
  addNum(8);
};
num9.onclick = () => {
  addNum(9);
};
num0.onclick = () => {
  addNum(0);
};
plus.onclick = () => {
  addOperand("+")
};
minus.onclick = () => {
    addOperand("-")
};
div.onclick = () => {
    addOperand("/")
};
mul.onclick = () => {
    addOperand("*")

};

equ.onclick = () => {
  const answer = eval(equString);
  justEqed = true
  currentScreen.innerHTML = answer;

  history.innerHTML = equString;
  equString = answer.toString();
};
