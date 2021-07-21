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


let on = false;
let max = true;

onOff.addEventListener('click', () => {
  on = !on
  if (on) {
    display.textContent = '0'
    state.style.background = '#01ff00'
    max = true;
  } else {
    display.textContent = '';
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
    if(display.textContent.length==10){
      max = false;
    }
  })
})