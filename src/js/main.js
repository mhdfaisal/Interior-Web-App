$(document).ready(function(){
    $("#nav-arrow").css({"display":"none"});
//  Bootstrap Carousel Init
    $('.carousel').carousel({
        interval:6000,
        pause:false
    });

// Slick Slider init
        $('.slick').slick({
            autoplay:true,
            arrows:false,
            centerMode:true,
            mobileFirst:true,
            speed:500
        });

//Animating the about image
$('#about-image').waypoint(function() {
    $('#about-image').addClass('swing');
}, { offset: '50%' });

//Animating the services header
$('#services-header').waypoint(function() {
    $('#services-header').addClass('bounceInUp');
}, { offset: '80%' });

//Animating the Contact heading
$('#services-header').waypoint(function() {
    $('#contact-heading').addClass('swing');
}, { offset: '80%' });

//Smooth Scrolling
$('.nav-link').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    var pos = $(id).offset();
    $('html, body').animate({scrollTop:pos.top},500);
});

//Navigation Arrow script
$(window).scroll(function(){
    var p = $(window).scrollTop();
    if(p>=250){
        $("#nav-arrow").removeClass("d-none");
        $('#nav-arrow').css({"display":"block"});
        $("#nav-arrow-icon").addClass("animated").addClass("fadeInUp").addClass("infinite").addClass("slow");
    }
    else{
        $('#nav-arrow').css({"display":"none"});
    }
});

});