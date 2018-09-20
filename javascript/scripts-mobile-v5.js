// Navigation
var nav = document.getElementById("nav");
var navButton = document.getElementsByClassName('navButton');
var grid = document.getElementById("grid");
var canvas = document.getElementsByTagName('canvas')[0];



navButton[0].addEventListener('click', function() {

	document.getElementById('introTextSm').add('dBlock');
	document.getElementById('introTextLg').add('dBlock');
	document.getElementById('introTextSm').remove('dNone');
	document.getElementById('introTextLg').remove('dNone');

	document.getElementById('scene2Text').add('dNone');
	document.getElementById('scene2Button').add('dNone');
	document.getElementById('scene2Text').remove('dBlock');
	document.getElementById('scene2Button').remove('dBlock');

});


navButton[1].addEventListener('click', function() {

	document.getElementById('introTextSm').remove('dBlock');
	document.getElementById('introTextLg').remove('dBlock');
	document.getElementById('introTextSm').add('dNone');
	document.getElementById('introTextLg').add('dNone');

	document.getElementById('scene2Text').remove('dNone');
	document.getElementById('scene2Button').remove('dNone');
	document.getElementById('scene2Text').add('dBlock');
	document.getElementById('scene2Button').add('dBlock');

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