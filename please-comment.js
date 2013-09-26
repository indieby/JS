$('#container').append('<div id="custom" style="position: fixed;border-radius:10px;width:150px;height:auto;text-align:right;background: rgba(236, 240, 241,0);"><div style="font-size:14pt; color: white;">Оставьте комментарий</div><div style="font-size:10pt">И вы подарите автору стимул пополнять и совершенствовать сайт</div></div>');

locateCustom();

$('#custom').css('top','70%');

if($("#comment").length){        
	$('#custom').click(function () {
	$('div#form').focus();
	});
} 
else {
$('#custom').click(function () {
	window.location='http://indie-game.blog.tut.by/o-bloge';
	});
};
$('#custom').mouseover(function(){
	$(this).css({'cursor':'pointer', 'background': 'rgba(255, 255, 255,0.06)'});
});
$('#custom').mouseout(function(){
	$(this).css({'cursor':'pointer', 'background': 'rgba(236, 240, 241,0)'});
});

$(window).resize(function () {
	locateCustom();
});

function locateCustom(){
	$('#custom').offset(function (i, val) {
		return { top: 500, left: $('#container').offset().left - 160 };
	});
};