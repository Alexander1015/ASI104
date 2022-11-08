$(document).ready(function(){
    var rellax = new Rellax ('.rellax')

    var ancho = $(window).width();
    if (ancho <= 1080){
		$('.my-web').css({
			'background-size': 'initial'
		});
	}

	if (ancho <= 1080){
		$('.my-projects').css({
			'background-size': 'initial'
		});
	}
});