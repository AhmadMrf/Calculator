let display = document.querySelector('#output-disp');
let bgDisplay = document.querySelector('.display') ;
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



let on = false;
let max = true;
let oper = '';
let checkOper = false;
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
    oper = '';
  }
})


plus.addEventListener('click', () => {
 if (on && Number(display.textContent)!==NaN) {
    num1 = Number(display.textContent);
    sign.textContent = '+';
  }
  checkOper = true;
  oper = '+'
})

minut.addEventListener('click', () => {
  if (on && Number(display.textContent) !== NaN) {
    num1 = Number(display.textContent);
    sign.textContent = '-';
  }
  checkOper = true;
  oper = '-'
})

mul.addEventListener('click', () => {
  if (on && Number(display.textContent) !== NaN) {
    num1 = Number(display.textContent);
    sign.textContent = '*';
  }
  checkOper = true;
  oper = '*'
})

div.addEventListener('click', () => {
  if (on && Number(display.textContent) !== NaN) {
    num1 = Number(display.textContent);
    sign.textContent = '/';
  }
  checkOper = true;
  oper = '/'
})


signs.forEach((s) =>{
  s.addEventListener('click',() =>{
  num1 = Number(display.textContent);
  checkOper = true;
  console.log('uuu');
})
})


equal.addEventListener('click', () =>{
  // console.log(num1);
  num2 = display.textContent;
  switch(oper){
    case '*' :
     result = num1 * num2;
     break;
     
  }
  display.textContent = result;
})

function addNumbers(num){
  num.addEventListener('click', () =>{
    if (on && max) {
      if(checkOper){
        checkOper = false;
        display.textContent = '';
        display.textContent += num.textContent;
      } else if (display.textContent == '0') {
        display.textContent = '';
        display.textContent += num.textContent;
      } else if(display.textContent == '-0'){
        display.textContent = '-';
        display.textContent += num.textContent;
      } else if(display.textContent.length ==10){
        max = false;
      }
      else {
        display.textContent += num.textContent;
       }
     }
  })
};

numbers.forEach(addNumbers);

// function addSignNumber(num){
//   num.addEventListener('click', () => {
//     console.log('jj');
//     num1 = display.textContent;
//     if (on && max) {
//       if (display.textContent == '0') {
//         display.textContent = '';
//         display.textContent += num.textContent;
//       } else 
//       if (display.textContent == '-0') {
//         display.textContent = '-';
//         display.textContent += num.textContent;
//       }
//       else if (display.textContent.length == 10) {
//         max = false;
//       }
//       else {
//         display.textContent += num.textContent;
//       }
//     }
//   })
// }

// numbers.forEach((num) =>{
//   if(oper === ''){
//     addNumbers(num)
//   }else{
//     addSignNumber(num)
//   }
// });


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

point.addEventListener('click', () =>{
 if(display.textContent.includes('.')){
   
 } else if(display.textContent == '-'){
    display.textContent = '-0.'
  }else if(display.textContent !== ''){
    display.textContent += '.'
  }
})
