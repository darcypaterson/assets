// make page transition

// function setAtt() {

// 	document.getElementById('mainOne').setAttribute("class", "demoClass");
// };


// function changeBG() {

// 	document.getElementsByTagName('body')[0].setAttribute("class", "pageTran");

// };


// window.onload = changeBG;


function navigation() {

	
	// make navigation

	var nav = document.getElementById("nav");

	var btns = nav.getElementsByClassName("navButton");

	for (var i = 0; i < btns.length; i++) {

	  btns[i].addEventListener("click", function() {

	    var current = document.getElementsByClassName("navButtonHere");

	    current[0].className = current[0].className.replace(" navButtonHere", "");

	    this.className += " navButtonHere";

	  });
	}


}





var noButton = document.getElementById('noButton');
var sorry = document.getElementById('sorry');




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









function instructions() {


	var btn = document.querySelector('#bigI');
	var el = document.querySelector('#instructContain');
	var faCircle = document.querySelector('.fa-info-circle');
	var faClose = document.querySelector('.fa-times-circle');
	var fas = document.getElementsByClassName('fas')[1];
	var steps = document.getElementsByClassName('steps');

	// fade out

	function fadeOut(el){
		el.style.opacity = 1;
		fas.classList.remove('fa-times-circle');
		fas.classList.add('fa-info-circle');
		document.getElementsByTagName('h1')[1].innerText = "Instructions";
		document.getElementsByTagName('h1')[1].classList.remove('fadeIn');
		document.getElementById("nav").style.opacity = 1;
		document.getElementById("nav").style.filter = "blur(0)";
		document.getElementById("intersection").removeAttribute("class", "instructIntersect");


		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = 'none';
				el.classList.add('instructCont');
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}

	// fade in

	function fadeIn(el, display){

		if (el.classList.contains('instructCont')) {
			el.classList.remove('instructCont');
			faCircle.classList.remove('fa-info-circle');
			fas.classList.add('fa-times-circle');
			document.getElementsByTagName('h1')[1].innerText = "Close";
			document.getElementsByTagName('h1')[1].classList.add('fadeIn');
			document.getElementById("nav").style.opacity = 0.1;
			document.getElementById("nav").style.filter = "blur(2px)";
			document.getElementById("intersection").setAttribute("class", "instructIntersect");


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







