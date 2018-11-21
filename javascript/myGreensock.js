// Content
const mainOne = document.getElementById('mainOne'); 
const mainTwo = document.getElementById('mainTwo');
const mainThree = document.getElementById('mainThree');
const mainFour = document.getElementById('mainFour');
const share = document.getElementById('share');
const learn = document.getElementById('learn');
const subscribe = document.getElementById('subscribe');
const youStopped = 	document.getElementById('youStopped');
const hamburger = document.getElementById('hamburger');


// Canvas Element
const mainCanvas = document.getElementsByTagName('canvas');

// Instructions close button
const closeInstruct = document.getElementById('closeInstruct');

// link to last page 
const helpUs = document.getElementsByClassName('helpUs');

// Navigation
const nav = document.getElementById("nav");
const btns = nav.getElementsByClassName("navButton");
const current = document.getElementsByClassName("navButtonHere");
const nav1 = document.getElementById('home');
const nav2 = document.getElementById('numOne');
const nav3 = document.getElementById('numTwo');
const nav4 = document.getElementById('learnMore');
const nav5 = document.getElementById('contactUs');


navigation();
closeInstructions();


function clearFadeIn() {

	nav1.classList.remove('fadeIn');
	nav2.classList.remove('fadeInTwo');
	nav3.classList.remove('fadeInThree');
	nav4.classList.remove('fadeInFour');
	nav5.classList.remove('fadeInFive');

}


hamburger.addEventListener('touchstart', function() {

	nav.classList.toggle('dFlex');
	nav1.classList.add('fadeIn');
	nav2.classList.add('fadeInTwo');
	nav3.classList.add('fadeInThree');
	nav4.classList.add('fadeInFour');
	nav5.classList.add('fadeInFive');
    hamburger.classList.toggle('change');


})

function navigation() {
	
	for (var i = 0; i < btns.length; i++) {

		btns[i].addEventListener('click', function() {

		    current[0].className = current[0].className.replace(" navButtonHere", "");

		    this.className += " navButtonHere";

		    clearFadeIn();


		});
	}
};




// Removes blurry background on the canvas element when instructions appear
function removeBlur() {

	if ( mainCanvas[0].classList.contains('blurIn') == true || mainCanvas[0].classList.contains('blurInFast') == true ) {

		mainCanvas[0].classList.remove('blurIn');
		mainCanvas[0].classList.remove('blurInFast');
		mainCanvas[0].classList.add('blurOut');	

	} 

}

// Adds blurry background on the canvas element when instructions appear
function makeBlur() {

	if ( mainCanvas[0].classList.contains('blurIn') == false || mainCanvas[0].classList.contains('blurOut') == true ) {
		
		mainCanvas[0].classList.add('blurIn');
		mainCanvas[0].classList.remove('blurOut');

	}

}





//  INSTRUCTIONS  //  

// Close Instructions
function closeInstructions() {

	closeInstruct.addEventListener('click', function(e) {

	e.preventDefault();

		controls.enabled = false;
		TweenMax.to("#nav", 1, {autoAlpha:1});
		TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:1});

		removeBlur();
		infoIcon();

		closeInstruct.classList.remove('dFlex');
		closeInstruct.classList.add('dNone');
		closeInstruct.classList.remove('fadeInDelay');



		if (document.getElementById('mainTwo').style.opacity == 1) {

			TweenMax.to("#mainTwo", 1, {autoAlpha:0});

		} else if (document.getElementById('mainThree').style.opacity == 1) {

			TweenMax.to("#mainThree", 1, {autoAlpha:0});
			document.getElementById('controls').classList.add('dGrid');

		}



	});

}

function closeIns() {

	closeInstruct.classList.add('dFlex');
	closeInstruct.classList.remove('dNone');
	closeInstruct.classList.add('fadeInDelay');

}


// escape hatch... Let's the user toggle instructions on/off

function infoIcon() {

	if ( document.getElementById('info').classList.contains('dNone') ) {

		document.getElementById('info').classList.add('dFlex');
		document.getElementById('info').classList.remove('dNone');
		document.getElementById('info').classList.add('fadeIn');

	}
}

function infoRecede() {

	if ( document.getElementById('info').classList.contains('dFlex') ) {

		document.getElementById('info').classList.remove('dFlex');
		document.getElementById('info').classList.add('dNone');
		document.getElementById('info').classList.remove('fadeIn');

		if ( document.getElementById('controls').classList.contains('dGrid') ) {

			document.getElementById('controls').classList.remove('dGrid');
			
		}

	}



}

document.getElementById('info').addEventListener('click', function(e) {

	e.preventDefault();

	if ( nav2.classList.contains('navButtonHere') ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:1});
		TweenMax.to("#nav", 1, {autoAlpha:0});

	} else if ( nav3.classList.contains('navButtonHere') ) {

		TweenMax.to("#mainThree", 1, {autoAlpha:1});
		TweenMax.to("#nav", 1, {autoAlpha:0});

	}

	infoRecede();

	closeInstruct.classList.add('dFlex');
	closeInstruct.classList.remove('dNone');
	closeInstruct.classList.add('fadeIn');

	mainCanvas[0].classList.add('blurInFast');
	mainCanvas[0].classList.remove('blurOut');

});

//  End INSTRUCTIONS  //




// Reward statement that pops up for not running over the pedestrian
function success() {


	if ( youStopped.classList.contains('fadeOut') || youStopped.classList.contains('dFlex') ) {

			youStopped.classList.remove('fadeOut');
			youStopped.classList.remove('dFlex');
			youStopped.classList.add('dNone');
	}

	document.addEventListener('keyup', function(event) {


		if ( event.keyCode == 38 && theCar.position.x >= 1.5 ) {

			youStopped.classList.add('dFlex');
			youStopped.classList.add('fadeIn');
			youStopped.classList.remove('dNone');

		} 

	});

	document.getElementById('up').addEventListener('touchstart', function() {

		if ( theCar.position.x >= 1.5 ) {

			youStopped.classList.add('dFlex');
			youStopped.classList.add('fadeIn');
			youStopped.classList.remove('dNone');

		}
	})

}



//  //////  NAVIGATION  //////  //
nav1.addEventListener('click', function(e) {

	e.preventDefault();

// Nav

	TweenMax.to("#nav", 1, {autoAlpha:1});

// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:1});	

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


// Scenes

	TweenMax.to(highway.position, 3, {x: 0, y: sceneUp, z: 0, ease: Power2.easeOut});
	TweenMax.to(theCar.position, 3, {x: theCarPosOne.x, y: theCarPosOne.y, z: theCarPosOne.z, ease: Power2.easeOut});
	TweenMax.to(theCar.rotation, 3, {y: -90 * ( Math.PI / 180 ), ease: Power2.easeOut});

	controls.enabled = true;
	TweenMax.to(controls.target, 3, { x:0, y:0, z:0, ease:Power2.easeOut });

	TweenMax.to(scene.position, 3, {y: sceneStart, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInit.x, y: cameraInit.y, z: cameraInit.z, ease: Power2.easeOut});

	nav.classList.toggle('dFlex');
	hamburger.classList.toggle('change');
	infoRecede();


});




nav2.addEventListener('click', function(e) {

	e.preventDefault();

// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:0, delay: 0.5});
	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[1].className += " navButtonHere";


// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:1, delay: 3});
	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


// Scenes

	TweenMax.to(theCar.position, 3, {x: theCarPosOne.x, y: theCarPosOne.y, z: theCarPosOne.z, ease: Power2.easeOut});
	TweenMax.to(theCar.rotation, 3, {y: -90 * ( Math.PI / 180 ), ease: Power2.easeOut});

	controls.enabled = true;
	TweenMax.to(controls.target, 3, { x: -0.5, y: player.height, z: 69.25, ease: Power2.easeOut });

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInCarOne.x, y: cameraInCarOne.y, z: cameraInCarOne.z, ease: Power2.easeOut});
	
	nav.classList.toggle('dFlex');
	hamburger.classList.toggle('change');
	makeBlur();
	infoRecede();
	closeIns();	


});



nav3.addEventListener('click', function(e) {

	e.preventDefault();

// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:0, delay: 0.5});
	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[2].className += " navButtonHere";


// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:0});
	TweenMax.to("#mainThree", 1, {autoAlpha:1, delay: 3});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


// Scenes

	TweenMax.to(theCar.position, 3, {x: 0, y: 0, z: 0, ease: Power2.easeOut});
	TweenMax.to(theCar.rotation, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(heyLady.position, 3, {x: 0, y: 0, z: 0, ease: Power2.easeOut});

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInCar.x, y: cameraInCar.y, z: cameraInCar.z, ease: Power2.easeOut});

	controls.enabled = true;
	TweenMax.to(controls.target, 3, { x: 36.4, y: player.height, z: 0.5, ease: Power2.easeOut });

	nav.classList.toggle('dFlex');
	hamburger.classList.toggle('change');
	makeBlur();
	success();
	infoRecede();	
	closeIns();

});



nav4.addEventListener('click', function(e) {

	e.preventDefault();

// Nav

	TweenMax.to("#nav", 1, {autoAlpha:1});

// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:0});

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:1});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


// Scenes

	controls.enabled = true;
	TweenMax.to(controls.target, 3, { x:0, y:0, z:0, ease:Power2.easeOut });
	TweenMax.to(camera.position, 3, {x: -67.5, y: 3.05, z: 26.5, ease: Power2.easeOut});
	
	nav.classList.toggle('dFlex');
	hamburger.classList.toggle('change');
	removeBlur();
	infoRecede();	

});


nav5.addEventListener('click', function(e) {

	e.preventDefault();

// Nav

	TweenMax.to("#nav", 1, {autoAlpha:1});

// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:0});

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:1});
	TweenMax.to("#subscribe", 1, {autoAlpha:1});
	TweenMax.to("#learn", 1, {autoAlpha:1});


// Scenes

	TweenMax.to(controls.target, 3, {x: 45, y: 20, z: 70, ease: Power2.easeOut} );
	TweenMax.to(camera.position, 3, {x: -62.5, y: 11.25, z: 10.9, ease: Power2.easeOut});
	controls.enabled = true;

	nav.classList.toggle('dFlex');
	hamburger.classList.toggle('change');
	removeBlur();
	infoRecede();	

});




document.getElementById('nextPage').addEventListener('click', function(e) {

	e.preventDefault();

// Nav

	TweenMax.to("#nav", 1, {autoAlpha:1});
	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[3].className += " navButtonHere";
	// if (nav1.style.opacity == 0) {

	// 	TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:1});

	// }


// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:0});

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:1});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});
	
// Scenes

	TweenMax.to(controls.target, 3, { x:0, y:0, z:0, ease:Power2.easeOut });
	TweenMax.to(camera.position, 3, {x: -67.5, y: 3.05, z: 26.5, ease: Power2.easeOut});
	controls.enabled = true;

	youStopped.classList.add('fadeOut');
	document.getElementById('controls').classList.remove('dGrid');
	removeBlur();
	infoRecede();


});


helpUs[0].addEventListener('click', function(e) {


	e.preventDefault();

// Nav

	TweenMax.to("#nav", 1, {autoAlpha:1});
	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[4].className += " navButtonHere";

// Pages

	TweenMax.to("#mainOne", 1, {autoAlpha:0});

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:1});
	TweenMax.to("#subscribe", 1, {autoAlpha:1});
	TweenMax.to("#learn", 1, {autoAlpha:1});


// Scenes

	TweenMax.to(controls.target, 3, {x: 45, y: 20, z: 70, ease: Power2.easeOut} );
	TweenMax.to(camera.position, 3, {x: -62.5, y: 11.25, z: 10.9, ease: Power2.easeOut});
	controls.enabled = true;

	removeBlur();
	infoRecede();	


});



