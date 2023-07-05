
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

    $('.galeriaPrinc').owlCarousel({
      
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
 
      
    })

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
      
   
        
        document.querySelectorAll(".part").forEach(El => El.addEventListener('click', () => {
					document.querySelector('.s1').style.display= "flex";
					document.querySelector('.frselector').style.overflow = "hidden";
          
					var IDEl = El.id;
					var imsrc = "img/p (7).jpg";
					var MedCont= "150 mts2";
					var TitleCont= "ESCRITORIOS COMPARTIDOS";
					var DescCont= "Recepción";
          
					

					switch (IDEl){
						case 'im1': 
							imsrc = "img/p (7).jpg";
							MedCont= " ";
							TitleCont= "ESCRITORIOS COMPARTIDOS";
							DescCont= "Espacio común con variedad de estaciones pensadas para tu comodidad y la de tus invitados, contempla: <br> <br> -Recepción." + '<br>' + "-5 estaciones de trabajo de 8 puestos con tomas eléctricas en escritorios." + "<br>" + "-Living room para 6, 3 y 2 personas." + "<br>" + "-Baños, femenino, masculino." + "<br>" + "-80 lockers." + "<br>" + "-Puntos de acceso para impresoras. " + "<br>" + "-2 call room.";
              
							
						break;
						case 'im2': 
							imsrc = "img/p (6).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 9";
							DescCont= "Área ideal para 6 personas que tendrán disponible TV LED 40', aire acondicionado, tomas eléctricas en escritorio y aberturas insonorizadas.";
							
						break;
						case 'im3': 
							imsrc = "img/Banios Cowork.jpg";
							MedCont= " ";
							TitleCont= "BAÑOS";
							DescCont= " ";
							
						break;
						case 'im4': 
							imsrc = "img/p (5).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 8";
							DescCont= "Espacio con capacidad para 12 personas, incluye TV LED 40', AA, tomas eléctricas en escritorio y aberturas insonorizadas. ";
							
						break;
						case 'im5': 
							imsrc = "img/p (8).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 7";
							DescCont= "Perfecto para equipos de trabajo de 8 personas, podrás disponer de TV LED 40', aire acondicionado, tomas eléctricas en escritorio.";
							
						break;
						case 'im6': 
							imsrc = "img/p (9).jpg";
							MedCont= " ";
							TitleCont= "SALA DE REUNIONES";
							DescCont= "Con capacidad para 6 personas, TV LED 40' para proyectar presentaciones, aire acondicionado  y pizarra.";
							
						break;
						case 'im7': 
							imsrc = "img/p (10).jpg";
							MedCont= " ";
							TitleCont= "CALLROOM";
							DescCont= " ";
							
						break;
						case 'im8': 
							imsrc = "img/p (12).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 2";
							DescCont= "Espacio dispuesto para grupos de 6 personas con TV LED 40', aire acondicionado y tomas eléctricas en escritorio.";
							
						break;
						case 'im9': 
							imsrc = "img/p (3).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 6";
							DescCont= "Con capacidad para equipos de trabajo de 6 personas, disponibilidad de TV LED 40', aire acondicionado, pizarra y tomas eléctricas en escritorio.";
							
						break;
						case 'im10': 
							imsrc = "img/p (4).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 11";
							DescCont= "Pensando en la privacidad y comodidad este lugar funciona para 8 personas, tendrás acceso a TV LED 40', aire acondicionado y tomas eléctricas en escritorio.";
							
						break;
						case 'im11': 
							imsrc = "img/p (11).jpg";
							MedCont= " ";
							TitleCont= "OFICINA 10";
							DescCont= "Cómoda área para trabajar 8 personas, dotada de TV LED 40', aire acondicionado y tomas eléctricas en escritorio.";
							
						break;
						case 'im12': 
							imsrc = "img/p (1).jpg";
							MedCont= " ";
							TitleCont= "COCINA COMEDOR";
							DescCont= "Para brunch, almuerzos, café con clientes y hasta para cantar cumpleaños a tus compañeros, este lugar esta diseñado para vos. <br> <br> -Mesa capacidad para 20 y 14 personas, desayunador para 4. <br> -Horno. <br> -Microondas. <br> -Heladera. <br> -Máquina expendedora de café. <br> -Venta de golosinas. <br> -Infusiones. <br> -Filtro de agua. <br> -Vajilla. ";
							
						break;
						case 'im13': 
							imsrc = "img/p (2).jpg";
							MedCont= "150 mts2";
							TitleCont= "TERRAZA";
							DescCont= "Lugar de esparcimiento, con conectividad WI-FI, ideal para tomar un break o tener una reunión informal al aire libre.";
							
						break;

					}

					$("#imgPrinc").attr("src",imsrc);
					$("#medidacontPlan").html(MedCont);
					$("#titulocontPlan").html(TitleCont);
					$("#desccontPlan").html(DescCont);
          
					
				}));

				document.querySelector("#closer").addEventListener('click', () =>{
				document.querySelector('.s1').style.display= "none";
				$("#imgPrinc").attr("src",' ');
				document.querySelector('.frselector').style.overflow= "auto";
        document.querySelector('.frselector').style.overflowX = "hidden";
				
					$("#medidacontPlan").text(" ");
					$("#titulocontPlan").text(" ");
					$("#desccontPlan").text(" ");
				});




				document.querySelector(".loader-section").addEventListener('animationend', () => {
				document.querySelector(".frselector").style.overflow = "auto";
        document.querySelector('.frselector').style.overflowX = "hidden";
				});
        let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
        if(isMobile != true){
        document.querySelector(".floatingCont").addEventListener('mouseenter', () => {
          document.querySelector(".textcontplan").style.width = "40%"
          document.querySelector(".imgcontplan").style.width = "60%"
          
          document.querySelector(".flexfrtext").style.transition = "4s"
          document.querySelector(".flexfrtext").style.display = "flex"
          setTimeout(() => {
          document.querySelector(".flexfrtext").style.opacity = "1"
          }, 650);
        })

        document.querySelector(".floatingCont").addEventListener('mouseleave', () => {
          
          document.querySelector(".flexfrtext").style.opacity = "0"
          document.querySelector(".flexfrtext").style.transition = "0.5s"
          setTimeout(() => {
            document.querySelector(".flexfrtext").style.display = "none"
            document.querySelector(".textcontplan").style.width = "0%"
            document.querySelector(".imgcontplan").style.width = "100%"
            
            }, 600);
            
        })
      }

       

       

 });
