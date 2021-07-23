let display = document.querySelector('#output-disp');
let sign = document.querySelector('#output-sign');
let state = document.querySelector('#state');
const numbers = document.querySelectorAll('.btn');
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


let on = false;
let max = true;
let num1, num2, result;
let oper = '';


plus.addEventListener('click', () => {
 if (on && Number(display.textContent)!==NaN) {
    let num1 = Number(display.textContent);
    sign.textContent = '+';
  }
  oper = '+'
})



onOff.addEventListener('click', () => {
  on = !on
  if (on) {
    display.textContent = '0'
    state.style.background = '#01ff00'
    max = true;
  } else {
    display.textContent = '';
    sign.textContent = '';
    state.style.background = '#505050'
    on = false;
  }
});


numbers.forEach((num) => {
  num.addEventListener('click', () => {
    if (on && max) {
      if (display.textContent == '0') {
        display.textContent = '';
        display.textContent += num.textContent;
      } else {
        display.textContent += num.textContent;
      }
    }
    if (display.textContent.length == 10) {
      max = false;
    }
  })
})

backspace.addEventListener('click', () => {
  let len = display.textContent.length;
  if(num1!==NaN && sign.textContent!==''){
    sign.textContent = '';
  }else{
  if (len > 1) {
    display.textContent = display.textContent.substr(0, len - 1);
    max = true;
  } else if (len == 1) {
    display.textContent = '0';
  }
}
})

// backspace.addEventListener('click', () => {
//   if(num1!==NaN){
//     sign.textContent = '';
//   }
// })

clear.addEventListener('click', () => {
  if (on) {
    display.textContent = "0";
    sign.textContent = '';
    max = true;
  }
})

mp.addEventListener('click', () => {
  if (display.textContent == '0') {
    display.textContent = '-';
  } else if (display.textContent == '-') {
    display.textContent = '0'
  } else if (display.textContent !== '') {
    display.textContent = Number(display.textContent) * -1;
  }
})


// mp.addEventListener('click', ()=>{
// let disp = display.textContent;
// switch(disp){
//  case '0' :
//  display.textContent='-';
//  break;
// case '-' :
//   display.textContent='0';
// break;
// default:
//   if(disp !== ''){
//     display.textContent = Number(display.textContent) * -1;
//   }
// }
// })