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

// var dNone = className += ' dNone';
// var dFlex = className += ' dFlex';
// var dInitial = className += ' dInitial';
// var dInBlock = className += ' dInBlock';
// var dBlock = className += ' dBlock';



// nav
nav.setAttribute('class','dNone');
// nav.className += ' dNone';



// PAGE 1


// PAGE 2

wantToTry.className += ' dNone';

// PAGE 3

intersctionImg.className += ' dNone';
instructions.className += ' dNone';
bigI.className += ' dNone';

// PAGE 4

wantToTry4.className += ' dNone';

// PAGE 5

wantToTry5.className += ' dNone';

// PAGE 6

logo.className += ' dNone';
share.className += ' dNone';
subscribe.className += ' dNone';
learn.className += ' dNone';






spotLink.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[0].className -= ' navButtonHere';		
	nav.getElementsByClassName('navButton')[1].className += ' navButtonHere';

		nav.className += ' dFlex';

		pageOne[0].className += ' dNone';
		pageOne[1].className += ' dNone';
		spotLink.className += ' dNone';

		wantToTry.className += ' dFlex';

		intersection.className += ' dNone';
		bigI.className += ' dNone';
		instructions.className += ' dNone';

		wantToTry4.className += ' dNone';

		wantToTry5.className += ' dNone';

		logo.className += ' dNone';
		share.className += ' dNone';
		subscribe.className += ' dNone';
		learn.className += ' dNone';
	
});


sayYesOne.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[1].className -= ' navButtonHere';	
	nav.getElementsByClassName('navButton')[2].className += ' navButtonHere';

		nav.className += ' dFlex';

		pageOne[0].className += ' dNone';
		pageOne[1].className += ' dNone';
		spotLink.className += ' dNone';

		wantToTry.className += ' dNone';

		intersection.className += ' dInitial';
		bigI.className += ' dFlex';
		instructions.className += ' dFlex';

		wantToTry4.className += ' dNone';

		wantToTry5.className += ' dNone';

		logo.className += ' dNone';
		share.className += ' dNone';
		subscribe.className += ' dNone';
		learn.className += ' dNone';

});


arrow.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[3].className -= ' navButtonHere';	
	nav.getElementsByClassName('navButton')[4].className += ' navButtonHere';

		pageOne[0].className += ' dNone';
		pageOne[1].className += ' dNone';
		spotLink.className += ' dNone';

		wantToTry.className += ' dNone';

		intersection.className += ' dNone';
		bigI.className += ' dNone';
		instructions.className += ' dNone';

		wantToTry4.className += ' dNone';

		wantToTry5.className += ' dFlex';

		logo.className += ' dNone';
		share.className += ' dNone';
		subscribe.className += ' dNone';
		learn.className += ' dNone';


});


sayYesTwo.addEventListener('click', function(e) {


	e.preventDefault();
	nav.getElementsByClassName('navButton')[4].className -= ' navButtonHere';		
	nav.getElementsByClassName('navButton')[5].className += ' navButtonHere';

		pageOne[0].className += ' dNone';
		pageOne[1].className += ' dNone';
		spotLink.className += ' dNone';

		wantToTry.className += ' dNone';

		intersection.className += ' dNone';
		bigI.className += ' dNone';
		instructions.className += ' dNone';

		wantToTry4.className += ' dNone';

		wantToTry5.className += ' dNone';

		logo.className += ' dFlex';
		share.className += ' dFlex';
		subscribe.className += ' dFlex';
		learn.className += ' dFlex';

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
			nav.className += ' dFlex';
			// Page One
			pageOne[0].className += ' dBlock';
			pageOne[1].className += ' dBlock';
			spotLink.className += ' dInBlock';
			// Page Two
			wantToTry.className += ' dNone';
			// Page Three
			intersection.className += ' dNone';
			bigI.className += ' dNone';
			instructions.className += ' dNone';
			// Page Four
			wantToTry4.className += ' dNone';
			// Page Five
			wantToTry5.className += ' dNone';
			// Page Six
			logo.className += ' dNone';
			share.className += ' dNone';
			subscribe.className += ' dNone';
			learn.className += ' dNone';


	    }


	    if (this.innerText == 2) {

			nav.className += ' dFlex';

			pageOne[0].className += ' dNone';
			pageOne[1].className += ' dNone';
			spotLink.className += ' dNone';

			wantToTry.className += ' dFlex';

			intersection.className += ' dNone';
			bigI.className += ' dNone';
			instructions.className += ' dNone';

			wantToTry4.className += ' dNone';

			wantToTry5.className += ' dNone';

			logo.className += ' dNone';
			share.className += ' dNone';
			subscribe.className += ' dNone';
			learn.className += ' dNone';

	    }

	    if (this.innerText == 3) {

			nav.className += ' dFlex';

			pageOne[0].className += ' dNone';
			pageOne[1].className += ' dNone';
			spotLink.className += ' dNone';

			wantToTry.className += ' dNone';

			intersection.style.display = 'initial';
			bigI.className += ' dFlex';
			instructions.className += ' dFlex';

			wantToTry4.className += ' dNone';

			wantToTry5.className += ' dNone';

			logo.className += ' dNone';
			share.className += ' dNone';
			subscribe.className += ' dNone';
			learn.className += ' dNone';


	    }


	    if (this.innerText == 4) {

			nav.className += ' dFlex';

			pageOne[0].className += ' dNone';
			pageOne[1].className += ' dNone';
			spotLink.className += ' dNone';

			wantToTry.className += ' dNone';

			intersection.className += ' dNone';
			bigI.className += ' dNone';
			instructions.className += ' dNone';

			wantToTry4.className += ' dFlex';	

			wantToTry5.className += ' dNone';

			logo.className += ' dNone';
			share.className += ' dNone';
			subscribe.className += ' dNone';
			learn.className += ' dNone';

	    }


	    if (this.innerText == 5) {

			nav.className += ' dFlex';

			pageOne[0].className += ' dNone';
			pageOne[1].className += ' dNone';
			spotLink.className += ' dNone';

			wantToTry.className += ' dNone';

			intersection.className += ' dNone';
			bigI.className += ' dNone';
			instructions.className += ' dNone';

			wantToTry4.className += ' dNone';

			wantToTry5.className += ' dFlex';

			logo.className += ' dNone';
			share.className += ' dNone';
			subscribe.className += ' dNone';
			learn.className += ' dNone';


	    }


	    if (this.innerText == 6) {

			nav.className += ' dFlex';

			pageOne[0].className += ' dNone';
			pageOne[1].className += ' dNone';
			spotLink.className += ' dNone';

			wantToTry.className += ' dNone';


			intersection.className += ' dNone';
			bigI.className += ' dNone';
			instructions.className += ' dNone';

			wantToTry4.className += ' dNone';

			wantToTry5.className += ' dNone';

			logo.className += ' dFlex';
			share.className += ' dFlex';
			subscribe.className += ' dFlex';
			learn.className += ' dFlex';

	    }


	  });
	}


}

navigation();






function chooseNo() {

	sorry.className += ' dFlex';

	document.getElementById("nav").style.opacity = 0.1;
	document.getElementById("nav").style.filter = "blur(2px)";
	document.getElementById("mainOne").style.filter = "blur(2px)";


	if (sorry.style.display == 'flex') {

		
		document.getElementsByClassName('checkClose')[0].addEventListener('click', function closeMe() {

			sorry.className += ' dNone';

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
		fas.className += ' fa-info-circle';
		document.getElementsByTagName('h1')[6].innerText = "Instructions";
		document.getElementsByTagName('h1')[6].classList.remove('fadeIn');
		document.getElementById("nav").style.opacity = 1;
		document.getElementById("nav").style.filter = "blur(0)";
		intersctionImg.removeAttribute("class", "instructIntersect");


		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.className += ' dNone';
				el.className += ' instructCont';
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}



	function fadeIn(el, display){

		if (el.classList.contains('instructCont')) {
			el.classList.remove('instructCont');
			faCircle.classList.remove('fa-info-circle');
			fas.className += ' fa-times-circle';
			document.getElementsByTagName('h1')[6].innerText = "Close";
			document.getElementsByTagName('h1')[6].className += ' fadeIn';
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


function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}

if (GetIEVersion() > 0) 
   alert("This is IE " + GetIEVersion());
else 
   alert("This is not IE.");




// document.getElementById('fullScreen').addEventListener('click', () => {

// 	if (screenfull.enabled && screenfull.isFullscreen !== true) {

// 		screenfull.request();
// 		document.getElementById('fullScreen').getElementsByTagName('a')[0].innerHTML = '<h5>Exit &nbsp;</h5><i class="fas fa-times"></i>';
	
// 	} else {

// 		screenfull.exit();
// 		document.getElementById('fullScreen').getElementsByTagName('a')[0].innerHTML = '<h5>Full Screen &nbsp;</h5><i class="fas fa-arrows-alt"></i>';

// 	}


// });




