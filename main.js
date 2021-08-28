let display = document.querySelector('#output-disp');
let bgDisplay = document.querySelector('.display');
let sign = document.querySelector('#output-sign');
let state = document.querySelector('#state');
let backspace = document.querySelector('#backspace');
let onOff = document.querySelector('#on-off');
let equal = document.querySelector('#equal');
let mp = document.querySelector('#mp');
let point = document.querySelector('#point');
let mul = document.querySelector('#mul');
let div = document.querySelector('#div');
let minut = document.querySelector('#minut');
let plus = document.querySelector('#plus');
let clear = document.querySelector('#clear');
const numbers = document.querySelectorAll('.btn');
let signs = document.querySelectorAll('.sign');



let on, checkOper, checkEqual = false;
let max = true;
let num1, num2, result;



onOff.addEventListener('click', () => {
  on = !on
  if (on) {
    display.textContent = '0'
    state.style.background = '#01ff00'
    bgDisplay.style.background = '#E5EBE3';
    max = true;
  } else {
    display.textContent = '';
    sign.textContent = '';
    state.style.background = '#505050'
    bgDisplay.style.background = '#879284'
    on = false;
  }
})



signs.forEach((s) => {
  s.addEventListener('click', () => {
    let d = Number(display.textContent);
    if(on && !checkOper && !isNaN(d) && sign.textContent !==''){
      checkResult();
      display.textContent = result;
      checkSign(s)
    }
    else if (on && !isNaN(d)) {
     checkSign(s);
    }
  })
})

function checkSign(s){
  num1 = Number(display.textContent);
  max = true;
  switch (s.id) {
    case 'plus':
      sign.textContent = '+'
      break;
    case 'minut':
      sign.textContent = '-'
      break;
    case 'mul':
      sign.textContent = '*'
      break;
    case 'div':
      sign.textContent = '/'
      break;
  }
  checkOper = true;
}

function checkResult(){
  let r;
  num2 = Number(display.textContent);
  switch (sign.textContent) {
    case '*':
      r = num1 * num2;
      break;
    case '/':
      r = num1 / num2;
      break;
    case '-':
      r = num1 - num2;
      break;
    case '+':
      r = (num1*10 + num2*10)/10;
      break;
  }
  if(r.toString().length >= 10){
      result = r.toExponential(8);
    return result;
  }else{
    result = r;
    return result;
  }
}

equal.addEventListener('click', ()=>{
  if(on && sign.textContent !=='' && !checkOper){
    checkResult();
    sign.textContent = '';
    display.textContent = result;
    checkEqual = true;
  }
})


numbers.forEach(addNumbers);

function addNumbers(num) {
  num.addEventListener('click', () => {
    if (on && max) {
      if (checkEqual || checkOper) {
        checkOper = false;
        checkEqual = false;
        display.textContent = '';
        display.textContent += num.textContent;
      } else if (display.textContent == '0') {
        display.textContent = '';
        display.textContent += num.textContent;
      } else if (display.textContent == '-0') {
        display.textContent = '-';
        display.textContent += num.textContent;
      } else if (display.textContent.length == 13) {
        max = false;
      }
      else {
        display.textContent += num.textContent;
      }
    }
  })
};



backspace.addEventListener('click', () => {

  let len = display.textContent.length;
  if (num1 !== NaN && sign.textContent !== '') {
    display.textContent = display.textContent.substr(0, len - 1);
    max = true;
  } else {
    if (len > 1) {
      display.textContent = display.textContent.substr(0, len - 1);
      max = true;
    } else if (len == 1) {
      display.textContent = '0';
    }
  }
})


clear.addEventListener('click', () => {
  if (on) {
    display.textContent = "0";
    sign.textContent = '';
    max = true;
  }
})


mp.addEventListener('click', () => {
  if (checkOper) {
    checkOper = false;
    display.textContent = '-';
  }else if (display.textContent == '0') {
    display.textContent = '-';
  } else if (display.textContent == '-') {
    display.textContent = '0'
  } else if (display.textContent !== '') {
    display.textContent = Number(display.textContent) * -1;
  }
})

point.addEventListener('click', () => {
  if (display.textContent.includes('.') && !checkOper) {

  }else if (checkOper) {
    checkOper = false;
    display.textContent = '0.';
  } else if (display.textContent == '-') {
    display.textContent = '-0.'
  } else if (display.textContent !== '') {
    display.textContent += '.'
  }
})