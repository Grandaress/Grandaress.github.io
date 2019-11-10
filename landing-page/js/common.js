$(function() {

    // Store

	$('.fa-angle-right').click(function(){
	   $('.cloth-menu').toggleClass('show');
    });

	$('.fa-angle-right').click(function(){
		$(this).toggleClass('toggleAngle');
	});

    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu-block').toggleClass('vis');
    });

    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $('.menu-block').fadeToggle(500);
    });

    // APPLIC

    $('.new-shadow').click(function(e) {
        e.preventDefault();
        $(".popup").addClass('show');
    });

    $('.popup__close').click(function(e) {
        e.preventDefault();
        $('.popup').removeClass('show');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});
