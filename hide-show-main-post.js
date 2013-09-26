if($('div#post-483').hasClass('sticky')){
	$('div#post-483').before('<div class="show-title-post"><a>Скрыть заглавный пост</a></div>');
}

$('#post-483 > h2 > a').attr("title", "Блог об инди-играх"); 

$('.show-title-post').click(function(){			
	if($('div#post-483').css('display') == 'none'){
		$('div#post-483').fadeIn(700);
		$('.show-title-post > a').text('Скрыть заглавный пост');
	}
	else{
		$('div#post-483').fadeOut(700);
		$('.show-title-post > a').text('Показать заглавный пост');
	}
	return false;
});