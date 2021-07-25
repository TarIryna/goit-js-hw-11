function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}


const dateBtn = document.querySelector('[data-start]');
const alert = document.querySelector('p');
const daysI = document.querySelector('[data-days]');
const hoursI = document.querySelector('[data-hours]');
const minutesI = document.querySelector('[data-minutes]');
const secondsI = document.querySelector('[data-seconds]');
const isStarted = false;

dateBtn.addEventListener('click', startTimer);

function pad(value) {
    return String(value).padStart(2, '0');
}
// function daysPad(value) {
//     return String(value).padStart(3, '0');
// }

function startTimer() {
    setInterval(() => {
    const inputValue = new Date (document.getElementById('date-selector').value);
    var currentTime = new Date();
    if (inputValue < currentTime || isStarted) {
        alert.classList.add('error');
        setTimeout(() => {
            alert.classList.remove('error');
         }, 2000);
        return;
    }
    
        const deltaTime = inputValue - currentTime;
        const resultTime = convertMs(deltaTime);
        daysI.textContent = pad(resultTime.days);
        hoursI.textContent = pad(resultTime.hours);
        minutesI.textContent = pad(resultTime.minutes);
        secondsI.textContent = pad(resultTime.seconds);
    }, 1000);

}

// let timerInterval;
// Swal.fire({
//   title: 'Auto close alert!',
//   html: 'I will close in <b></b> milliseconds.',
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading()
//     timerInterval = setInterval(() => {
//       const content = Swal.getHtmlContainer()
//       if (content) {
//         const b = content.querySelector('b')
//         if (b) {
//           b.textContent = Swal.getTimerLeft()
//         }
//       }
//     }, 100)
//   },
//   willClose: () => {
//     clearInterval(timerInterval)
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log('I was closed by the timer')
//   }
// })