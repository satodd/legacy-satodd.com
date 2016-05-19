$("document").ready(function () {
	$(".alert").hide();
	$("#again").hide();
	$("#eight").html("8");
});


function shake() {	

	var input = $("#question").val();
	var question = input.toLowerCase();
	
	console.log(question)

	//if question is blank
	if (question == "") {
		$(".alert").fadeIn();
		setTimeout(again, 2000);
	}
	else if ((question == "should i hire sarah") || question == "should i hire sarah?"  {
		$("#ball").addClass("ballshake");
		$("#eight").fadeOut();
		setTimeout(function() {
			$("#answer").html("Without a doubt");
			}, 2500);
	}
	else {
		$("#ball").addClass("ballshake");
		setTimeout(answer, 2500);
		$("#eight").fadeOut();
	};
};

function answer() {
	var num = Math.floor((Math.random() * 19)+0);
	var ansText = ["It is certain", 
				"It is decidedly so",
				"Without a doubt",
				"Yes, definitely",
				"You may rely on it",
				"As I see it, yes",
				"Most likely",
				"Outlook good",
				"Yes",
				"Signs point to yes",
				"Reply hazy try again",
				"Ask again later",
				"Better not tell you now",
				"Cannot predict now",
				"Concentrate and ask again",
				"Don't count on it",
				"My reply is no",
				"My sources say no",
				"Outlook not so good",
				"Very doubtful" ];
				
	$("#answer").html(ansText[num] + "<br/><br/>")
	$("#answer").fadeIn();
	$("#btnshake").hide();
	$("#again").show();
	};

function again() {
	$(".alert").fadeOut();
	$("#answer").fadeOut();
	$("#answer").empty();
	$("#eight").fadeIn();
	$("#eight").html("8");
	$("#btnshake").show();
	$("#again").hide();
	$("#ball").removeClass("ballshake");
}