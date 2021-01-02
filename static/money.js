$(document).ready(function ready() {
    for (i = 1913; i < 2016; i++) {
        let option = `<option>${i}</option>`;
        $('#year').append(option);
    }
})

function inflation() {
    $('#result').empty();
    let input = $('#inflation').val();
    let year = $('#year option:selected').val();

    $.ajax({
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/http://inflation-api.herokuapp.com/api/?value=' + input + '&year=' + year,
        data: {},
        success: function (response) {
            let result = response['response']['adjustedValue'];
            $('#result').append(result);
        }
    })
}

function exchange() {
    $('#todayMessage').empty();
    let currencyA = $('#currencyA option:selected').val();
    let currencyB = $('#currencyB option:selected').val();
    let input = $('#inputA').val();
    let url = currencyA.substring(1, 4);
    $.ajax({
        type: 'GET',
        url: 'https://api.exchangeratesapi.io/latest?base=' + url,
        data: {},
        success: function (response) {
            let cad = response['rates']['CAD'];
            let hkd = response['rates']['HKD'];
            let isk = response['rates']['ISK'];
            let php = response['rates']['PHP'];
            let dkk = response['rates']['DKK'];
            let huf = response['rates']['HUF'];
            let czk = response['rates']['CZK'];
            let gbp = response['rates']['GBP'];
            let ron = response['rates']['RON'];
            let sek = response['rates']['SEK'];
            let idr = response['rates']['IDR'];
            let inr = response['rates']['INR'];
            let brl = response['rates']['BRL'];
            let rub = response['rates']['RUB'];
            let hrk = response['rates']['HRK'];
            let jpy = response['rates']['JPY'];
            let thb = response['rates']['THB'];
            let chf = response['rates']['CHF'];
            let eur = response['rates']['EUR'];
            let myr = response['rates']['MYR'];
            let bgn = response['rates']['BGN'];
            let TRY = response['rates']['TRY'];
            let cny = response['rates']['CNY'];
            let nok = response['rates']['NOK'];
            let nzd = response['rates']['NZD'];
            let zar = response['rates']['ZAR'];
            let usd = response['rates']['USD'];
            let mxn = response['rates']['MXN'];
            let sgd = response['rates']['SGD'];
            let aud = response['rates']['AUD'];
            let ils = response['rates']['ILS'];
            let krw = response['rates']['KRW'];
            let pln = response['rates']['PLN'];
            if (currencyB === '(CAD) Canadian Dollar') {
                $('#inputB').val((input * cad).toFixed(2));
            } else if (currencyB === '(KRW) Korean Won') {
                $('#inputB').val((input * krw).toFixed(2));
            } else if (currencyB === '(USD) US Dollar') {
                $('#inputB').val((input * usd).toFixed(2));
            } else if (currencyB === '(EUR) Euro') {
                $('#inputB').val((input * eur).toFixed(2));
            } else if (currencyB === '(JPY) Japan Yen') {
                $('#inputB').val(input * jpy.toFixed(2));
            } else if (currencyB === '(CNY) China Yuan (RMB)') {
                $('#inputB').val((input * cny).toFixed(2));
            } else if (currencyB === '(GBP) British Pound') {
                $('#inputB').val((input * gbp).toFixed(2));
            } else if (currencyB === '(AUD) Australia Dollar') {
                $('#inputB').val((input * aud).toFixed(2));
            } else if (currencyB === '(BGN) Bulgaria Lev') {
                $('#inputB').val((input * bgn).toFixed(2));
            } else if (currencyB === '(BRL) Brazil Real') {
                $('#inputB').val((input * brl).toFixed(2));
            } else if (currencyB === '(CHF) Swiss Franc') {
                $('#inputB').val((input * chf).toFixed(2));
            } else if (currencyB === '(CZK) Czech Koruna') {
                $('#inputB').val((input * czk).toFixed(2));
            } else if (currencyB === '(DKK) Denmark Krone') {
                $('#inputB').val((input * dkk).toFixed(2));
            } else if (currencyB === '(HKD) Hong Kong Dollar') {
                $('#inputB').val((input * hkd).toFixed(2));
            } else if (currencyB === '(HRK) Croatia Kuna') {
                $('#inputB').val((input * hrk).toFixed(2));
            } else if (currencyB === '(HUF) Hungary Forint') {
                $('#inputB').val((input * huf).toFixed(2));
            } else if (currencyB === '(IDR) Indonesia Rupiah') {
                $('#inputB').val((input * idr).toFixed(2));
            } else if (currencyB === '(ILS) Israel Shekel') {
                $('#inputB').val((input * ils).toFixed(2));
            } else if (currencyB === '(INR) India Rupee') {
                $('#inputB').val((input * inr).toFixed(2));
            } else if (currencyB === '(ISK) Iceland Krona') {
                $('#inputB').val((input * isk).toFixed(2));
            } else if (currencyB === '(MXN) Mexico Peso') {
                $('#inputB').val((input * mxn).toFixed(2));
            } else if (currencyB === '(MYR) Malaysia Ringgit') {
                $('#inputB').val((input * myr).toFixed(2));
            } else if (currencyB === '(NOK) Norway Krone') {
                $('#inputB').val((input * nok).toFixed(2));
            } else if (currencyB === '(NZD) New Zealand Dollar') {
                $('#inputB').val((input * nzd).toFixed(2));
            } else if (currencyB === '(PHP) Philippine Peso') {
                $('#inputB').val((input * php).toFixed(2));
            } else if (currencyB === '(PLN) Poland Zloty') {
                $('#inputB').val((input * pln).toFixed(2));
            } else if (currencyB === '(RON) Romania Leu') {
                $('#inputB').val((input * ron).toFixed(2));
            } else if (currencyB === '(RUB) Russia Ruble') {
                $('#inputB').val((input * rub).toFixed(2));
            } else if (currencyB === '(SEK) Sweden Krona') {
                $('#inputB').val((input * sek).toFixed(2));
            } else if (currencyB === '(THB) Thai Baht') {
                $('#inputB').val((input * thb).toFixed(2));
            } else if (currencyB === '(TRY) Turkish Lira') {
                $('#inputB').val((input * TRY).toFixed(2));
            } else if (currencyB === '(SGD) Singapore Dollar') {
                $('#inputB').val((input * sgd).toFixed(2));
            } else if (currencyB === '(ZAR) South Africa Rand') {
                $('#inputB').val((input * zar).toFixed(2));
            }
            let todayA = $('#inputA').val();
            let todayB = $('#inputB').val();
            let message = `Today, <span class="currency">${todayA}</span> ${currencyA} equals <span class="currency">${todayB}</span> ${currencyB}.`;
            $('#todayMessage').append(message);
        }
    })
};

function exchangePast() {
    $('#pastMessage').empty();
    let currencyA = $('#currencyPastA option:selected').val();
    let currencyB = $('#currencyPastB option:selected').val();
    let input = $('#pastA').val();
    let url = currencyA.substring(1, 4);
    let date = $('#date').val();
    $.ajax({
        type: 'GET',
        url: 'https://api.exchangeratesapi.io/' + date + '?base=' + url,
        data: {},
        success: function (response) {
            let cad = response['rates']['CAD'];
            let hkd = response['rates']['HKD'];
            let isk = response['rates']['ISK'];
            let php = response['rates']['PHP'];
            let dkk = response['rates']['DKK'];
            let huf = response['rates']['HUF'];
            let czk = response['rates']['CZK'];
            let gbp = response['rates']['GBP'];
            let ron = response['rates']['RON'];
            let sek = response['rates']['SEK'];
            let idr = response['rates']['IDR'];
            let inr = response['rates']['INR'];
            let brl = response['rates']['BRL'];
            let rub = response['rates']['RUB'];
            let hrk = response['rates']['HRK'];
            let jpy = response['rates']['JPY'];
            let thb = response['rates']['THB'];
            let chf = response['rates']['CHF'];
            let eur = response['rates']['EUR'];
            let myr = response['rates']['MYR'];
            let bgn = response['rates']['BGN'];
            let TRY = response['rates']['TRY'];
            let cny = response['rates']['CNY'];
            let nok = response['rates']['NOK'];
            let nzd = response['rates']['NZD'];
            let zar = response['rates']['ZAR'];
            let usd = response['rates']['USD'];
            let mxn = response['rates']['MXN'];
            let sgd = response['rates']['SGD'];
            let aud = response['rates']['AUD'];
            let ils = response['rates']['ILS'];
            let krw = response['rates']['KRW'];
            let pln = response['rates']['PLN'];
            if (currencyB === '(CAD) Canadian Dollar') {
                $('#pastB').val((input * cad).toFixed(2));
            } else if (currencyB === '(KRW) Korean Won') {
                $('#pastB').val((input * krw).toFixed(2));
            } else if (currencyB === '(USD) US Dollar') {
                $('#pastB').val((input * usd).toFixed(2));
            } else if (currencyB === '(EUR) Euro') {
                $('#pastB').val((input * eur).toFixed(2));
            } else if (currencyB === '(JPY) Japan Yen') {
                $('#pastB').val((input * jpy).toFixed(2));
            } else if (currencyB === '(CNY) China Yuan (RMB)') {
                $('#pastB').val((input * cny).toFixed(2));
            } else if (currencyB === '(GBP) British Pound') {
                $('#pastB').val((input * gbp).toFixed(2));
            } else if (currencyB === '(AUD) Australia Dollar') {
                $('#pastB').val((input * aud).toFixed(2));
            } else if (currencyB === '(BGN) Bulgaria Lev') {
                $('#pastB').val((input * bgn).toFixed(2));
            } else if (currencyB === '(BRL) Brazil Real') {
                $('#pastB').val((input * brl).toFixed(2));
            } else if (currencyB === '(CHF) Swiss Franc') {
                $('#pastB').val((input * chf).toFixed(2));
            } else if (currencyB === '(CZK) Czech Koruna') {
                $('#pastB').val((input * czk).toFixed(2));
            } else if (currencyB === '(DKK) Denmark Krone') {
                $('#pastB').val((input * dkk).toFixed(2));
            } else if (currencyB === '(HKD) Hong Kong Dollar') {
                $('#pastB').val((input * hkd).toFixed(2));
            } else if (currencyB === '(HRK) Croatia Kuna') {
                $('#pastB').val((input * hrk).toFixed(2));
            } else if (currencyB === '(HUF) Hungary Forint') {
                $('#pastB').val((input * huf).toFixed(2));
            } else if (currencyB === '(IDR) Indonesia Rupiah') {
                $('#pastB').val((input * idr).toFixed(2));
            } else if (currencyB === '(ILS) Israel Shekel') {
                $('#pastB').val((input * ils).toFixed(2));
            } else if (currencyB === '(INR) India Rupee') {
                $('#pastB').val((input * inr).toFixed(2));
            } else if (currencyB === '(ISK) Iceland Krona') {
                $('#pastB').val((input * isk).toFixed(2));
            } else if (currencyB === '(MXN) Mexico Peso') {
                $('#pastB').val((input * mxn).toFixed(2));
            } else if (currencyB === '(MYR) Malaysia Ringgit') {
                $('#pastB').val((input * myr).toFixed(2));
            } else if (currencyB === '(NOK) Norway Krone') {
                $('#pastB').val((input * nok).toFixed(2));
            } else if (currencyB === '(NZD) New Zealand Dollar') {
                $('#pastB').val((input * nzd).toFixed(2));
            } else if (currencyB === '(PHP) Philippine Peso') {
                $('#pastB').val((input * php).toFixed(2));
            } else if (currencyB === '(PLN) Poland Zloty') {
                $('#pastB').val((input * pln).toFixed(2));
            } else if (currencyB === '(RON) Romania Leu') {
                $('#pastB').val((input * ron).toFixed(2));
            } else if (currencyB === '(RUB) Russia Ruble') {
                $('#pastB').val((input * rub).toFixed(2));
            } else if (currencyB === '(SEK) Sweden Krona') {
                $('#pastB').val((input * sek).toFixed(2));
            } else if (currencyB === '(THB) Thai Baht') {
                $('#pastB').val((input * thb).toFixed(2));
            } else if (currencyB === '(TRY) Turkish Lira') {
                $('#pastB').val((input * TRY).toFixed(2));
            } else if (currencyB === '(SGD) Singapore Dollar') {
                $('#pastB').val((input * sgd).toFixed(2));
            } else if (currencyB === '(ZAR) South Africa Rand') {
                $('#pastB').val((input * zar).toFixed(2));
            }
            let pastDate = $('#date').val();
            let pastA = $('#pastA').val();
            let pastB = $('#pastB').val();
            let message = `On ${pastDate}, <span class="currency">${pastA}</span> ${currencyA} equalled <span class="currency">${pastB}</span> ${currencyB}.`;
            $('#pastMessage').append(message);
        }
    })
};