let days = document.querySelector(".day")
let hours = document.querySelector(".hour")
let minutes = document.querySelector(".minute")
let seconds = document.querySelector(".second")



const countDown = ()=>{
var endDate = new Date("1 January 2025 ");
var currentDate = new Date();
var resultDate = endDate - currentDate

let secCount = Math.ceil(resultDate/1000)%60
let minCount = Math.ceil(resultDate/1000/60)%60
let hourCount = Math.ceil(resultDate/1000/60/60)%24
let daysCount = Math.ceil(resultDate/1000/60/60/24)
seconds.innerText = secCount; 
minutes.innerText = minCount; 
// hours.innerText = hourCount;
// days.innerText = daysCount; 
if(hourCount === 1){
    hours.innerText = '0'; 
}else{
    hours.innerText = hourCount;
}
if(daysCount === 1){
    days.innerText = '0'; 
}else{
 days.innerText = daysCount; 
}

}

setInterval(countDown,1000) 