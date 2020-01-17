$(function() {
    $('.dropbtn, .arrow-down').click(function(e){
        e.preventDefault();
        $('.dropdown-content').toggleClass('show');
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1.2,
        center:true,
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

    $('.plus-icon').click(function(){
        if($(this).attr('src') === 'img/images/plus.png') {
            $(this).attr('src','img/images/minus.png');
        } else {
            $(this).attr('src','img/images/plus.png');
        }
    });

    $(".blog1").on({
        mouseenter: function(){
            $(this).css({
                "box-shadow":"inset 0 -50px 50px rgba(0,0,0,.6)",
                "transition":"all 1s ease"
            });
            $('.icons-blog1, .blog-tome1, .blog-text1').css({
                "visibility":"visible",
                "transition":"all 0.5s ease",
            });
        },
        mouseleave: function(){
            $(this).css({
                "box-shadow":"none",
                "transition":"all 1s ease"
            });
            $('.icons-blog1, .blog-tome1, .blog-text1').css({
                "visibility":"hidden",
                "transition":"all 0.3s ease",
            });
        },
    });

    $(".blog2").on({
        mouseenter: function(){
            $(this).css({
                "box-shadow":"inset 0 -50px 50px rgba(0,0,0,.6)",
                "transition":"all 1s ease",
            });
            $('.icons-blog2, .blog-tome2, .blog-text2').css({
                "visibility":"visible",
                "transition":"all 0.5s ease",
            });
        },
        mouseleave: function(){
            $(this).css({
                "box-shadow":"none",
                "transition":"all 1s ease"
            });
            $('.icons-blog2, .blog-tome2, .blog-text2').css({
                "visibility":"hidden",
                "transition":"all 0.3s ease",
            });
        },
    });

});