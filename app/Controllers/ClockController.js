

function _drawClock() {

}
setInterval(showTime, 1000)
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // am_pm = "AM";

    // if (hour > 12) {
    //     hour -= 12;
    //     am_pm = "PM";
    // }
    // if (hour == 0) {
    //     hr = 12;
    //     am_pm = "AM";
    // }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec;

    document.getElementById("clock").innerHTML = currentTime;

}
showTime()
// function timeNow() {
//     hour = timeUpdate(hour);
//     min = timeUpdate(min);
//     sec = timeUpdate(sec);
//     var midday = "AM";
//     midday = (hour >= 12) ? "PM" : "AM";
//     hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

//     document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec + " " + midday;
//     var t = setTimeout(timeNow, 1000)
// }

// function timeUpdate(k) {
//     if (k < 10) {
//         return "0" + k;
//     }
//     else {
//         return k;
//     }
// }

// timeNow()

export default class ClockController {

    get Template() {
        return /**html */ `
        <div> ${this.hour} : ${this.minute} : ${this.second} </div>
        
        `
    }

}