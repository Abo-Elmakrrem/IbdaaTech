$(document).ready(function(){
  $(".services-carousel").owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
});

// end of our services-carousel//

$(document).ready(function(){
  $(".carousel-customers").owlCarousel({
    loop:true,
    margin:100,
    rtl:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
});

