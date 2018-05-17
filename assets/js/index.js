import * as $ from 'jquery';
import * as slick from 'slick-carousel';

$(document).ready(() => {
	$('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		//adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});


	$('a[href="#menu"]').click((event) => {
		event.preventDefault();
		$('.mobile-menu').toggleClass('is-active');
		$('#overlay').toggleClass('is-active');
	});

	$('#overlay').click((event) => {
		$('.mobile-menu').toggleClass('is-active');
		$('#overlay').toggleClass('is-active');
	});
});