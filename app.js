
import { months } from "./arrays.js";
import { weekdays } from "./arrays.js";

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempHour = tempDate.getHours();
let tempMins = tempDate.getMinutes()
let tempSecs = tempDate.getSeconds();

// let futureDate = new Date(2023, 11, 18, 18, 30, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay, tempHour, tempMins + 59, tempSecs + 59);

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

// function to calculate time remaining
const futureTime = futureDate.getTime()
function getRemainTime() {
    const today = new Date().getTime();
    const timeLeft = futureTime - today;
    // what is today
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let daysLeft = Math.floor(timeLeft / oneDay);
    let hoursleft = Math.floor((timeLeft % oneDay) / oneHour);
    let minsLeft = Math.floor((timeLeft % oneHour) / oneMin);
    let secsLeft = Math.floor((timeLeft % oneMin) / 1000);

    // make an arrya to put our value in it

    const values = [daysLeft, hoursleft, minsLeft, secsLeft];

    // 2- because we want to if days and hours and... is less than 10, put a 0 befor it to show it like "09" we build a fucntion to do that

    const format = (item) => {
        if(item < 10) {
            return (item = `0${item}`);    
        } else {
            return item;
        }
    };

    // 1- change the value of items in html/ web-page

    // 3- now we should add our format function to items
    items.forEach(function(item , index) {
        item.innerHTML = format(values[index]);
    });

    // set if statment to stop countdown when deadline is over
    if(timeLeft < 0) {
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class=""deadline-format>Sorry, giveaway time is expired.</h4>`;
    };
};
// 4- count-down 
let countDown = setInterval(getRemainTime, 1000);
getRemainTime();