// Select them by name so that they can be referred to later
let hours = document.querySelector("#hours");
let ampm = document.querySelector("#ampm");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
// get the current time



// place time in correct places

function updateClock() {
    var date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if (hh > 12){
        hh = hh - 12; 
    ampm.innerHTML = "PM";   
    } else{
        ampm.innerHTML ="AM" ;
    }
    if (hh < 10){
        hh = "0" + hh;
    }
    if (mm < 10){
        mm = "0" + mm;
    }
    if(ss<10) {
        ss = "0" + ss;
    }

    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
     setInterval(() =>{
        updateClock();
     })
}

updateClock();