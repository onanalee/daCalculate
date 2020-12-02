// function convert(){
//     let hello = $('#lengthBefore').val();
//     let bye = hello * 1.09361;
//     $('#lengthAfter').val(bye);
// }
function convert2(){
    let unit = $('#lengthUnit option:selected').val();
    let unit2 = $('#lengthUnit2 option:selected').val();
    console.log(unit);
    console.log(unit2);
}

function begin(){
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}


$(function() {

	window.setTimeout(function() {
		$('#accordionAll').css('opacity', '1');
	}, 500);

	$('.accordion').addClass('default');

		$('.accordion').on('click', function() {

	  	var e = $('#accordionAll > .accordion');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})

function length() {
    $('.length').show();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();

}
function weight() {
    $('.weight').show();
    $('.length').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function area() {
    $('.area').show();
    $('.length').hide();
    $('.weight').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function volume() {
    $('.volume').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.temperature').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function temperature() {
    $('.temperature').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.bytes').hide();
    $('.pressure').hide();
}
function bytes() {
    $('.bytes').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.pressure').hide();
}
function pressure() {
    $('.pressure').show();
    $('.length').hide();
    $('.weight').hide();
    $('.area').hide();
    $('.volume').hide();
    $('.temperature').hide();
    $('.bytes').hide();
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