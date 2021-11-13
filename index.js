
// Numbers
const num1 = document.getElementById("1")
const num2 = document.getElementById("2")
const num3 = document.getElementById("3")
const num4 = document.getElementById("4")
const num5 = document.getElementById("5")
const num6 = document.getElementById("6")
const num7 = document.getElementById("7")
const num8 = document.getElementById("8")
const num9 = document.getElementById("9")
const num0 = document.getElementById("0")

// Operators
const equ = document.getElementById("=")
const plus = document.getElementById("+")
const minus = document.getElementById("-")
const div = document.getElementById("/")
const mul = document.getElementById("*")

const currentScreen = document.getElementById("currentsum")
const history = document.getElementById("history")

var equString = ""

num1.onclick = () => {
    equString += "1"
    currentScreen.innerHTML = equString
}
num2.onclick = () => {
    equString += "2"
    currentScreen.innerHTML = equString
}
num3.onclick = () => {
    equString += "3"
    currentScreen.innerHTML = equString
}
num4.onclick = () => {
    equString += "4"
    currentScreen.innerHTML = equString
}
num5.onclick = () => {
    equString += "5"
    currentScreen.innerHTML = equString
}
num6.onclick = () => {
    equString += "6"
    currentScreen.innerHTML = equString
}
num7.onclick = () => {
    equString += "7"
    currentScreen.innerHTML = equString
}
num8.onclick = () => {
    equString += "8"
    currentScreen.innerHTML = equString
}
num9.onclick = () => {
    equString += "9"
    currentScreen.innerHTML = equString
}
num0.onclick = () => {
    equString += "0"
    currentScreen.innerHTML = equString
}
plus.onclick = () => {
    equString += "+"
    currentScreen.innerHTML = equString
}
minus.onclick = () => {
    equString += "-"
    currentScreen.innerHTML = equString
}
div.onclick = () => {
    equString += "/"
    currentScreen.innerHTML = equString
}
mul.onclick = () => {
    equString += "*"
    currentScreen.innerHTML = equString
}

equ.onclick = () => {
    const answer = eval(equString)
    currentScreen.innerHTML = answer
    history.innerHTML = equString
    equString = ""
}