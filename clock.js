let hrs=document.getElementById("pl");
let min=document.getElementById("ps");
let sec=document.getElementById("pp");
function display(){
    let date=new Date();
    let hh=date.getHours;
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hr=30*hh+mm/2;
    let mr=6*mm;
    let sr=6*ss;
    hrs.style.transform=`rotate(${hr}deg)`;
    min.style.transform=`rotate(${mr}deg)`;
    sec.style.transform=`rotate(${sr}deg)`;
}
setInterval(display,1000);