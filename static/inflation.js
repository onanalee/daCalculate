$(document).ready(function ready() {
    $('.loader').hide();
    for (i = 1913; i < 2016; i++) {
        let option = `<option>${i}</option>`;
        $('#year').append(option);
    }
})

function inflation() {
    $('#resultInflation').empty();
    let input = $('#inflation').val();
    let year = $('#year option:selected').val();

    $.ajax({
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/http://inflation-api.herokuapp.com/api/?value=' + input + '&year=' + year,
        data: {},
        beforeSend: function () {
            $('.loader').show();
        },
        success: function (response) {
            $('.loader').hide();
            let result = response['response']['adjustedValue'];
            let message = `In <span class="currency">${year}</span> ...  <span class="currency">${input}</span> dollar(s) had about the same purchasing power as today's <span class="currency">${result}</span> dollar(s).`

            $('#resultInflation').append(message);
        }
    })
}