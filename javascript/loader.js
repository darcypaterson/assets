  	var width = 100, // width of a progress bar in percentage
    perfData = window.performance.timing, // The PerformanceTiming interface
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
    time = parseInt((EstimatedTime/1000)%60)*100; //Converting EstimatedTime from miliseconds to seconds.


    // Loadbar Animation
	$(".loadbar").animate({
	  width: width + "%"
	}, time);




	// Percentage Increment Animation
	var PercentageID = $("#precent"),
	        start = 0,
	        end = 100,
	        durataion = time;
	        animateValue(PercentageID, start, end, durataion);

	function animateValue(id, start, end, duration) {

	    var range = end - start,
	      current = start,
	      increment = end > start? 1 : -1,
	      stepTime = Math.abs(Math.floor(duration / range)),
	      obj = $(id);

	    var timer = setInterval(function() {
	        current += increment;
	        $(obj).text(current + "%");
	      //obj.innerHTML = current;
	        if (current == end) {
	            clearInterval(timer);
	        }
	    }, stepTime);

	}

	    

setTimeout( function() {

	$('#loadContainer').fadeOut(300);

}, time);



