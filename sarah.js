document.addEventListener("DOMContentLoaded", function() {
	let num = 25;

	for (i=0; i < num; i++) {
		let xPos = Math.floor((Math.random() * 100)+1);
		let speed = Math.floor((Math.random() * 50)+10);
		let diameter = Math.floor((Math.random() * 50)+5);

		let background = document.getElementById("background")
		background.innerHTML += ('<div class="bubble"  style="left: '+ xPos +'%;\
							    	-webkit-animation-duration: '+ speed +'s;\
							    	animation-duration:'+ speed +'s; \
							    	width:'+diameter+'; \
									height:'+diameter+';"  ></div>');
	}
});