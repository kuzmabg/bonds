$(document).ready(function(){
  $('.reviewsContainer').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
  });
	
	$('.RUK-SeoHead, .starsWrap, .statsWrap p, .reviewHeader p, .reviewStarsWrap, .reviewText p, .ReviewsLogo__star, .ReviewsLogo__text').wrapInner("<a href=\"https://www.reviews.io/company-reviews/store/surety-one-inc-\" target=\"_blank\"></a>");
	
	$('.reviewsContainer').append("<a id=\"reviews-link\" href=\"https://www.reviews.io/company-reviews/store/surety-one-inc-\" target=\"_blank\">Read Our Reviews</a>");
});