
$(document).ready(function(){
	/* ====Wow Js ===== */
	new WOW().init();
	/* === owl-carousel - === */
	var owl = $('#clients-owl-carousel');
	owl.owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		dots:false,
		autoplayTimeout:1500,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		smartSpeed:450,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				nav:false
			},
			576:{
				items:4,
				nav:false
			},
			1000:{
				items:6,
				nav:false,
			}
		}
	});
	/* === testimonial owl-carousel - === */
	/* ====Owl carousel 001  ===== */
	$("#testi-owl-carousel").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		nav:false,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
	});
	var selector = $('.owl-carousel');

		$('.next-button').click(function() {
		selector.trigger('next.owl.carousel');
		});

		$('.prev-button').click(function() {
		selector.trigger('prev.owl.carousel');
		});
	/* === UPPER BUTTON SCROLL START === */
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("main-nav");
	var sticky = header.offsetTop;

	function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		header.classList.remove("pt-md-5");
	} else {
		header.classList.remove("sticky");
		header.classList.add("pt-md-5");
	}
	}
	/* === UPPER BUTTON SCROLL START === */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x >700){
			$('#upper').fadeIn(1000);
			
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},0);
	});
});