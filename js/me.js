window.onscroll = function() {myFunction()};
var navbar = document.getElementById("box-menu");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var scrollTop = $(".scroll-to-top");
$(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 900) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
});

function goTop() {
    $('html,body').animate({
        scrollTop: 0
    }, 2000);
}

$(function(){
    var count = $(".box-partner .list-item .item").length;
    var division = 8 - (count%8);
    var width = division*12.5;
    if (count%8 == 0) {
        var width = 0;
    }
    if ($(window).width() > 991) {
        if((division > 0 && count%8 > 0)){ 
            $(".box-partner .list-item").append('<div class="item-still">still counting...</div>');
            $( ".item-still" ).css({ width: width +'%' })
        }
    }
    if ($(window).width() < 992) {
        var division = 4 - (count%4);
        var width = division*25;
        if (count%4 == 0) {
            var width = 0;
        }
        if((division > 0 && count%4 > 0)){ 
            $(".box-partner .list-item").append('<div class="item item-still">still counting...</div>');
        }
    }
});

$(function(){
    var countTeam = $(".box-team .list-core .col-2").length;
    var divisionTeam    = 6 - (countTeam%6);
    var widthTeam       = divisionTeam*(100/6);
    if (countTeam%6 == 0) {
        var widthTeam = 0;
    }
    if ($(window).width() < 992) {
        var divisionTeam    = 4 - (countTeam%4);
        var widthTeam       = divisionTeam*(100/4);
        if (countTeam%4 == 0) {
            var widthTeam = 0;
        }
        if((divisionTeam > 0 && countTeam%4 > 0)){ 
            $(".box-team .list-core").append('<div class="col-md-2 col-xs-3 col-still">still counting...</div>');
            $( ".col-still" ).css({ width: widthTeam +'%' })
        }
    } else if ($(window).width() > 991) {
        if(divisionTeam > 0 && countTeam%6 != 0){ 
            $(".box-team .list-core").append('<div class="col-md-2 col-xs-3 col-still">still counting...</div>');
            $( ".col-still" ).css({ width: widthTeam +'%' })
        }
    }
});

$(function(){
    var countCrew = $(".box-team .list-crew .col-2").length;
    var divisionCrew = 6 - (countCrew%6);
    var widthCrew = divisionCrew*(100/6);
    if (countCrew%6 == 0) {
        var widthCrew = 0;
    }
    if ($(window).width() < 992) {
        var divisionCrew    = 4 - (countCrew%4);
        var widthCrew       = divisionCrew*(100/4);
        if (countCrew%4 == 0) {
            var widthCrew = 0;
        }
        if((divisionCrew > 0 && countCrew%4 > 0)){ 
            $(".box-team .list-crew").append('<div class="col-md-2 col-xs-3 col-still col-crew">still counting...</div>');
            $( ".col-crew" ).css({ width: widthCrew +'%' })
        }
    } else if ($(window).width() > 991) {
        if(divisionCrew > 0 && countCrew%6 != 0){ 
            $(".box-team .list-crew").append('<div class="col-still col-crew">still counting...</div>');
            $( ".col-crew" ).css({ width: widthCrew +'%' })
        }
    }
});

$(function(){
    var countPost = $(".box-team .list-post .col-2").length;
    var divisionPost = 6 - (countPost%6);
    var widthPost = divisionPost*(100/6);
    if (countPost%6 == 0) {
        var widthCrew = 0;
    }
    if ($(window).width() < 992) {
        var divisionPost    = 4 - (countPost%4);
        var widthPost       = divisionPost*(100/4);
        if (countPost%4 == 0) {
            var widthPost = 0;
        }
        if((divisionPost > 0 && countPost%4 > 0)){ 
            $(".box-team .list-post").append('<div class="col-md-2 col-xs-3 col-still col-post">still counting...</div>');
            $( ".col-post" ).css({ width: widthPost +'%' })
        }
    } else if ($(window).width() > 991) {
        if(divisionPost > 0 && countPost%6 != 0){ 
            $(".box-team .list-post").append('<div class="col-still col-post">still counting...</div>');
            $( ".col-post" ).css({ width: widthPost +'%' })
        }
    }
});

$(function () {
    $(".box-ourWorks .col-2").slice(0, 6).show();
    $(".view-more").on('click', function (e) {
        e.preventDefault();
        $(".box-ourWorks .col-2:hidden").slice(0, 3).slideDown();
        if ($(".box-ourWorks .col-2:hidden").length == 0) {
            $(".view-more").fadeOut('slow');
            $( ".main-wrapper .wrapper .box-ourWorks" ).css({ padding: "0" })
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
});

$(document).ready(function(){
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() - 450;
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance ) {
                $('.box-menu .go_box.active').removeClass('active');
                $('.box-menu .go_box').eq(i).addClass('active');
                $('.box-menu-mobile .go_box.active').removeClass('active');
                $('.box-menu-mobile .go_box.active').text('active');
                $('.box-menu-mobile .go_box').eq(i).addClass('active');
                $('.show-up').find('a').text($('.disappear .go_box.active').text())
            }
        });
    }).scroll();

    if ($(window).width() > 991) {
        $(".accordion-title").click(function (e) {
            var accordionitem = $(this).attr("data-tab");
            $('.accordion-content').not("#" + accordionitem).css('display', 'none');
            $("#" + accordionitem).slideToggle();
            $(this).toggleClass("active-title");
            $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title"); 
        });
    }

    if ($(window).width() < 992) {
        $(".accordion-title").removeAttr("data-tab");
        $(".title-mission").attr("data-toggle", "modal");
        $(".title-mission").attr("data-target", "#content-mission");
        $(".title-team").attr("data-toggle", "modal");
        $(".title-team").attr("data-target", "#content-team");
        $(".accordion-content").addClass("modal fade");

        $( ".close-popup" ).click(function() {
            $( ".accordion-title" ).removeClass('active');
        });
    }

    $(".show").click(function(){
        $(".disappear").slideToggle();
        $('.show').addClass('hide');
        $('.show').removeClass('show');
    });
    $(".disappear a").click(function(){
        $(".disappear").slideToggle();
        $('.disappear').removeClass('hide');
        $('.box-menu-mobile .show-up').removeClass('hide');
        $('.box-menu-mobile .show-up').addClass('show');
    });

    $("body").click(function(){
        console.log('tiennv')
        $(".box-menu-mobile .disappear").slideDown();
    });

    $(".accordion-title").click(function () {
        if ($(this).hasClass("active")) {
            $(".accordion-title").removeClass("active");
        } else {
            $(".accordion-title").removeClass("active");
            $(this).addClass("active");
        }
    });

    $('.box-menu-mobile .go_box a').click(function(e){
        console.log($(this).text())
        $('.show-up').find('a').text($(this).text())
    })
});


$(document).ready(function() {
    $('a[href]').bind('click', function(e) {
        e.preventDefault(); 
        var target = $(this).attr("href");  
        $('html, body').stop().animate({
                scrollTop: $(target).offset().top
        }, 600, 
        function() {
            location.hash = target; 
        });
        return false;
    });
});


