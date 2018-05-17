import * as $ from 'jquery';
import * as slick from 'slick-carousel';

$(document).ready(() => {
	$('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
});