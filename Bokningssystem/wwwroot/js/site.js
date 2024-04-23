// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const calendar = document.querySelector("#app-calendar"); 

const isWeekend = day => {
    // 6 betyder lördag, 0 betyder söndag
    return day % 7 === 6 || day % 7 === 0;  
}

for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day)

    calendar.insertAdjacentHTML("beforeend",
        `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`); 

}


