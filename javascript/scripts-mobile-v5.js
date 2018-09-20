// Navigation
var nav = document.getElementById("nav");
var navButton = document.getElementsByClassName('navButton');
var grid = document.getElementById("grid");
var canvas = document.getElementsByTagName('canvas')[0];



grid.addEventListener('mousedown', function(e) {


	e.preventDefault();

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
	navButton[5].classList.add('fadeInSix');

});