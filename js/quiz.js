$(document).ready(function($) {

		// $('.nextBtn').addClass('xbtn--grad__disabled');
	$('.tab_content').hide();
	$('.tab_content:first').show();
	$('.tabs li:first').addClass('active');
	$('.tabs li').click(function(event) {
		// $('.nextBtn').addClass('xbtn--grad__disabled');
		
		event.preventDefault();

		// $('input[type="radio"]').on('click', function() {
		// 	$('.nextBtn').removeClass('xbtn--grad__disabled');
		// });

		$(this).addClass('active');

		console.log($(this).find($('input[type="radio"]').prop('checked')));
		// проверка на checked radio
		if ($(this).find($('input[type="radio"]')).prop('checked')) {
			$('.nextBtn').removeClass('xbtn--grad__disabled');
		} else {
			$('.nextBtn').addClass('xbtn--grad__disabled');
		}
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("href");


		$(selectTab).fadeIn();
	});

	$('input[type="radio"]').on('click', function() {
		$('.nextBtn').removeClass('xbtn--grad__disabled');
	});
	// if (!$('input[type="radio"]').checked) {
	// 	$('.nextBtn').addClass('xbtn--grad__disabled');
	// } else {
	// 	$('.nextBtn').removeClass('xbtn--grad__disabled');
	// }

	$('.nextBtn').on('click', function() {
		let nextTab = $(this).closest('.tab_content').attr('id');
		let nextTabId = +nextTab.substr(-1,nextTab.indexOf("-"));

		nextTabId ++;

		$(this).closest('.quiz__question-page').find('a[href="#tab-'+nextTabId+'"]').click();
	});

	$('.btn-skip').on('click', function() {
		$(this).closest('.quiz__question-page').find('a[href="#tab-2"]').click();
	});

	$('.xbtn--border_back').on('click', function() {
		let prevTab = $(this).closest('.tab_content').attr('id');
		let prevTabId = +prevTab.substr(-1,prevTab.indexOf("-"));

		prevTabId --;

		$(this).closest('.quiz__question-page').find('a[href="#tab-'+prevTabId+'"]').click();
	});
});


