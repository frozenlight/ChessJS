window.addEventListener('DOMContentLoaded',function(){

function timeCounter() {
	var newTime = Date.now();
	displayTime = newTime - oldTime;
	var millisecond = displayTime;
	var	hour
	var minute
	var second;
	second = Math.floor(millisecond / 1000);
	minute = Math.floor(second / 60);
	hour = Math.floor(minute / 60);
	second = second % 60
	minute = minute % 60
	hour = hour % 24
	millisecond = millisecond - ((hour*60 + minute)*60 + second)*1000;
	hour = fixHMS(hour)
	minute = fixHMS(minute)
	second = fixHMS(second)
	millisecond = fixMilli(millisecond)

    document.getElementById('display-area').innerHTML = hour +':'+ minute +':'+ second +'.'+ millisecond
}

function fixHMS(number) {
	if (number < 10)
        number = "0" + number;
    return number;
}

function fixMilli(number) {
	if (number < 10)
        number = "00" + number;
	else if (number < 100)
        number = "0" + number;
    return number;
}

var TimerStart = 0, oldTime, displayTime = 0;
document.getElementById('toggle-button').addEventListener('click',function(){
	var newTime = Date.now();
	if (TimerStart == 0) {
		oldTime = Date.now()-displayTime;
		TimerStart = setInterval(function(){timeCounter()}, 11);
    } else {
        clearInterval(TimerStart);
		TimerStart = 0;
    }
});

document.getElementById('reset-button').addEventListener('click',function(){
	document.getElementById('display-area').innerHTML = "00:00:00.000"
	oldTime = Date.now()
	displayTime = 0
});

	
});
