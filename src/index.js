const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
// функція для прорахунку дня тижня,  числа місяця, назва місяця, рік, електр. годинник. Кожної секунди повинно усе це визначатись.

setInterval(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();//поверне число місяця
    const date = currentDate.getDay();//поверне число-індекс з масиву назв днів тижня "arrDay";
    const month = currentDate.getMonth();//поверне індекс назви місяця з масиву namesOfMonth;
    const year = currentDate.getFullYear();
    const time = currentDate.toLocaleTimeString("uk-UA");
    refs.day.textContent = arrDay[date];
    refs.date.textContent = day;
    refs.month.textContent = namesOfMonth[month];
    refs.year.textContent = year;
    refs.clock.textContent = time;
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    // console.log(hours, minutes, seconds);
    const secondsDegree = (360/60)*seconds;
    const minutesDegree = (360/60)*minutes;
    const hoursDegree = (360/12)*hours+(360/12/60)*minutes;

    refs.seconds.style.transform = `rotate(${secondsDegree}deg)`;
    refs.minutes.style.transform = `rotate(${minutesDegree}deg)`;
    refs.hours.style.transform = `rotate(${hoursDegree}deg)`
    // console.log(time)
}, 1000)