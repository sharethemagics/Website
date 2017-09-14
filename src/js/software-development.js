jQuery(function ($) {
    
    var hash = $(this).find('li.scroll.active a').attr('href');
    
    //Nav bar heading
    if (hash !== '#home') {
        $('header nav').addClass('inbody');
    } else {
        $('header nav').removeClass('inbody');
    }

    //Subpage header image height
    var slideHeight = ($(window).height()) / 2.8;
    $('.image-sub').css('height', slideHeight);
    $(window).resize(function () {
        'use strict',
        $('.image-sub').css('height', slideHeight);
    });

    //Mobile menu 
    $(document).ready(function () {
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