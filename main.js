const buttons = document.querySelectorAll(".calcButton")
const display = document.querySelector(".calcDisplay")
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal")

let number1 = ""
let operacion = ""
let number2 = ""
let result = ""

//const number = document.querySelector(".value")
// console.log(display)

//aca los numeros
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", event => {
    //console.log(event.target.value)
    //display.value += event.target.value

    //number1 = display.value
    if (operacion === "") {
      number1 += event.target.value
      display.value = number1
    } else {
      number2 += event.target.value
      display.value = number2
    }
    //console.log("Preparse: " + number1 + ", " + typeof number1)
    //number1 = parseFloat(number1)
    // console.log("Postparse: " + number1 + ", " + typeof number1)
    // console.log("Postparse: " + parsed + ", " + typeof parsed)
    //console.log(event.type)
  })
}

//operaciones
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", event => {
    //display.operator = event.target

    operacion = event.target.value
    console.log(event.target.value)
  })
}

equal.addEventListener("click", event => {
  console.log(number1, operacion, number2)

  if (operacion === "+") {
    let result = parseFloat(number1) + parseFloat(number2)
    display.value = result
  } else if (operacion === "-") {
    let result = parseFloat(number1) - parseFloat(number2)
    display.value = result
  } else if (operacion === "*") {
    let result = parseFloat(number1) * parseFloat(number2)
    display.value = result
  } else if (operacion === "/") {
    let result = parseFloat(number1) / parseFloat(number2)
    display.value = result
  }
})
// 1.Need to create a link so everytime that i click on a button a get the number that I'm clicking.

// 2. Create a fucntion for every operator

//
// function sum() {}
// function minus() {}
// function multiplication() {}
// function division() {}
// function result() {}
// function c() {}

//
