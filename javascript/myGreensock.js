var camera;
var cameraInCar, cameraInCarLook;
var controls;

var nav1 = document.getElementsByClassName('navButton')[0];
var nav2 = document.getElementsByClassName('navButton')[1];
var nav3 = document.getElementsByClassName('navButton')[2];
var nav4 = document.getElementsByClassName('navButton')[3];
var nav5 = document.getElementsByClassName('navButton')[4];
var nav6 = document.getElementsByClassName('navButton')[5];




// Navigation
var nav = document.getElementById("nav");

function navigation() {

	var btns = nav.getElementsByClassName("navButton");

	for (var i = 0; i < btns.length; i++) {

		btns[i].addEventListener("click", function() {

		    var current = document.getElementsByClassName("navButtonHere");

		    current[0].className = current[0].className.replace(" navButtonHere", "");

		    this.className += " navButtonHere";

		    console.log(this.innerText);

		});
	}
};

navigation();


nav1.addEventListener('click', function() {

// Page 1

	TweenMax.to("#introTextSm", 1, {autoAlpha:1});
	TweenMax.to("#introTextLg", 1, {autoAlpha:1});

// Page 2

	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});
	TweenMax.to("#mainSix", 1, {autoAlpha:0});


	// if ( document.getElementsByTagName('canvas')[0].classList.contains(); ) {

	// 	document.getElementsByTagName('canvas')[0].classList.remove('blurIn');
	// 	document.getElementsByTagName('canvas')[0].classList.add('blurOut');

	// } 



	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == true || document.getElementsByTagName('canvas')[0].classList.contains('blurOut') == true ) {
		
		document.getElementsByTagName('canvas')[0].classList.remove('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );

	TweenMax.to(scene.position, 3, {y: -30, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: -50, y: -30, z: -40, ease: Power2.easeOut});

});

nav2.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to("#wantToTry", 1, {autoAlpha:1});
	TweenMax.to("#sorry", 1, {autoAlpha:1});
	TweenMax.to("#mainTwo", 1, {autoAlpha:1});

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});
	TweenMax.to("#mainSix", 1, {autoAlpha:0});



	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == true || document.getElementsByTagName('canvas')[0].classList.contains('blurOut') == true ) {
		
		document.getElementsByTagName('canvas')[0].classList.remove('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: -20, y: 6, z: 0, ease: Power2.easeOut});


});



nav3.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:1, delay: 3});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});
	TweenMax.to("#mainSix", 1, {autoAlpha:0});

// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5, nav6 ], 1, {autoAlpha:0, delay: 3});

// Change Camera

	
	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: cameraInCar.x, y: cameraInCar.y, z: cameraInCar.z, ease: Power2.easeOut});

	controls.target.set( cameraInCarLook.x, player.height, cameraInCarLook.z );
	// camera.lookAt(new THREE.Vector3( cameraInCarLook.x, player.height, cameraInCarLook.z ));
	console.log( cameraInCarLook.x, cameraInCarLook.y, cameraInCarLook.z );

	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == false || document.getElementsByTagName('canvas')[0].classList.contains('blurOut') == true ) {
		
		document.getElementsByTagName('canvas')[0].classList.add('blurIn');
		document.getElementsByTagName('canvas')[0].classList.remove('blurOut');

	} else {

		console.log('do nothing');

	}




});










nav4.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:1});
	TweenMax.to("#mainFour", 1, {autoAlpha:1});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});
	TweenMax.to("#mainSix", 1, {autoAlpha:0});



	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == true || document.getElementsByTagName('canvas')[0].classList.contains('blurOut') == true ) {
		
		document.getElementsByTagName('canvas')[0].classList.remove('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );

	TweenMax.to(scene.position, 3, {y: -5, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: -20.5, y: -2.25, z: -6.5, ease: Power2.easeOut});

});


nav5.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:1});
	TweenMax.to("#mainFive", 1, {autoAlpha:1});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});
	TweenMax.to("#mainSix", 1, {autoAlpha:0});



	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == true || document.getElementsByTagName('canvas')[0].classList.contains('blurOut') == true ) {
		
		document.getElementsByTagName('canvas')[0].classList.remove('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );

	TweenMax.to(scene.position, 3, {y: -5, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: -20.5, y: -2.25, z: -6.5, ease: Power2.easeOut});


});

nav6.addEventListener('click', function() {

// Page 1

	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});



// Page 2

	
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});
	TweenMax.to("#mainTwo", 1, {autoAlpha:0});


// Page 3

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});
	TweenMax.to("#mainFour", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});
	TweenMax.to("#mainFive", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:1});
	TweenMax.to("#share", 1, {autoAlpha:1});
	TweenMax.to("#subscribe", 1, {autoAlpha:1});
	TweenMax.to("#learn", 1, {autoAlpha:1});
	TweenMax.to("#mainSix", 1, {autoAlpha:1});	



	
	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == true || document.getElementsByTagName('canvas')[0].classList.contains('blurOut') == true ) {
		
		document.getElementsByTagName('canvas')[0].classList.remove('blurOut');

	} else {

		console.log('do nothing');

	}

	controls.target.set( 0, 0, 0 );

	TweenMax.to(scene.position, 3, {y: -10, ease: Power2.easeOut});
	TweenMax.to(camera.position, 3, {x: -27, y: 2, z: 0, ease: Power2.easeOut});


});




// function newCam () {

// 	controls.enablePan = false;
// 	controls.enableRotate = false;
// 	controls.enabled = false;

// };

// function oldCam () {

// 	controls.enablePan = true;
// 	controls.enableRotate = true;
// 	controls.enabled = true;

// };

document.getElementById('closeInstruct').addEventListener('click', function() {

	TweenMax.to("#mainThree", 1, {autoAlpha:0});

	if ( document.getElementsByTagName('canvas')[0].classList.contains('blurIn') == true ) {

		document.getElementsByTagName('canvas')[0].classList.remove('blurIn');
		document.getElementsByTagName('canvas')[0].classList.add('blurOut');	

	} else {

		console.log('do nothing');

	}


	// Nav

	TweenMax.to([ nav1, nav2, nav3, nav4, nav5, nav6 ], 1, {autoAlpha:1});

});






