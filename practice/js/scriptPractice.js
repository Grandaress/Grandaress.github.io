$(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
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

    $('.project1').on({
        mouseover: function(){
            $('.desc1').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc1').removeClass('show-portfolio');
        },
    });

    $('.project2').on({
        mouseover: function(){
            $('.desc2').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc2').removeClass('show-portfolio');
        },
    });

    $('.project3').on({
        mouseover: function(){
            $('.desc3').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc3').removeClass('show-portfolio');
        },
    });

    $('.project4').on({
        mouseover: function(){
            $('.desc4').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc4').removeClass('show-portfolio');
        },
    });

    $('.project5').on({
        mouseover: function(){
            $('.desc5').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc5').removeClass('show-portfolio');
        },
    });

    $('.project6').on({
        mouseover: function(){
            $('.desc6').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc6').removeClass('show-portfolio');
        },
    });

    $('.project7').on({
        mouseover: function(){
            $('.desc7').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc7').removeClass('show-portfolio');
        },
    });

    $('.project8').on({
        mouseover: function(){
            $('.desc8').addClass('show-portfolio');
        },
        mouseleave: function(){
            $('.desc8').removeClass('show-portfolio');
        },
    });

});