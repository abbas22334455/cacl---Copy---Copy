let display = document.querySelector('#display');
let btnClear = document.querySelector('#btn-clear')
let btnNumber = document.querySelectorAll('.btn-number');
let btnDiv = document.querySelector('#btn-div');
let btnMinus = document.querySelector('#btn-minus');
let btnPlus = document.querySelector('#btn-plus');
let btnPoint = document.querySelector('#btn-point');
let btnEquls = document.querySelector('#btn-equls');
let btnMul = document.querySelector('#btn-mul');
let btnSin = document.queryCommandValue('#btn-sin')

let setPoint = false;
let number1, number2, result;
let op = "";


document.querySelector('body').addEventListener('keydown' , (e) =>{
  display.value += e.key ;

});

btnClear.addEventListener('click' , (e) => {
    display.value = "";
    setPoint = false;
    number1=0;
    number2=0;
});

btnNumber.forEach((item) => {
    item.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
});

//btnSin.addEventListener('click' ,(e)=>{
    //display.value=Math.sin();
//}) 


btnPoint.addEventListener('click', (e) => {
    if (setPoint == false) {
        display.value += ".";
        setPoint = true;
    }
});


btnPlus.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "+";
});


btnMinus.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "-";
});


btnMul.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "*";
});


btnDiv.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "/";
});


btnEquls.addEventListener('click', (e) => {
    number2 = Number(display.value);

    switch (op) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    display.value=result;

})