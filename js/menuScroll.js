
	$(function(){
	$('nav a').click(function(){
		var href = $(this).attr('id');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});

		return false;
	})
})
