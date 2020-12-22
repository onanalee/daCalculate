function begin() {
    $('.length, .weight, .area, .volume, .temperature, .bytes, .pressure, .energy').hide();
}


$(function () {
    window.setTimeout(function () {
        $('.accordionAll').css('opacity', '1');
    }, 500);

    $('.accordion').addClass('default');

    $('.accordion').on('click', function () {

        var e = $('.accordionAll > .accordion');
        if (e.hasClass('expand')) {
            e.removeClass('expand');
            $(this).addClass('expand');
        } else {
            $(this).addClass('expand');
        }
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




// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  let now = new Date();
  let
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let tags = ["mon", "d", "y", "h", "m", "s"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
  for (let i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT

