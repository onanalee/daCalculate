function begin(){
    $('.length, .weight, .area, .volume, .temperature, .bytes, .pressure, .energy').hide();
}


$(function() {
	window.setTimeout(function() {
		$('.accordionAll').css('opacity', '1');
	}, 500);

	$('.accordion').addClass('default');

		$('.accordion').on('click', function() {

	  	var e = $('.accordionAll > .accordion');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})

function length() {
    $('.length').show();
    $('.weight, .area, .volume, .temperature, .bytes, .pressure, .energy').hide();


}
function weight() {
    $('.weight').show();
    $('.length, .area, .volume, .temperature, .bytes, .pressure, .energy').hide();
}
function area() {
    $('.area').show();
    $('.weight, .length, .volume, .temperature, .bytes, .pressure, .energy').hide();
}
function volume() {
    $('.volume').show();
    $('.weight, .area, .length, .temperature, .bytes, .pressure, .energy').hide();
}
function temperature() {
    $('.temperature').show();
    $('.weight, .area, .volume, .length, .bytes, .pressure, .energy').hide();
}
function bytes() {
    $('.bytes').show();
    $('.weight, .area, .volume, .temperature, .length, .pressure, .energy').hide();
}
function pressure() {
    $('.pressure').show();
    $('.weight, .area, .volume, .temperature, .bytes, .length, .energy').hide();
}
function energy() {
    $('.energy').show();
    $('.weight, .area, .volume, .temperature, .bytes, .pressure, .length').hide();
}

function generatePassword(length = 12) {
    $('#password').empty();
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    // return password;

    $('#password').append(password);
}