jQuery(document).ready(function($){


	function decodeText(){

	    // get nodelist
	    var text = document.getElementsByClassName('decode-text')[0];

	    // console.log(text);
	    // console.log(text.children.length);

	    // assign the placeholder array its places
	    var state = [];
	    for(var i = 0, j = text.children.length; i < j; i++ ){
	        state[i] = i;
	    }

	    // shuffle the array places to get randomness
	    var shuffled = shuffle(state);

	    for(var i = 0, j = shuffled.length; i < j; i++ ){

	        var child = text.children[shuffled[i]];
	        classes = child.classList;

	        // fire the first one at random times
	        var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
	        if(classes.contains('text-animation')){ 
	            setTimeout(firstStages.bind(null, child), state1Time);
	        }
	    }

	}

	// send the node for later .state changes
	function firstStages(child){
	    if( child.classList.contains('state-2') ){   
	        child.classList.add('state-3');
	    } else if( child.classList.contains('state-1') ){
	        child.classList.add('state-2')
	    } else if( !child.classList.contains('state-1') ){
	        child.classList.add('state-1');
	        setTimeout(secondStages.bind(null, child), 100);
	    }    
	}
	function secondStages(child){
	    if( child.classList.contains('state-1') ){
	        child.classList.add('state-2')
	        setTimeout(thirdStages.bind(null, child), 100);
	    } 
	    else if( !child.classList.contains('state-1') )
	    {
	        child.classList.add('state-1')
	    }
	}
	function thirdStages(child){
	    if( child.classList.contains('state-2') ){
	        child.classList.add('state-3')
	    }

	}


	function shuffle(array) {

	    var currentIndex = array.length, temporaryValue, randomIndex;

	    // While there remain elements to shuffle...
	    while (0 !== currentIndex) {

	        // Pick a remaining element...
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;

	        // And swap it with the current element.
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    }
	    return array;
	}

	decodeText();


	//Navbar 
	/* Using jQuery (optional) */

	/* fixed navbar on scroll */
	var stickyNavTop = $('#navbar').offset().top;
	$(window).on('scroll', function() {
	  if ($(window).scrollTop() > stickyNavTop) {
	    $('#navbar').addClass('fixed');
	  } else {
	    $('#navbar').removeClass('fixed');
	  } 
	});

	/* smooth scroll anchor */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').on('click', function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length && $(this).attr('href') != '#top') {
	        $('#navbar').addClass('fixed');
	        $('html, body').animate({
	          scrollTop: target.offset().top - 50
	        }, 200);
	        console.log($('#navbar').height());
	        return false;
	      }
	    }
	  });
	});

});