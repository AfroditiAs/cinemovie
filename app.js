var main=function(){
    $('.dropdown-menu').hide();
    $('.hide-dropdown-menu').hide();
    $('.ticket_details').hide();

    $('.movies-dropdown').click(function(){
        $('.dropdown-menu').toggle();
    });

    $(window).resize(function() {
        $('.dropdown-menu').hide();
        if ($(window).width() > 800) {
          $('.menu').hide();
          $('.menu').animate({right: "-285px"}, 0);
          $('body').animate({right: "0px"}, 0);
        }
    });

    //---------------HIDE-MENU-----------------//
    $('#menu-icon').click(function(){
        $('.menu').show();
        $('.menu').animate({right: "0px"}, 300);
        $('body').animate({right: "285px"}, 300);
    });
    $('.icon-close').click(function() {
        $('.menu').hide();
        $('.menu').animate({right: "-285px"}, 300);

        $('body').animate({right: "0px"}, 300);
    });
    $('.hide-movies-dropdown').click(function(){
        $('.hide-dropdown-menu').toggle();
    });

    //------------------SLIDE------------------//
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
         nextSlide = $('.slide').first();
         nextDot = $('.dot').first();
        }
    
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });


    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length === 0) {
          prevSlide = $('.slide').last();
          prevDot = $('.dot').last();
        }
    
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });

    //---------------FOOTER-----------------//
    $('.fa-twitter').hover(function(){
        $('.fa-twitter').addClass('twitter');
        },
        function(){
        $('.fa-twitter').removeClass('twitter');
    });
    
    $('.fa-facebook').hover(function(){
        $('.fa-facebook').addClass('facebook');
        },
        function(){
        $('.fa-facebook').removeClass('facebook');
    });
    
    $('.fa-youtube').hover(function(){
        $('.fa-youtube').addClass('youtube');
        },
        function(){
        $('.fa-youtube').removeClass('youtube');
    });
    
    $('.fa-google-plus').hover(function(){
        $('.fa-google-plus').addClass('google-plus');
        },
        function(){
        $('.fa-google-plus').removeClass('google-plus');
    });

    $('.name_day').click(function(){
            $('.ticket_details').toggle();
    });

    $('.about_ticket li').click(function () {

        var text = $(this).children('div.ticket_time');

        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').html('-');     
        } else {
            text.slideUp('200');
            $(this).children('span').html('+');     
        }
        
    });
}

$(document).ready(main);