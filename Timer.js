let hour = 0;
let minute = 0;
let second = 0;
let interval;
let startStop = false;

document.getElementById("playPause").onclick = () => {
        playPause()
};
function playPause() { 
if (startStop == false) {
          startStop = true
          runTimer()
          document.getElementById("playPause").textContent = "pause"
}else if(startStop == true){
          startStop = false
          document.getElementById("playPause").textContent = "play_arrow"
          runTimer()
}
};
function runTimer() {
    if (startStop == true) {
        interval = setInterval(timer, 1000);

}else if (startStop == false) {
        clearInterval(interval);
}    
};

function timer() {       
if (second < 60) {
        second++;     
}else{
        second = 0;
        minute++;
}if (minute > 59) {
        minute = 0;
        hour++;
}if (hour > 60) { 
};

if (second < 10) {
        document.getElementById("Seconds").textContent = "0" + second + "s";
}else {
        document.getElementById("Seconds").textContent = second + "s";  
}if (minute < 10) {
        document.getElementById("Minutes").textContent = "0" + minute + "m";
}else {
        document.getElementById("Minutes").textContent = minute + "m";
}if (hour < 10) {
        document.getElementById("Hours").textContent = "0" + hour + "h";
}else {
        document.getElementById("Hours").textContent = hour + "h";   
}
};

document.getElementById("restart").onclick = () => {
        hour = 0;
        minute = 0;
        second = 0;
        document.getElementById("Seconds").textContent = "0" + second + "s";
        document.getElementById("Minutes").textContent = "0" + minute + "m";
        document.getElementById("Hours").textContent = "0" + hour + "h";
        document.getElementById("playPause").textContent = "play_arrow"
        clearInterval(interval);
};
