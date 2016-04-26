var state = 1;

function load() {
	$('#darkAndBright').jQueryTween({
		from:{
			opacity:0
		},
		to:{
			opacity:1
		},
		repeat: 0,
		duration:5000,
		easing: TWEEN.Easing.Exponential.InOut,
	});
}

self.ondragstart = function(){
    return false;
}

function switchState(toState) {
	if(toState==0){
		state = 0;
		$('#darkAndBright').jQueryTween(
			{ to: { backgroundPosition: { y: '22%' } }, yoyo: false },
			function() {
				$('#bright').css("display","inherit");
				$('#dark').css("display","none");
			}
		);	
	} else {
		state = 2;
		$('#darkAndBright').jQueryTween(
			{ to: { backgroundPosition: { y: '80%' } }, yoyo: false },
			function() {
				$('#bright').css("display","none");
				$('#dark').css("display","inherit");
			}
		);	
	}
	
}

onclick = function (e) {
	if (state == 1) {
		if (e.clientY<470) {
			//switch to state 0
			switchState(0);
	    } else if (e.clientY>520) {
	    	//switch to state 2
	    	switchState(2);
	    }
	} else if (state == 0) {
		if (e.clientY>900) {
			switchState(2);
		}
	} else {
		if (e.clientY<200) {
			switchState(0);
		}
	}
     
}