$(function() {
	var $tabs = $('#tabs a');
  var $tabNumber = 0; // number of first tab (beginig from 0)
  $('#tab-content').children('div').eq($tabNumber).toggle(); // make first tab invisible

	$tabs.on('click', function (e) {
		e.preventDefault();
    var $newTabNumber = $tabs.index($(this));
    if($tabNumber != $newTabNumber) {
			$tabs.eq($tabNumber).removeClass("active-tab");
      $('#tab-content').children('div').eq($tabNumber).toggle(); // make old tab invisible
      $tabNumber = $newTabNumber;
			$(this).addClass("active-tab");
      $('#tab-content').children('div').eq($tabNumber).toggle(); // make new tab visible
    }
	})

  var $inputs = $('input');
  var $button = $('button');
	var $div = $('.tool-tips');
	var $fs = $('fieldset');
	$div.each(function (i) {
		$(this).append('<span class="dom-tooltip">' + $inputs.eq(i).attr('title') + '</span');
	});

	$fs.mouseenter(function () {
		$('.dom-tooltip').fadeOut(100);
	});

	$inputs.mouseenter(function () {
    $(this).siblings('.dom-tooltip').fadeIn(100);
  });

  $inputs.mouseleave(function () {
		$(this).siblings('.dom-tooltip').fadeOut(100);
  });

  $button.click(function () {
		$('.dom-tooltip').fadeIn(100);
  })
})
