jQuery(function($) {
	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
		
	
	});
	
	//smooth sroll
	$("a").on('click', function(event) {
		
				// Make sure this.hash has a value before overriding default behavior
				if (this.hash !== "") {
					// Prevent default anchor click behavior
					event.preventDefault();
		
					// Store hash
					var hash = this.hash;
		
					// Using jQuery's animate() method to add smooth page scroll
					// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
					$('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 800, function(){
			 
						// Add hash (#) to URL when done scrolling (default click behavior)
						window.location.hash = hash;
					});
				} // End if
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);
	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	

var topoffset = 50;
  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar-fixed-top',
	offset: topoffset
  });
	
// add inbody class for navbar
var hash = $(this).find('li.scroll.active a').attr('href');

if(hash !== '#home') {
  $('header nav').addClass('inbody');
} else {
  $('header nav').removeClass('inbody');
}


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
	var hash = $(this).find('li.active a').attr('href');
	
    if(hash !== '#home') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
	});
	

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		var senderName = $('input[name=name]').val();
		var senderEmail = $('input[name=email]').val();
		var senderSubject = $('input[name=subject]').val();
		var senderMessage = $('textarea[name=message]').val();
		
		$.ajax({
			url: $(this).attr('action'),
			type:'POST',
			data: {name:senderName , email:senderEmail , message:senderMessage , subject:senderSubject },
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	//Google Map
	

	
	new WOW().init();
});

