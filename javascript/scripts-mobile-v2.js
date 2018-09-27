var nav = document.getElementById("nav");

var pageOne = document.getElementsByClassName('pageOne');
var wantToTry = document.getElementById('wantToTry');
var wantToTry4 = document.getElementById('wantToTry4');
var wantToTry5 = document.getElementById('wantToTry5');
var intersctionImg = document.getElementById("intersection");
var bigI = document.getElementById('bigI');
var instructions = document.getElementById('instructions');

var logo = document.getElementById('logo');
var mainLast = document.getElementById('mainLast');
var share = document.getElementById('share');
var subscribe = document.getElementById('subscribe');
var learn = document.getElementById('learn');

var spot = document.getElementById('spot');
var spotLink = document.getElementById('spotLink');

var noButton = document.getElementById('noButton');
var sorry = document.getElementById('sorry');

var sayYesOne = document.getElementById('sayYes');
var sayYesTwo = document.getElementById('sayYesTwo');

var arrow = document.getElementById('arrow');

// var dNone = classList.add('dNone');
// var dFlex = classList.add('dFlex');
// var dInitial = classList.add('dInitial');
// var dInBlock = classList.add('dInBlock');
// var dBlock = classList.add('dBlock');



// nav
nav.classList.add('dNone');


// PAGE 1


// PAGE 2

wantToTry.classList.add('dNone');

// PAGE 3

intersctionImg.classList.add('dNone');
instructions.classList.add('dNone');
bigI.classList.add('dNone');

// PAGE 4

wantToTry4.classList.add('dNone');

// PAGE 5

wantToTry5.classList.add('dNone');

// PAGE 6

logo.classList.add('dNone');
share.classList.add('dNone');
subscribe.classList.add('dNone');
learn.classList.add('dNone');






spotLink.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[0].classList.remove('navButtonHere');		
	nav.getElementsByClassName('navButton')[1].classList.add('navButtonHere');

		nav.classList.add('dFlex');

		pageOne[0].classList.add('dNone');
		pageOne[1].classList.add('dNone');
		spotLink.classList.add('dNone');

		wantToTry.classList.add('dFlex');

		intersection.classList.add('dNone');
		bigI.classList.add('dNone');
		instructions.classList.add('dNone');

		wantToTry4.classList.add('dNone');

		wantToTry5.classList.add('dNone');

		logo.classList.add('dNone');
		share.classList.add('dNone');
		subscribe.classList.add('dNone');
		learn.classList.add('dNone');
	
});


sayYesOne.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[1].classList.remove('navButtonHere');	
	nav.getElementsByClassName('navButton')[2].classList.add('navButtonHere');

		nav.classList.add('dFlex');

		pageOne[0].classList.add('dNone');
		pageOne[1].classList.add('dNone');
		spotLink.classList.add('dNone');

		wantToTry.classList.add('dNone');

		intersection.classList.add('dInitial');
		bigI.classList.add('dFlex');
		instructions.classList.add('dFlex');

		wantToTry4.classList.add('dNone');

		wantToTry5.classList.add('dNone');

		logo.classList.add('dNone');
		share.classList.add('dNone');
		subscribe.classList.add('dNone');
		learn.classList.add('dNone');

});


arrow.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[3].classList.remove('navButtonHere');	
	nav.getElementsByClassName('navButton')[4].classList.add('navButtonHere');

		pageOne[0].classList.add('dNone');
		pageOne[1].classList.add('dNone');
		spotLink.classList.add('dNone');

		wantToTry.classList.add('dNone');

		intersection.classList.add('dNone');
		bigI.classList.add('dNone');
		instructions.classList.add('dNone');

		wantToTry4.classList.add('dNone');

		wantToTry5.classList.add('dFlex');

		logo.classList.add('dNone');
		share.classList.add('dNone');
		subscribe.classList.add('dNone');
		learn.classList.add('dNone');


});


sayYesTwo.addEventListener('click', function(e) {


	e.preventDefault();
	nav.getElementsByClassName('navButton')[4].classList.remove('navButtonHere');		
	nav.getElementsByClassName('navButton')[5].classList.add('navButtonHere');

		pageOne[0].classList.add('dNone');
		pageOne[1].classList.add('dNone');
		spotLink.classList.add('dNone');

		wantToTry.classList.add('dNone');

		intersection.classList.add('dNone');
		bigI.classList.add('dNone');
		instructions.classList.add('dNone');

		wantToTry4.classList.add('dNone');

		wantToTry5.classList.add('dNone');

		logo.classList.add('dFlex');
		share.classList.add('dFlex');
		subscribe.classList.add('dFlex');
		learn.classList.add('dFlex');

});




function navigation() {


	var btns = nav.getElementsByClassName("navButton");


	for (var i = 0; i < btns.length; i++) {

	  btns[i].addEventListener("click", function() {

	    var current = document.getElementsByClassName("navButtonHere");

	    current[0].className = current[0].className.replace(" navButtonHere", "");

	    this.className += " navButtonHere";

	    console.log(this.innerText);

	    if (this.innerText == '') {

			// Nav
			nav.classList.add('dFlex');
			// Page One
			pageOne[0].classList.add('dBlock');
			pageOne[1].classList.add('dBlock');
			spotLink.classList.add('dInBlock');
			// Page Two
			wantToTry.classList.add('dNone');
			// Page Three
			intersection.classList.add('dNone');
			bigI.classList.add('dNone');
			instructions.classList.add('dNone');
			// Page Four
			wantToTry4.classList.add('dNone');
			// Page Five
			wantToTry5.classList.add('dNone');
			// Page Six
			logo.classList.add('dNone');
			share.classList.add('dNone');
			subscribe.classList.add('dNone');
			learn.classList.add('dNone');


	    }


	    if (this.innerText == 2) {

			nav.classList.add('dFlex');

			pageOne[0].classList.add('dNone');
			pageOne[1].classList.add('dNone');
			spotLink.classList.add('dNone');

			wantToTry.classList.add('dFlex');

			intersection.classList.add('dNone');
			bigI.classList.add('dNone');
			instructions.classList.add('dNone');

			wantToTry4.classList.add('dNone');

			wantToTry5.classList.add('dNone');

			logo.classList.add('dNone');
			share.classList.add('dNone');
			subscribe.classList.add('dNone');
			learn.classList.add('dNone');

	    }

	    if (this.innerText == 3) {

			nav.classList.add('dFlex');

			pageOne[0].classList.add('dNone');
			pageOne[1].classList.add('dNone');
			spotLink.classList.add('dNone');

			wantToTry.classList.add('dNone');

			intersection.style.display = 'initial';
			bigI.classList.add('dFlex');
			instructions.classList.add('dFlex');

			wantToTry4.classList.add('dNone');

			wantToTry5.classList.add('dNone');

			logo.classList.add('dNone');
			share.classList.add('dNone');
			subscribe.classList.add('dNone');
			learn.classList.add('dNone');


	    }


	    if (this.innerText == 4) {

			nav.classList.add('dFlex');

			pageOne[0].classList.add('dNone');
			pageOne[1].classList.add('dNone');
			spotLink.classList.add('dNone');

			wantToTry.classList.add('dNone');

			intersection.classList.add('dNone');
			bigI.classList.add('dNone');
			instructions.classList.add('dNone');

			wantToTry4.classList.add('dFlex');	

			wantToTry5.classList.add('dNone');

			logo.classList.add('dNone');
			share.classList.add('dNone');
			subscribe.classList.add('dNone');
			learn.classList.add('dNone');

	    }


	    if (this.innerText == 5) {

			nav.classList.add('dFlex');

			pageOne[0].classList.add('dNone');
			pageOne[1].classList.add('dNone');
			spotLink.classList.add('dNone');

			wantToTry.classList.add('dNone');

			intersection.classList.add('dNone');
			bigI.classList.add('dNone');
			instructions.classList.add('dNone');

			wantToTry4.classList.add('dNone');

			wantToTry5.classList.add('dFlex');

			logo.classList.add('dNone');
			share.classList.add('dNone');
			subscribe.classList.add('dNone');
			learn.classList.add('dNone');


	    }


	    if (this.innerText == 6) {

			nav.classList.add('dFlex');

			pageOne[0].classList.add('dNone');
			pageOne[1].classList.add('dNone');
			spotLink.classList.add('dNone');

			wantToTry.classList.add('dNone');


			intersection.classList.add('dNone');
			bigI.classList.add('dNone');
			instructions.classList.add('dNone');

			wantToTry4.classList.add('dNone');

			wantToTry5.classList.add('dNone');

			logo.classList.add('dFlex');
			share.classList.add('dFlex');
			subscribe.classList.add('dFlex');
			learn.classList.add('dFlex');

	    }


	  });
	}


}

navigation();






function chooseNo() {

	sorry.classList.add('dFlex');

	document.getElementById("nav").style.opacity = 0.1;
	document.getElementById("nav").style.filter = "blur(2px)";
	document.getElementById("mainOne").style.filter = "blur(2px)";


	if (sorry.style.display == 'flex') {

		
		document.getElementsByClassName('checkClose')[0].addEventListener('click', function closeMe() {

			sorry.classList.add('dNone');

			document.getElementById("nav").style.opacity = 1;
			document.getElementById("nav").style.filter = "blur(0)";
			document.getElementById("mainOne").style.filter = "blur(0)";
	
		});

	}

}







function makeInstructions() {


	var btn = document.querySelector('#bigI');
	var el = document.querySelector('#instructContain');
	var faCircle = document.querySelector('.fa-info-circle');
	var faClose = document.querySelector('.fa-times-circle');
	var fas = document.getElementsByClassName('fas')[5];




	function fadeOut(el){

		el.style.opacity = 1;
		fas.classList.remove('fa-times-circle');
		fas.classList.add('fa-info-circle');
		document.getElementsByTagName('h1')[6].innerText = "Instructions";
		document.getElementsByTagName('h1')[6].classList.remove('fadeIn');
		document.getElementById("nav").style.opacity = 1;
		document.getElementById("nav").style.filter = "blur(0)";
		intersctionImg.removeAttribute("class", "instructIntersect");


		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.classList.add('dNone');
				el.classList.add('instructCont');
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}



	function fadeIn(el, display){

		if (el.classList.contains('instructCont')) {
			el.classList.remove('instructCont');
			faCircle.classList.remove('fa-info-circle');
			fas.classList.add('fa-times-circle');
			document.getElementsByTagName('h1')[6].innerText = "Close";
			document.getElementsByTagName('h1')[6].classList.add('fadeIn');
			document.getElementById("nav").style.opacity = 0.1;
			document.getElementById("nav").style.filter = "blur(2px)";
			intersctionImg.setAttribute("class", "instructIntersect");


		}


		el.style.opacity = 0;
		el.style.display = display || "flex";

		(function fade() {
			var val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}


	btn.addEventListener('click', function(e){

		if(el.classList.contains('instructCont')){
			fadeIn(el);

		}
		else {
			fadeOut(el);
		}
	});



}


makeInstructions();


document.getElementById('fullScreen').addEventListener('click', () => {

	if (screenfull.enabled && screenfull.isFullscreen !== true) {

		screenfull.request();
		document.getElementById('fullScreen').getElementsByTagName('a')[0].innerHTML = '<h5>Exit &nbsp;</h5><i class="fas fa-times"></i>';
	
	} else {

		screenfull.exit();
		document.getElementById('fullScreen').getElementsByTagName('a')[0].innerHTML = '<h5>Full Screen &nbsp;</h5><i class="fas fa-arrows-alt"></i>';

	}


});


