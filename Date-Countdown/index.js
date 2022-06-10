/********************************************************************** CALCULATE ******************************************************************/
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let monthsDay = [31,29,31,30,31,30,31,31,30,31,30,31];
var today = new Date();
//Calculate Time
function Calculate(){
    var mnth = 0;
    for (let i = today.getMonth(); i<month.innerHTML-1; i++){
        mnth += monthsDay[i];
    }
    return(365*(year.innerHTML - today.getFullYear()) + mnth + (day.innerHTML-today.getDate()));
}

/********************************************************************** COUNTDOWN ******************************************************************/
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
//Countdown 
setInterval(function Countdown(){
    secs.innerHTML--; 
    if (secs.innerHTML == '0'){
        secs.innerHTML = '59';
        mins.innerHTML--; 
        if (mins.innerHTML < '0'){
            mins.innerHTML = '59';
            hours.innerHTML--;  
            if (hours.innerHTML < '0'){
                hours.innerHTML = '23';
                days.innerHTML--;  
            }
        }
    }
},1000) 

//Main Program
days.innerHTML = Calculate();
Countdown();

