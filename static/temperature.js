function convertTemperature() {
    let unitA = $('#temperatureUnitA option:selected').val();
    let unitB = $('#temperatureUnitB option:selected').val();

    if (unitA === '(°C) Celsius' && unitB === '(°C) Celsius') {
        let before = $('#temperatureBefore').val();
        let after = before * 1;
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(°C) Celsius' && unitB === '(°F) Fahrenheit') {
        let before = $('#temperatureBefore').val();
        let after = before * (9/5) + 32;
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(°C) Celsius' && unitB === '(K) Kelvin') {
        let before = $('#temperatureBefore').val();
        let after = Number(before) + (273.15);
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(°F) Fahrenheit' && unitB === '(°C) Celsius') {
        let before = $('#temperatureBefore').val();
        let after = (Number(before)-32) * (5/9);
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(°F) Fahrenheit' && unitB === '(°F) Fahrenheit') {
        let before = $('#temperatureBefore').val();
        let after = before * 1;
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(°F) Fahrenheit' && unitB === '(K) Kelvin') {
        let before = $('#temperatureBefore').val();
        let after = ((Number(before)-32) * (5/9)) + 273.15;
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(K) Kelvin' && unitB === '(°C) Celsius') {
        let before = $('#temperatureBefore').val();
        let after = Number(before) - 273.15;
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(K) Kelvin' && unitB === '(°F) Fahrenheit') {
        let before = $('#temperatureBefore').val();
        let after = (Number(before) - 273.15) * (9/5) + 32;
        $('#temperatureAfter').val(after);
    }
    if (unitA === '(K) Kelvin' && unitB === '(K) Kelvin') {
        let before = $('#temperatureBefore').val();
        let after = before * 1;
        $('#temperatureAfter').val(after);
    }

}