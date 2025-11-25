function menuTrigger () {
	let burgerSVG = $('.burger-svg').attr('data-active');
	$('.menu').toggleClass('active')
	if (burgerSVG === 'true') {
		$('.burger-svg').attr('data-active', false);
		$('.x-svg').attr('data-active', true);
	} else {
		$('.burger-svg').attr('data-active', true);
		$('.x-svg').attr('data-active', false);
	}
}

$('a.menu-btn').on('click', function(e) {
	e.preventDefault();
	menuTrigger();
});




$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    const target = $(this.getAttribute('href'));
    if (target.length) {
		menuTrigger();
        $('html, body').animate({
            scrollTop: target.offset().top - 52
        }, 400); // 600 мс — скорость
    }
});