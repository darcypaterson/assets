// Navigation
var nav = document.getElementById("nav");
var navButton = document.getElementsByClassName('navButton');
var grid = document.getElementById("grid");
var canvas = document.getElementsByTagName('canvas')[0];

grid.addEventListener('mousedown', function(e) {

	e.preventDefault();

	document.getElementById('mouse').classList.add('dNone');
	document.getElementById('mouse').classList.remove('dFlex');

	navButton[0].classList.remove('dNone');
	navButton[1].classList.remove('dNone');
	navButton[2].classList.remove('dNone');
	navButton[3].classList.remove('dNone');
	navButton[4].classList.remove('dNone');
	navButton[5].classList.remove('dNone');

	navButton[0].classList.add('dFlex');
	navButton[1].classList.add('dFlex');
	navButton[2].classList.add('dFlex');
	navButton[3].classList.add('dFlex');
	navButton[4].classList.add('dFlex');
	navButton[5].classList.add('dFlex');

	navButton[0].classList.add('fadeIn');
	navButton[1].classList.add('fadeInTwo');
	navButton[2].classList.add('fadeInThree');
	navButton[3].classList.add('fadeInFour');
	navButton[4].classList.add('fadeInFive');


});




// navButton[0].addEventListener('click', function() {

// 	document.getElementById('introTextSm')classList.add('dBlock');
// 	document.getElementById('introTextLg')classList.add('dBlock');
// 	document.getElementById('introTextSm')classList.remove('dNone');
// 	document.getElementById('introTextLg')classList.remove('dNone');

// 	document.getElementById('scene2Text')classList.add('dNone');
// 	document.getElementById('scene2Button')classList.add('dNone');
// 	document.getElementById('scene2Text')classList.remove('dBlock');
// 	document.getElementById('scene2Button')classList.remove('dBlock');

// });


navButton[1].addEventListener('click', function() {

	document.getElementById('introTextSm').classList.remove('dBlock');
	document.getElementById('introTextLg').classList.remove('dBlock');
	document.getElementById('introTextSm').classList.add('dNone');
	document.getElementById('introTextLg').classList.add('dNone');

	document.getElementById('scene2Text').classList.remove('dNone');
	document.getElementById('scene2Button').classList.remove('dNone');
	document.getElementById('scene2Text').classList.add('dBlock');
	document.getElementById('scene2Button').classList.add('dBlock');

});

// grid.addEventListener('mousedown', function(e) {


// 	e.preventDefault();

// 	navButton[0].classList.remove('dNone');
// 	navButton[1].classList.remove('dNone');
// 	navButton[2].classList.remove('dNone');
// 	navButton[3].classList.remove('dNone');
// 	navButton[4].classList.remove('dNone');
// 	navButton[5].classList.remove('dNone');

// 	navButton[0].classList.add('dFlex');
// 	navButton[1].classList.add('dFlex');
// 	navButton[2].classList.add('dFlex');
// 	navButton[3].classList.add('dFlex');
// 	navButton[4].classList.add('dFlex');
// 	navButton[5].classList.add('dFlex');

// 	navButton[0].classList.add('fadeIn');
// 	navButton[1].classList.add('fadeInTwo');
// 	navButton[2].classList.add('fadeInThree');
// 	navButton[3].classList.add('fadeInFour');
// 	navButton[4].classList.add('fadeInFive');
// 	navButton[5].classList.add('fadeInSix');

// });