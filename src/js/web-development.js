jQuery(function ($) {
    var hash = $(this).find('li.scroll.active a').attr('href');
    console.log("in web dev");
    if (hash !== '#home') {
        $('header nav').addClass('inbody');
    } else {
        $('header nav').removeClass('inbody');
    }
    var slideHeight = ($(window).height())/2;
	$('.image-sub').css('height',slideHeight);
	$(window).resize(function(){'use strict',
		$('.image-sub').css('height',slideHeight);
	});
    $(".nav > li:has(ul)").addClass("drop fadeInUp");
	$(".nav > li.drop > ul").addClass("dropdown fadeInUp");
    $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown fadeInUp");
    $(document).ready(function(){
        $('.wpb-mobile-menu').slicknav({
          prependTo: '.navbar-header',
          parentTag: 'jobs',
                allowParentLinks: true,
            
          duplicate: true,
          label: '',
          closedSymbol: '<i class="fa fa-angle-right"></i>',
          openedSymbol: '<i class="fa fa-angle-down"></i>',
        });
        });
});