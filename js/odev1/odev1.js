let person_name= prompt('Adiniz');
let myName=document.getElementById('myName');
myName.innerHTML=person_name;



let current_date=new Date();
let cTime = current_date.getHours() + ":" + current_date.getMinutes() + ":" + current_date.getSeconds();
let day=current_date.getDay();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let dayName = days[d.getDay()];
let dateTime = cTime+' '+dayName;
window.onload = showTime();
function showTime(){

    let myClock=document.getElementById('myClock');
    myClock.innerHTML=dateTime;
   
}