// Start/First Page Buttons
const butt1 = document.getElementById('butt1');
const butt2 = document.getElementById('butt2');

// Content 
const mainTwo = document.getElementById('mainTwo');
const mainThree = document.getElementById('mainThree');
const mainFour = document.getElementById('mainFour');
const mainFive = document.getElementById('mainFive');
const share = document.getElementById('share');
const learn = document.getElementById('learn');
const subscribe = document.getElementById('subscribe');

// Canvas Element
const mainCanvas = document.getElementsByTagName('canvas');

// Instructions close button
const closeInstruct = document.getElementsByClassName('closeInstruct');

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



function navigation() {
	
	for (var i = 0; i < btns.length; i++) {

		btns[i].addEventListener("click", function() {

		    current[0].className = current[0].className.replace(" navButtonHere", "");

		    this.className += " navButtonHere";

		    console.log(this.innerText);

		});
	}
};




// Removes blurry background on the canvas element when instructions appear
function removeBlur() {

	if ( mainCanvas[0].classList.contains('blurIn') == true ) {

		mainCanvas[0].classList.remove('blurIn');
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


// Close Instructions
function closeInstructions() {

	for (var i = 0; i < closeInstruct.length; i++) {

		closeInstruct[i].addEventListener('click', function() {

			controls.enabled = false;
			TweenMax.to("#nav", 1, {autoAlpha:1});
			removeBlur();
			TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:1});

			if (document.getElementById('mainTwo').style.opacity == 1) {

				TweenMax.to("#mainTwo", 1, {autoAlpha:0});

			} else if (document.getElementById('mainFour').style.opacity == 1) {

				TweenMax.to("#mainFour", 1, {autoAlpha:0});
			}

		});

	}

}


function success() {

	document.addEventListener('keyup', function(event) {

		if ( event.keyCode == 38 && theCar.position.x >= 1.5 && youreDone == false ) {

			document.getElementById('youStopped').classList.add('dFlex');
			document.getElementById('youStopped').classList.remove('dNone');
			document.getElementById('tryAnother').classList.add('dFlex');
			document.getElementById('tryAnother').classList.remove('dNone');


		} else if ( event.keyCode == 38 && theCar.position.x >= 1.5 && youreDone == true ) {

			document.getElementById('youStopped').classList.add('dFlex');
			document.getElementById('youStopped').classList.remove('dNone');
			document.getElementById('goNext').classList.add('dFlex');
			document.getElementById('goNext').classList.remove('dNone');

		}


	});

}




nav1.addEventListener('click', function() {

	TweenMax.to("#nav", 1, {autoAlpha:1});


// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:1});

// Page 2
// mainThree.style.visibility == 'visible' || mainFour.style.visibility == 'visible' || mainFive.style.visibility == 'visible' || share.style.visibility == 'visible' || subscribe.style.visibility == 'visible' || learn.style.visibility == 'visible' 
	

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 


// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});



	TweenMax.to(highway.position, 3, {x: 0, y: sceneUp, z: 0, ease: Power2.easeOut});
	TweenMax.to(theCar.position, 3, {x: theCarPosOne.x, y: theCarPosOne.y, z: theCarPosOne.z, ease: Power2.easeOut});
	TweenMax.to(theCar.rotation, 3, {y: -90 * ( Math.PI / 180 ), ease: Power2.easeOut});


	controls.enabled = true;
	controls.target.set( 0, 0, 0 );

	TweenMax.to(scene.position, 3, {y: sceneStart, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInit.x, y: cameraInit.y, z: cameraInit.z, ease: Power2.easeOut});
	


});




nav2.addEventListener('click', function() {


// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	
// Page 2

	TweenMax.to("#mainTwo", 1, {autoAlpha:1, delay: 3});

// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:0, delay: 0.5});
	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[1].className += " navButtonHere";



	TweenMax.to(theCar.position, 3, {x: theCarPosOne.x, y: theCarPosOne.y, z: theCarPosOne.z, ease: Power2.easeOut});
	TweenMax.to(theCar.rotation, 3, {y: -90 * ( Math.PI / 180 ), ease: Power2.easeOut});


	controls.enabled = true;
	controls.target.set( cameraInCarLookOne.x, cameraInCarLookOne.y, cameraInCarLookOne.z );

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInCarOne.x, y: cameraInCarOne.y, z: cameraInCarOne.z, ease: Power2.easeOut});
	
	makeBlur();	
	youreDone = true;
	console.log(theCar.position.x, theCar.position.y, theCar.position.z);

});



nav3.addEventListener('click', function(e) {

	e.preventDefault();




// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:1, delay: 3});

// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:0, delay: 0.5});

	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[2].className += " navButtonHere";




	TweenMax.to(theCar.position, 3, {x: 0, y: 0, z: 0, ease: Power2.easeOut});
	TweenMax.to(theCar.rotation, 3, {y: 0, ease: Power2.easeOut});


	TweenMax.to(heyLady.position, 3, {x: 0, y: 0, z: 0, ease: Power2.easeOut});

	// TweenMax.to("#youStopped", 1, {autoAlpha:1});
	// document.getElementById('youStopped').classList.add('dNone');
	// document.getElementById('youStopped').classList.remove('dFlex');
	// TweenMax.to("#tryAnother", 1, {autoAlpha:1});
	// document.getElementById('tryAnother').classList.add('dNone');
	// document.getElementById('tryAnother').classList.remove('dFlex');
	// TweenMax.to("#goNext", 1, {autoAlpha:1});
	// document.getElementById('goNext').classList.add('dNone');
	// document.getElementById('goNext').classList.remove('dFlex');




	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInCar.x, y: cameraInCar.y, z: cameraInCar.z, ease: Power2.easeOut});

	controls.enabled = true;
	controls.target.set( cameraInCarLook.x, cameraInCarLook.y, cameraInCarLook.z );

	makeBlur();
	success();

});



nav4.addEventListener('click', function() {

	TweenMax.to("#nav", 1, {autoAlpha:1});
	TweenMax.to("#butt1", 1, {autoAlpha:0});

// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	
// Page 2

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:1});

// Page 4

	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5



// Page 6

	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});

// Nav



// Change Camera

	


	if ( mainCanvas[0].classList.contains('blurIn') == false || mainCanvas[0].classList.contains('blurOut') == true ) {
		
		mainCanvas[0].classList.remove('blurIn');
		mainCanvas[0].classList.add('blurOut');

	} else {

		console.log('do nothing');

	}

	TweenMax.to("#youStopped", 1, {autoAlpha:0});
	
	controls.enabled = true;
	controls.target.set( 0, 0, 0 );
	TweenMax.to(camera.position, 3, {x: -50, y: 32, z: 0, ease: Power2.easeOut});


});


nav5.addEventListener('click', function() {

	TweenMax.to("#nav", 1, {autoAlpha:1});
	TweenMax.to("#butt1", 1, {autoAlpha:0});

// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:0});

// Page 2

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#share", 1, {autoAlpha:1});
	TweenMax.to("#subscribe", 1, {autoAlpha:1});
	TweenMax.to("#learn", 1, {autoAlpha:1});


	if ( mainCanvas[0].classList.contains('blurIn') == true || mainCanvas[0].classList.contains('blurOut') == true ) {
		
		mainCanvas[0].classList.remove('blurIn');
		mainCanvas[0].classList.add('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );
	TweenMax.to(camera.position, 3, {x: -50, y: 32, z: 0, ease: Power2.easeOut});
	controls.enabled = true;


});




document.getElementById('sayNo').addEventListener('click', function(e) {

	e.preventDefault();
	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:1});

	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[3].className += " navButtonHere";

	if ( mainCanvas[0].classList.contains('blurIn') == false || mainCanvas[0].classList.contains('blurOut') == true ) {
		
		mainCanvas[0].classList.remove('blurIn');
		mainCanvas[0].classList.add('blurOut');

	} else {

		console.log('do nothing');

	}

});








document.getElementById('sayYes').addEventListener('click', function(e) {

	e.preventDefault();

	TweenMax.to("#nav", 1, {autoAlpha:1});
	TweenMax.to("#butt1", 1, {autoAlpha:0});


// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	
// Page 2

	TweenMax.to("#mainTwo", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#mainFour", 1, {autoAlpha:1, delay: 1});

// Page 5

	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});

// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5 ], 1, {autoAlpha:0, delay: 3});

// Change Camera



	// heyLady.position.set( 0, 0, 0 );
	TweenMax.to("#youStopped", 1, {autoAlpha:1});
	document.getElementById('youStopped').classList.add('dNone');
	document.getElementById('youStopped').classList.remove('dFlex');
	TweenMax.to("#tryAnother", 1, {autoAlpha:1});
	document.getElementById('tryAnother').classList.add('dNone');
	document.getElementById('tryAnother').classList.remove('dFlex');
	TweenMax.to("#goNext", 1, {autoAlpha:1});
	document.getElementById('goNext').classList.add('dNone');
	document.getElementById('goNext').classList.remove('dFlex');
	
});



document.getElementById('sayYes2').addEventListener('click', function(e) {


	e.preventDefault();





	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[2].className += " navButtonHere";

	TweenMax.to("#youStopped", 1, {autoAlpha:0});

	controls.enabled = true;

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: -0.9, y: 0.8125, z: -10.4, ease: Power2.easeOut});
	controls.target.set( -0.5, 0.8125, 10.4 );


	TweenMax.to("#mainTwo", 1, {autoAlpha:1, delay: 3});



});















document.getElementById('nextPage').addEventListener('click', function() {

	TweenMax.to("#nav", 1, {autoAlpha:1});


// Page 1

	TweenMax.to("#mainOne", 1, {autoAlpha:0});
	
// Page 2

	if ( mainTwo.style.visibility == 'visible' && mainTwo.style.opacity == 1 ) {

		TweenMax.to("#mainTwo", 1, {autoAlpha:0});

	} 

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:1});

// Page 4

	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5



// Page 6

	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});

// Nav



// Change Camera

	


	if ( mainCanvas[0].classList.contains('blurIn') == false || mainCanvas[0].classList.contains('blurOut') == true ) {
		
		mainCanvas[0].classList.remove('blurIn');
		mainCanvas[0].classList.add('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );
	TweenMax.to(camera.position, 3, {x: -50, y: 32, z: 0, ease: Power2.easeOut});
	controls.enabled = true;


	TweenMax.to("#youStopped", 1, {autoAlpha:0});

	current[0].className = current[0].className.replace(" navButtonHere", "");
	btns[3].className += " navButtonHere";


});









