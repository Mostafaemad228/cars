
(function ($)
{ "use strict"

/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(1050).fadeOut('slow');
      $('body').delay(850).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
  //   $(window).on('scroll', function () {
  //     var scroll = $(window).scrollTop();
  //     if (scroll < 100) {
  //       $("#ftco-navbar").removeClass("sticky-bar");
  //       $('#back-top').fadeOut(500);
  //     } else {
  //       $("#ftco-navbar").addClass("sticky-bar");
  //       $('#back-top').fadeIn(500);
  //     }
  //   });

  // // Scroll Up
  //   $('#back-top a').on("click", function () {
  //     $('body,html').animate({
  //       scrollTop: 0
  //     }, 800);
  //     return false;
  //   });
  

   

    

})(jQuery);


// // $('.datepicker').datepicker();

window.addEventListener("scroll" , function () {
        
    var navbar =  document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY >20)
})
// ////////////////

window.addEventListener("scroll" , function () {
        
    var navbar =  document.querySelector(".style-switcher");
    navbar.classList.toggle("sticky",window.scrollY >20)
})

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

$(function() {
  $('div li a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
    }, 1000);
    event.preventDefault();
  });
}); 
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


$(document).ready(function(){
$('.customer-logos').slick({
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1000,
arrows: false,
dots: false,
    pauseOnHover: false,
    responsive: [{
    breakpoint: 768,
    settings: {
        slidesToShow: 3
    }
}, {
    breakpoint: 520,
    settings: {
        slidesToShow: 2
    }
}]
});
});
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var mixer = mixitup('#cars-section');
var mixer = mixitup('.shuffle1', {
selectors: {
target: '.blog-item'
},
animation: {
duration: 300
}
});

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


const slides=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
indicatorImages[i].addEventListener("click",function(){
 
   for(let j=0; j<indicatorImages.length; j++){
     indicatorImages[j].classList.remove("active");
   }
    this.classList.add("active");
    const id=this.getAttribute("data-id");
   for(let j=0; j<slides.length; j++){
       slides[j].classList.remove("active");
   }

    slides[id].classList.add("active");

})
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////




// $('.timer').countTo({
//     from: 50,
//     to: 550,
//     speed: 5000,
//     refreshInterval: 50,
//     formatter: function (value, options) {
//     return value.toFixed(options.decimals);
//     },
//     onUpdate: function (value) {
//     console.debug(this);
//     },
//     onComplete: function (value) {
//     console.debug(this);
//     }
//     });
    
    
    
    
    
//     $('.timer2').countTo({
//     from: 50,
//     to: 250,
//     speed: 5000,
//     refreshInterval: 50,
//     formatter: function (value, options) {
//     return value.toFixed(options.decimals);
//     },
//     onUpdate: function (value) {
//     console.debug(this);
//     },
//     onComplete: function (value) {
//     console.debug(this);
//     }
//     });
    
    
    
    
    
//     $('.timer3').countTo({
//     from: 0,
//     to: 50,
//     speed: 5000,
//     refreshInterval: 50,
//     formatter: function (value, options) {
//     return value.toFixed(options.decimals);
//     },
//     onUpdate: function (value) {
//     console.debug(this);
//     },
//     onComplete: function (value) {
//     console.debug(this);
//     }
//     });







