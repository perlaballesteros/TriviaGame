var startBtn=$("#start");
var timeRemaining=30;
var countdown;
var Qindex=0;
var anskey=["choice0","choice1","choice2"];
var Qs = [{
		Q:"Who invented the telephone?",
		Choices:["Pablo","Bell","mario"]},
		{
		Q:"Which nail grows fastest?",
		Choices:["pinky","index","middle",]}];

//----------------------------------------

function timer(){

	countdown=setTimeout(function() {timer();}, 1000);
	$("#Tsection").text("Time Remaining "+ timeRemaining);
	timeRemaining--;

	if(timeRemaining<0){
		clearTimeout(countdown);
		console.log("you loose");
		Qindex++;
		emptyQA();
	}
}
function displayQ(i){
	$("#Qsection").text(Qs[i].Q);
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
//--------------------------------------------

startBtn.click(function(){
	startBtn.hide();
	timer();
	displayQ(Qindex);
	console.log(timeRemaining);
	
	
	$("#choices").on("click","div",function(){

		var choiceClicked=$(this).attr("id");
		clearTimeout(countdown);
		Qindex++;
		emptyQA();
		

		if(choiceClicked===anskey[Qindex-1]){
			console.log("right");
			
		}
		else{
			console.log("wrong");
		
			
		}

	});
	
	
});