var startBtn=$("#start");
var timeRemaining=30;
var countdown;
var Qindex=0;
var anskey=["choice0","choice1"];
var Qs = [{
		Question:"Who invented the telephone?",
		Choices:["Pablo","Bell","mario"]},
		{
		Question:"Which nail grows fastest?",
		Choices:["pinky","index","middle",]}];
var anskeyDisplayed=[Qs[0].Choices[0]];
var images=["assets/images/colorful.png","assets/images/diamond.png"];
var correctAns=0;
var incorrectAns=0;
var unAns=0;
//----------------------------------------

function timer(){

	countdown=setTimeout(function() {timer();}, 1000);
	$("#Tsection").text("Time Remaining "+ timeRemaining);
	timeRemaining--;

	if(timeRemaining<0){
		clearTimeout(countdown);
		$("#result").text("TIMES UP!");
		unAns++;
		emptyQA();
		imgDisplay();
		//always after imgdisplay(), Qindex need to not be incremented before its passed
		setTimeout(function() {
			nxtQ();	},1000*3);	
	}
}
function displayQ(i){
	$("#Qsection").text(Qs[i].Question);
	for (var j=0;j<Qs[i].Choices.length;j++)
	{
		$("#choice"+j).text(Qs[i].Choices[j]);
	}
}

function emptyQA(){
	$("#Qsection").empty();
	for(var i=0;i<3;i++){
		$("#choice"+i).empty();
	}
	
}
function imgDisplay(){
	$("#correctAns").text("The correct answer was: "+ anskeyDisplayed[Qindex])
	$("#img-holder").html("<img src=" + images[Qindex] + " width='400px'>");
}

function nxtQ(){
	Qindex++;
	$("#result").empty();
	$("#correctAns").empty();
	$("#img-holder").empty();

	if(Qindex<=(Qs.length-1)){
		timeRemaining=30;
		timer();
		displayQ(Qindex);
	}
	else{
		
	}


}
//--------------------------------------------

startBtn.click(function(){
	startBtn.hide();
	timer();
	displayQ(Qindex);
	
	
	$("#choices").on("click","div",function(){

		var choiceClicked=$(this).attr("id");
		clearTimeout(countdown);
		emptyQA();
			

		if(choiceClicked===anskey[Qindex]){
			
			$("#result").text("CORRECT!");
			imgDisplay();
			//always after imgdisplay(), Qindex need to not be incremented before its passed
			setTimeout(function() {
			nxtQ();	},1000*3);
		}

		else{

			$("#result").text("WRONG!");
			imgDisplay();
			incorrectAns++;
			//always after imgdisplay(), Qindex need to not be incremented before its passed
			setTimeout(function() {
			nxtQ();	},1000*3);	
		}
	
		
	});
	
});