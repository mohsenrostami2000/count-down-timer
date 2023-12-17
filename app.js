
import { months } from "./arrays.js";
import { weekdays } from "./arrays.js";

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 11, 20, 21, 30, 0);
// console.log(futureDate)

// get year, month, hours, mins

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();

// months are a bit tricky

// let month = futureDate.getMonth();
// month = months[month];

const month = months[futureDate.getMonth()];

// let day = futureDate.getDay();
// day = weekdays[day];

const day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} at ${hours}:${mins}pm`;