(function ($) {
  "use strict";
  $(document).on("ready", function () {
    /*==============================================================================
		  Header Sticky JS
	  ===============================================================================*/
    var activeSticky = $("#active-sticky"),
      winDow = $(window);
    winDow.on("scroll", function () {
      var scroll = $(window).scrollTop(),
        isSticky = activeSticky;
      if (scroll < 150) {
        isSticky.removeClass("is-sticky");
      } else {
        isSticky.addClass("is-sticky");
      }
    });

    /*=============================================================================
			 Video Popup JS
	  ===============================================================================*/
    $(".video-popup-img").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
    });

    /*==============================================================================
			CounterUp JS
		================================================================================*/
    $(".counter").counterUp({
      time: 1500,
    });
    /*=============================================================================
			Nice Select JS
  	===============================================================================*/
    $("select").niceSelect();

    /*================================================================================
			Onepage Nav JS
		==================================================================================*/
    $("#nav, #mobile-nav").onePageNav({
      currentClass: "active",
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: "",
      easing: "swing",
      begin: function () {
        //I get fired when the animation is starting
      },
      end: function () {
        //I get fired when the animation is ending
      },
      scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
      },
    });

    /*==============================================================================
		  Wow JS
	  ================================================================================*/
    var window_width = $(window).width();
    if (window_width > 767) {
      new WOW().init();
    }

    /*==============================================================================
		  Hero Slider
	  ================================================================================*/
    $(".blog-slider").owlCarousel({
      items: 3,
      autoplay: true,
      loop: true,
      touchDrag: true,
      mouseDrag: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 500,
      merge: true,
      nav: true,
      dots: false,
      margin: 30,
      navText: [
        "<i class='fi-rr-arrow-small-left'></i>",
        "<i class='fi-rr-arrow-small-right'></i>",
      ],
      responsive: {
        300: {
          items: 2,
        },
        480: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

    /*==============================================================================
		  Cube Portoflio JS
	  ================================================================================*/
    $("#portfolio-item").cubeportfolio({
      filters: "#portfolio-nav",
      loadMoreAction: "click",
      defaultFilter: "*",
      layoutMode: "grid",
      animationType: "quicksand",
      gridAdjustment: "responsive",
      gapHorizontal: 30,
      gapVertical: 30,
      mediaQueries: [
        {
          width: 1100,
          cols: 3,
        },
        {
          width: 768,
          cols: 2,
        },
        {
          width: 480,
          cols: 2,
        },
        {
          width: 0,
          cols: 1,
        },
      ],
      caption: "overlayBottomPush",
      displayType: "sequentially",
      displayTypeSpeed: 80,
    });

    /*==============================================================================
		  Clients Slider
	  ================================================================================*/
    $(".clients-slider").owlCarousel({
      items: 5,
      autoplay: true,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: false,
      dots: false,
      margin: 64,
      responsive: {
        300: {
          items: 2,
        },
        480: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });

    /*==============================================================================
		  Testimonial Slider
	  ================================================================================*/
    $(".testimonial-slider").owlCarousel({
      items: 3,
      autoplay: false,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: false,
      dots: true,
      margin: 24,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        1024: {
          items: 3,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });

    /*==============================================================================
		  Team Slider
	  ================================================================================*/
    $(".team-slider").owlCarousel({
      items: 4,
      autoplay: false,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: false,
      dots: true,
      margin: 24,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        1024: {
          items: 3,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });

  /*==============================================================================
		Preloader JS
	================================================================================*/
  $(window).on("load", function (event) {
    $("#preloader").delay(800).fadeOut(500);
  });
})(jQuery);
