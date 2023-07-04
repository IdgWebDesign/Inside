
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


     if(document.getElementById("default-select")){
          $('select').niceSelect();
    }; 


    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });


    //  Counter Js 

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });
    jQuery(document).ready(function($){

      $(function(){
      var owl = $('.filter-item').owlCarousel({
        
          loop:true,
          dots:true,
          autoplay:true,
          responsive: {
            0: {
                items: 1
            },
            480: {
                items:2,
            },
            768: {
                items: 3,
            }
          }
        });
        
        /* animate filter */
      var owlAnimateFilter = function(even) {
        $(this)
        .addClass('__loading')
        .delay(70 * $(this).parent().index())
        .queue(function() {
            $(this).dequeue().removeClass('__loading')
        })
    };

    $('.filter-menu').on('click', '.filter-btn', function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */
        if($(this).hasClass('btn-active')) return;

        /* active current */
        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        /* Filter */
        owl.owlFilter(filter_data, function(_owl) { 
            $(_owl).find('.item').each(owlAnimateFilter); 
        });
  
      });
      
    });
  });
    jQuery(window).load(function(){

        
    });

    $('.imgcontentAbout1').owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      responsive: {
          0: {
              items: 1
          },
          480: {
              items: 1,
          },
          768: {
              items: 1,
          }
      }
    })
    



    $('.active-gallery').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 4,
            }

        }
    });


$('.active-blog-slider').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
      })


    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
    });

      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      });
      
			document.querySelectorAll(".obcont").forEach(El => El.addEventListener('click', () => {
        document.querySelector('.s1').style.display= "flex";
        document.querySelector('.frselector').style.overflow = "hidden";
        var IDEl = El.id;
        var imsrc = "img/r (4).jpg";
        var colorCont= "#e90e8a";
        var TitleCont= "SALÓN DE USOS MULTIPLES: <br>  AUDITORIO/PISTA DE BAILE";
        switch (IDEl){
          case 'im1': 
            imsrc = "img/r (4).jpg";
            colorCont= "#e90e8a"
            TitleCont= "SALÓN DE USOS MULTIPLES: <br>  AUDITORIO/PISTA DE BAILE"
          break;
          case 'im4': 
            imsrc = "img/p(2).jpg";
            colorCont= "#5da734"
            TitleCont= "BAÑOS"
          break;
          case 'im5': 
            imsrc = "img/r (5).jpg";
            colorCont= "#49086b"
            TitleCont= "SALÓN PRINCIPAL"
          break;
          case 'im7': 
            imsrc = "img/p (1).jpg";
            colorCont= "#28877f"
            TitleCont= "BARRA"
          break;
        

        }

        $("#imgPrinc").attr("src",imsrc);
        $("#titulocontPlan").html(TitleCont);
        document.querySelector(":root").style.setProperty('--triangle-color', colorCont)
     }));

     document.querySelector("#closer").addEventListener('click', () =>{
      document.querySelector('.s1').style.display= "none";
      $("#imgPrinc").attr("src",' ');
      document.querySelector('.frselector').style.overflow= "auto";
      document.querySelector('.frselector').style.overflowX = "hidden";
     });



    
    document.querySelector(".loader-section").addEventListener('animationend', () => {
      document.querySelector(".frselector").style.overflow = "auto";
      document.querySelector('.frselector').style.overflowX = "hidden";
    });
  
    // var owl = $('.galeriaPrinc');

  
    // $('#classification').change(function(){
    //   var selectedClass = $(this).children("option:selected").val();
  
    //   // Mostrar u ocultar las imágenes según la clasificación seleccionada
    //   if (selectedClass === 'all') {
        
    //     owl.find('.corp').removeClass('owl-item');
    //     owl.find('.corp').addClass('.owl-item');
    //     owl.find('.social').removeClass('.owl-item');
    //     owl.find('.social').addClass('.owl-item');
    //   } 
    //   else if(selectedClass === 'corp') {
    //     owl.find('.owl-item').removeClass('.owl-item');
    //     owl.find(".corp").addClass('.item');
    //   }
    //   else if(selectedClass === 'social') {
    //     owl.find('.owl-item').removeClass('.owl-item');
    //     owl.find(".social").addClass('.iteowl-itemm');
    //   }
  
    //   // Actualizar el carrusel
    //   owl.trigger('refresh.owl.carousel');
    // });
  

 });
