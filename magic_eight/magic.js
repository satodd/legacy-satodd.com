
function shake() {	

	var question = $("#question").val();

	//if question is blank
	if (question == "") {
		alert("Please enter a question");
		}
	else {
		$("#ball").addClass("ballshake");
		$("#eight").empty();
		
		setTimeout(answer, 2500);
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
				
	$("#answer").html(ansText[num] + "<br/><br/><button onclick=again() class=\"btn btn-default\">Try Again?</button>");
			console.log("added!");

	};

function again() {
	$("#answer").empty();
	$("#eight").html("8");
	$("#ball").removeClass("ballshake");
	$("#shakebtn").prop('disabled', false);
}