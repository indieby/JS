$('div#attachment_174 > a > img').mouseover(function () {
	$(this).animate({ opacity: "0.5" }, 'fast');
});

$('div#attachment_174 > a > img').mouseout(function () {
	$(this).animate({ opacity: "1" }, 'fast');
});  