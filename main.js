let display = document.querySelector('#output-disp');
let sign = document.querySelector('#output-sign');
let stat = document.querySelector('#stat');
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


onOff.addEventListener('click', ()=>{
  display.textContent = '0';
});