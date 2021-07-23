// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
 

const DELAY = 1000;
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const timerId = null;
let isActive = false;


 
startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);


// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart() {
  if (isActive) {
      console.log('уже активно - выходим');
    return;
  }
   const timerId = setInterval(() => {
      const color = getRandomHexColor();
      body.style.backgroundColor = color.toString();
     isActive = true;
     localStorage.setItem('timerId',timerId);
}, DELAY);
} 

function onClickStop() {
const timerId = localStorage.getItem('timerId');
  clearInterval(timerId);
  isActive = false;
}
