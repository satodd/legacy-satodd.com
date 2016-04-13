$(document).ready(function(){
			var num = 25;
			console.log(num);
			for (i=0; i < num;i++){
				var xPos = Math.floor((Math.random() * 100)+1);
				var speed = Math.floor((Math.random() * 50)+10);
				var diameter = Math.floor((Math.random() * 50)+5);

				$("#background").append('<div class="bubble"  style="left: '+ xPos +'%;\
														    	-webkit-animation-duration: '+ speed +'s;\
														    	animation-duration:'+ speed +'s; \
														    	width:'+diameter+'; \
																height:'+diameter+';"  ></div>');
			}
		});

function info(type) {

	$("#contents").empty();
	$("#contents").width(400).height(400);
	$("#contents").append('<button id="exit" onclick="exit()">X</button> <p>'+type+'</p>');
};

function exit() {
	$("#contents").empty();
	$("#contents").width(0).height(0);
	console.log("clicked!")
}