var startBtn=$(".startGame");
var timeRemaining=15;
var countdown;
var Qindex=0;

var Qs = [{
		Question:"Papain is a natural digestive aid that is found naturally in:",
		Choices:["Mango","Papaya","Raspberry"]},
		{
		Question:"Because it has a high quercitin content this fruit may help relieve hayfever.",
		Choices:["Pineapple","Strawberry","Raspberry"]},
		{
		Question:"There is a fruit juice that can increase the potency of some medication, even causing an overdose. Which fruit juice is this?",
		Choices:["Grapefruit","Orange","Banana"]},
		{
		Question:"In the Hindu culture, the leaves of which fruit are hung at weddings to ensure fertility?",
		Choices:["Mango","Banana","Papaya"]},
		{
		Question:"Apple seeds contain:",
		Choices:["Vitamin H","Sodium","Cyanide"]},];
var anskey=["choice1","choice2","choice0","choice0","choice2"];
var anskeyDisplayed=[Qs[0].Choices[1],Qs[1].Choices[2],Qs[2].Choices[0],Qs[3].Choices[0],Qs[4].Choices[2]];
var images=["assets/images/papaya.gif","assets/images/raspberry.gif","assets/images/grapefruit.gif","assets/images/mango.gif","assets/images/apple.gif"];
var correctAns=0;
var incorrectAns=0;
var unAns=0;
var backgroundSong=new Audio("assets/images/vivora.mp3");
//--------------------------------------
//timer function will take in time remaining
function timer(){
	countdown=setTimeout(function() {timer();}, 1000);
	$("#Tsection").text("Time Remaining "+ timeRemaining);
	timeRemaining--;

	if(timeRemaining<0){
		//stop timer when it reaches zero
		clearTimeout(countdown);

		$("#result").text("TIMES UP!");
		unAns++;
		emptyQA();
		imgDisplay();
		//always after imgdisplay(), Qindex need to not be incremented before its passed
		setTimeout(function() {
			nxtQ();	},1000*3);
		timeRemaining=15;

	}
}

//displaying the questions
function displayQ(i){
	$("#Qsection").text(Qs[i].Question);
	for (var j=0;j<Qs[i].Choices.length;j++)
	{
		$("#choice"+j).text(Qs[i].Choices[j]);
	}
}
//clearing questions and answers
function emptyQA(){
	$("#Qsection").empty();
	for(var i=0;i<3;i++){
		$("#choice"+i).empty();
	}
}
//displaying the correct answer and img
function imgDisplay(){
	$("#correctAns").text("The correct answer was: "+ anskeyDisplayed[Qindex])
	$("#img-holder").html("<img src=" + images[Qindex] + " width='400px'>");
}

//displaying the next question
function nxtQ(){
	Qindex++;
	$("#result").empty();
	$("#correctAns").empty();
	$("#img-holder").empty();

//keep displaying question as long as in array 
	if(Qindex<=(Qs.length-1)){
		timeRemaining=15;
		timer();
		displayQ(Qindex);
	}
	else{
		$("#Tsection").empty();
		$("#done").text("You are done!");
		$("#correct").text("Correct: "+ correctAns);
		$("#incorrect").text("Incorrect: " + incorrectAns);
		$("#unAns").text("Unanswered: "+ unAns);
		$("#startOver").text("Start Over!");
		startOvervars();
			
	}
}
function startOvervars(){
	timeRemaining=15;
	Qindex=0;
	correctAns=0;
	incorrectAns=0;
	unAns=0;
}
function startOverclear(){
	$("#done").empty();
	$("#correct").empty();
	$("#incorrect").empty();
	$("#unAns").empty();
	$("#startOver").empty();
	
}

//-----------------------------------------
startBtn.on("click",function(){
	//initialize the variables for everytime we start over
	startOverclear();
	//hide start button
	$("#start").hide();
	////Display Qs
	displayQ(Qindex);
	//start the timer
	timer();
	
	
	$("#choices").on("click","div",function(){
		clearTimeout(countdown);

		var choiceClicked=$(this).attr("id");
		emptyQA();
			

		if(choiceClicked===anskey[Qindex]){
			
			
			console.log("im here");
			$("#result").text("CORRECT!");
			imgDisplay();
			correctAns++;
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