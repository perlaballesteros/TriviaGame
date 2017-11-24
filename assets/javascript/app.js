var startBtn=$("#start");
var timeRemaining=30;
var countdown;
var questions=
];

//----------------------------------------

function timer(){

	var countdown=setTimeout(function() {timer();}, 1000);
	$("#timerSection").text("Time Remaining "+ timeRemaining);
	timeRemaining--;

	if(timeRemaining<0){
		clearTimeout(countdown);
	}
}

//--------------------------------------------

startBtn.click(function(){
	startBtn.hide();
	$("#container").append("<div id='timerSection'></div>");
	timer();
	
});