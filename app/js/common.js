$(function() {

	$('#my-menu').mmenu({
		extensions: ['position-right', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg">'
		}
	});

	var api = $("#my-menu").data( "mmenu" );

      api.bind( "open:finish", function() {
         $('.hamburger').addClass('is-active');
      });
      api.bind( "close:finish", function() {
         $('.hamburger').removeClass('is-active');
      });


    $('.carousel-services').on('initialized.owl.carousel', function(){
      setTimeout(function(){
        carouselService();
      }, 100)
    });
    $('.carousel-services').owlCarousel({
    	loop: true,
    	nav: true,
    	smartSpeed: 700,
    	navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
    	responsiveClass: true,
      dots: false,
    	responsive: {
    		0: {
    			items: 1
    		},
    		800: {
    			items: 2
    		},
    		1100: {
    			items: 3
    		}
    	}
    });

    

    function carouselService(){
      $('.carousel-services-item').each(function(){
        var ths = $(this),
          thsh = ths.find('.carousel-services-content').outerHeight();
          ths.find('.carousel-services-image').css('min-height', thsh);
      });
    };

    $('section .h2').each(function(){
      var ths = $(this);
      ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $('.carousel-services-composition .h3').each(function(){
      var ths = $(this);
      ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });


    function onResize(){
      $('.carousel-services-content').equalHeights();
      var h1 = $('.carousel-services-content').outerHeight();
     
      var h2 = $('.carousel-services-image').outerHeight();

      if (h1 > h2 && h2 != 0){
        var hh = h1;
      }
      
      $('.carousel-services-image').css('height' , hh);
    }onResize();

    $(window).on('resize', function(){
      onResize();
    });

    //E-mail Ajax Send
  $("form.callback").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 1200,
    nav: false,
    autoHeight: true,
  });

  $('.partners').owlCarousel({
      loop: true,
      nav: true,
      smartSpeed: 700,
      navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
      responsiveClass: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1500) {
      $('.top').addClass('active');
    }else{
      $('.top').removeClass('active');
    }

  });

  $('.top').click(function(){
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });



});

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
})
