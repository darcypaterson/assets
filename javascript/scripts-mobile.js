// Navigation
var nav = document.getElementById("nav");

// Page One
var pageOne = document.getElementsByClassName('pageOne');
var spot = document.getElementById('spot');
var spotLink = document.getElementById('spotLink');

// Page Two
var wantToTry = document.getElementById('wantToTry');
var sayYesOne = document.getElementById('sayYes');

// Page Three
var intersctionImg = document.getElementById("intersection");
var bigI = document.getElementById('bigI');
var instructions = document.getElementById('instructions');

// Page Four
var wantToTry4 = document.getElementById('wantToTry4');
var sayYesTwo = document.getElementById('sayYesTwo');
var arrow = document.getElementById('arrow');

// Page Five
var wantToTry5 = document.getElementById('wantToTry5');

// Page Six
var logo = document.getElementById('logo');
var share = document.getElementById('share');
var subscribe = document.getElementById('subscribe');
var learn = document.getElementById('learn');

// Choose No (on Pages Two and Four)
var noButton = document.getElementById('noButton');
var sorry = document.getElementById('sorry');

// Elements to Show or Hide on the Pages
var pageOneElements = [pageOne[0], pageOne[1], spotLink];
var pageTwoElements = [wantToTry];
var pageThreeElements = [intersctionImg, instructions, bigI];
var pageFourElements = [wantToTry4];
var pageFiveElements = [wantToTry5];
var pageSixElements = [logo, share, subscribe, learn];


// !!!!!!  Initial State of site   !!!!!!

// nav
nav.style.display = 'flex';


// PAGE 1

// pageOne[0].classList.add('dBlock');

// if (pageOne[0].classList.contains('dBlock') && window.innerWidth >= 1025) {

// 	nav.classList.add('dNone');


// } 

// PAGE 2

wantToTry.style.display = 'none';

// PAGE 3

for (var i = 0; i < pageThreeElements.length; i++) {
	pageThreeElements[i].style.display = 'none';
}

// PAGE 4

wantToTry4.style.display = 'none';

// PAGE 5

wantToTry5.style.display = 'none';

// PAGE 6

for (var i = 0; i < pageSixElements.length; i++) {
	pageSixElements[i].style.display = 'none';
}




// !!!!!!!  Links that lead to the next page but are not part of Main Navigation  !!!!!!! 
// Page One Link
spotLink.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[0].classList.remove('navButtonHere');		
	nav.getElementsByClassName('navButton')[1].classList.add('navButtonHere');

		// Page One
		for (var i = 0; i < pageOneElements.length; i++) {
			pageOneElements[i].style.display = 'none';
		}

		// Page Two
		wantToTry.style.display = 'flex';

});

// Page Two Link
sayYesOne.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[1].classList.remove('navButtonHere');	
	nav.getElementsByClassName('navButton')[2].classList.add('navButtonHere');


		// Page One
		for (var i = 0; i < pageOneElements.length; i++) {
			pageOneElements[i].style.display = 'none';
		}

		// Page Two
		wantToTry.style.display = 'none';

		// Page Three
		intersection.style.display = 'initial';
		bigI.style.display = 'initial';
		instructions.style.display = 'flex';

		// Page Four
		wantToTry4.style.display = 'none';

		// Page Five
		wantToTry5.style.display = 'none';

		// Page Six
		for (var i = 0; i < pageSixElements.length; i++) {
			pageSixElements[i].style.display = 'none';
		}


});

// Page Four Link
arrow.addEventListener('click', function(e) {

	e.preventDefault();
	nav.getElementsByClassName('navButton')[3].classList.remove('navButtonHere');	
	nav.getElementsByClassName('navButton')[4].classList.add('navButtonHere');

		// Page One
		for (var i = 0; i < pageOneElements.length; i++) {
			pageOneElements[i].style.display = 'none';
		}

		// Page Two
		wantToTry.style.display = 'none';

		// Page Three
		for (var i = 0; i < pageThreeElements.length; i++) {
			pageThreeElements[i].style.display = 'none';
		}

		// Page Four
		wantToTry4.style.display = 'none';

		// Page Five
		wantToTry5.style.display = 'flex';

		// Page Six
		for (var i = 0; i < pageSixElements.length; i++) {
			pageSixElements[i].style.display = 'none';
		}


});

// Page Five Link
sayYesTwo.addEventListener('click', function(e) {


	e.preventDefault();
	nav.getElementsByClassName('navButton')[4].classList.remove('navButtonHere');		
	nav.getElementsByClassName('navButton')[5].classList.add('navButtonHere');

		// Page One
		for (var i = 0; i < pageOneElements.length; i++) {
			pageOneElements[i].style.display = 'none';
		}

		// Page Two
		wantToTry.style.display = 'none';

		// Page Three
		for (var i = 0; i < pageThreeElements.length; i++) {
			pageThreeElements[i].style.display = 'none';
		}

		// Page Four
		wantToTry4.style.display = 'none';

		// Page Five
		wantToTry5.style.display = 'none';

		// Page Six
		for (var i = 0; i < pageSixElements.length; i++) {
			pageSixElements[i].style.display = 'flex';
		}

});






// Main Navigation
function navigation() {

	var btns = nav.getElementsByClassName("navButton");

	for (var i = 0; i < btns.length; i++) {

		btns[i].addEventListener("click", function() {

		    var current = document.getElementsByClassName("navButtonHere");

		    current[0].className = current[0].className.replace(" navButtonHere", "");

		    this.className += " navButtonHere";

		    // console.log(this.innerText);

		    if (this.innerText == '') {


				// Page One
				pageOne[0].style.display = 'block';
				pageOne[1].style.display = 'block';
				spotLink.style.display = 'inline-block';


				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}


		    }


		    if (this.innerText == 2) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'flex';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}
				
		    }

		    if (this.innerText == 3) {


				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				intersection.style.display = 'initial';
				bigI.style.display = 'initial';
				instructions.style.display = 'flex';

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}

				

		    }


		    if (this.innerText == 4) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'flex';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}
				
		    }


		    if (this.innerText == 5) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'flex';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}
				

		    }


		    if (this.innerText == 6) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'flex';
				}
	

		    }


		});

	}
}


navigation();


		var b = 0;

		var one = document.getElementsByClassName('gridContainer')[0];

			one.addEventListener("touchstart", startTouch, false);
			one.addEventListener("touchmove", moveTouch, false);



		// Swipe Up / Down / Left / Right
		var initialX = null;
		// var initialY = null;

		function startTouch(e) {
			initialX = e.touches[0].clientX;
			// initialY = e.touches[0].clientY;
		};

		function moveTouch(e) {
			if (initialX === null) {
				return;
			}

			// if (initialY === null) {
			// 	return;
			// }

			var currentX = e.touches[0].clientX;
			// var currentY = e.touches[0].clientY;

			var diffX = initialX - currentX;
			// var diffY = initialY - currentY;

			// > Math.abs(diffY)

			if (Math.abs(diffX)) {
			    // sliding horizontally
			    if (diffX > 0) {
			    // swiped left
			    console.log("swiped left");

				    if (b >= 0 && b <= 4) {

				    	b = b + 1;
						// h1.innerHTML = pagesNum[b];
					    console.log('b is' + b);

				    } else {

					    // h1.innerHTML = pagesNum[5];	
					    console.log('b is' + b);
				    	
				    }

				} else {
				    // swiped right
				    console.log("swiped right");

				    if (b <= 5 && b >= 1) {

					    b = b - 1;	
					    // h1.innerHTML = pagesNum[b];
				    	console.log('b is' + b);	


				    } else {

				    	// h1.innerHTML = pagesNum[0];
				    	console.log('b is' + b);

				    }

				} 

			// } else {

			    // sliding vertically
			    // if (diffY > 0) {
			    // swiped up
			 //    console.log("swiped up");
				// } else {
				    // swiped down
				    // console.log("swiped down");
				// } 

			}

			initialX = null;
			// initialY = null;

			e.preventDefault();

			if (b == 0) {

				// Page One
				pageOne[0].style.display = 'block';
				pageOne[1].style.display = 'block';
				spotLink.style.display = 'inline-block';


				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}


			}

			if (b == 1) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'flex';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}


			}

			if (b == 2) {


				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				intersection.style.display = 'initial';
				bigI.style.display = 'initial';
				instructions.style.display = 'flex';

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}


			}

			if (b == 3) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'flex';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}


			}

			if (b == 4) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'flex';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'none';
				}


			}

			if (b == 5) {

				// Page One
				for (var i = 0; i < pageOneElements.length; i++) {
					pageOneElements[i].style.display = 'none';
				}

				// Page Two
				wantToTry.style.display = 'none';

				// Page Three
				for (var i = 0; i < pageThreeElements.length; i++) {
					pageThreeElements[i].style.display = 'none';
				}

				// Page Four
				wantToTry4.style.display = 'none';

				// Page Five
				wantToTry5.style.display = 'none';

				// Page Six
				for (var i = 0; i < pageSixElements.length; i++) {
					pageSixElements[i].style.display = 'flex';
				}


			}


		};



function chooseNo() {


	sorry.style.display = 'flex';

	document.getElementById("nav").style.opacity = 0.1;
	document.getElementById("nav").style.filter = "blur(2px)";
	document.getElementById("mainOne").style.filter = "blur(2px)";


	if (sorry.style.display == 'flex') {

		
		document.getElementsByClassName('checkClose')[0].addEventListener('click', function closeMe() {

			sorry.style.display = 'none';

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
	var fas = document.getElementsByClassName('fas')[4];




	function fadeOut(el){

		el.style.opacity = 1;
		fas.classList.remove('fa-times-circle');
		fas.classList.add('fa-info-circle');
		document.getElementsByTagName('h1')[6].innerText = "Instructions";
		document.getElementsByTagName('h1')[6].classList.remove('fadeIn');
		document.getElementById("nav").style.opacity = 1;
		document.getElementById("nav").style.filter = "blur(0)";
		intersctionImg.removeAttribute("class", "instructIntersect");
		btn.style.gridRow = "1 / 3";


		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = 'none';
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
			btn.style.gridRow = "8 / 9";


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



// document.getElementById('fullScreen').addEventListener('click', () => {

// 	if (screenfull.enabled && screenfull.isFullscreen !== true) {

// 		screenfull.request();
// 		document.getElementById('fullScreen').getElementsByTagName('a')[0].innerHTML = '<h5>Exit &nbsp;</h5><i class="fas fa-times"></i>';
	
// 	} else {

// 		screenfull.exit();
// 		document.getElementById('fullScreen').getElementsByTagName('a')[0].innerHTML = '<h5>Full Screen &nbsp;</h5><i class="fas fa-arrows-alt"></i>';

// 	}

// });






