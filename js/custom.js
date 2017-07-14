jQuery(document).ready( function() {

	$('.bxslider').bxSlider({
		auto: true,
		speed: 1000,
		pause: 6000,
		pager: false,
		adaptiveHeight: true,
		oneToOneTouch: false,
		preventDefaultSwipeX: false
	});
	
	$("a.transicion").transicion();

	$("bcody,html").css('overflow', 'hidden');
	$(".btn_close_pre").click(function(event) {
		$(".pre_inicio_vdo").fadeOut();
		$("body,html").css('overflow', 'auto');
	});	


	// ---Funciones Cambio Scroll ---	
	$(window).scroll(function(){

		var cambio=($(window).scrollTop()>0)?true:false;

		if (cambio){	
			$("header").addClass('bg_header');	
			$(".logo_desktop").css('display', 'block');
		}else{
			$("header").removeClass('bg_header');
			$(".logo_desktop").css('display', 'none');
		};
	});


	/* ==============================================
		TO TOP
	=============================================== */
	jQuery().UItoTop({ easingType: 'easeOutQuart' });


	
	/* ==============================================
		Counters
	=============================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
	
	/* ==============================================
		Owl Carousel 
	=============================================== */
	$("#w-owl").owlCarousel({
 
	items: 2,
      navigation : true, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem: true,
	  autoPlay: 4000,
	  responsive: true
 
	});
	
	/* ==============================================
		Owl Carousel 1
	=============================================== */
	$("#owl-1").owlCarousel({
 
	items: 2,
      navigation : true, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem: true,
	  responsive: true
 
	});
	
	/* ==============================================
		Owl Carousel 2
	=============================================== */
	$("#owl-2").owlCarousel({
 
	items: 4,
      navigation : true, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem: false,
	  responsive: true
 
	});
	
	/* ==============================================
		Owl Carousel 3
	=============================================== */
	$("#owl-3").owlCarousel({
 
	items: 3,
      navigation : false, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:true,
      paginationSpeed : 400,
      singleItem: false,
	  responsive: true
 
	});

	
	//menu_movil
	$(".btn_menu").click(function() {
		$("#mobile-nav").prop("checked", false);

	});	


	//pie charts	
			jQuery('#pie-charts').waypoint(function(direction) {			
				$('.chart').easyPieChart({
					scaleColor: "#ecf0f1",
					lineWidth: 5,
					lineCap: 'butt',
					barColor: '#bea473',
					trackColor:	"#ecf0f1",
					size: 160,
					animate: 1500
				  });
				}, {
				offset: function() {
					return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 50;
				}
			});

	
});