const monthElement = document.querySelector(".date h1");

const completeDateElement = document.querySelector(".date p");
const daysElements = document.querySelector(".days");

const month = new Date().getMonth();

const lastDayOfMonth = new Date(
  new Date().getFullYear(),
  month + 1,
  0
).getDate();

const firstDayOfMonth =
  new Date(new Date().getFullYear(), month, 1).getDay() - 1;

console.log(firstDayOfMonth);

const monthNames = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthElement.innerText = monthNames[month];
completeDateElement.innerText = new Date().toDateString();

let days = "";
for (let i = firstDayOfMonth; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDayOfMonth; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else days += `<div>${i}</div>`;
}

daysElements.innerHTML = days;
