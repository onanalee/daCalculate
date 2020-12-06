function convertEnergy() {
    let unitA = $('#energyUnitA option:selected').val();
    let unitB = $('#energyUnitB option:selected').val();

    if (unitA === '(J) Joule' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * (1/3600);
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.00000027778;
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 6242000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 0.00000000023901;
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 0.239006;
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 0.000239006;
        $('#energyAfter').val(after);
    }
    if (unitA === '(J) Joule' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * (1/1055);
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 3600;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.001;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 22470000000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 0.00000086042;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 860.421;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 0.860421;
        $('#energyAfter').val(after);
    }
    if (unitA === '(Wh) watt hour' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 3.41214;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 3600000;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * 1000;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 22470000000000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * (1/1162);
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 860421;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 860.421;
        $('#energyAfter').val(after);
    }
    if (unitA === '(kWh) kilowatt hour' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 3412.14;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 0.00000000000000000016022;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.000000000000000000000044505;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.000000000000000000000000044505;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 0.000000000000000000000000000038293;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 0.000000000000000000038293;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 0.000000000000000000000038293;
        $('#energyAfter').val(after);
    }
    if (unitA === 'electronvolt' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 0.00000000000000000000015186;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 4184000000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * 1162000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 1162.22;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 26110000000000000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 1000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 1000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'ton of TNT' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 3966000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 4.184;
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * (1/860);
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * (1/860421);
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 26110000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 0.000000001;
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 0.001;
        $('#energyAfter').val(after);
    }
    if (unitA === 'calories' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 0.00396567;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 4184;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * 1.16222;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.00116222;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 26110000000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 0.000001;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 1000;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
    if (unitA === 'Calories (food)' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 3.96567;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === '(J) Joule') {
        let before = $('#energyBefore').val();
        let after = before * 1055.06;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === '(Wh) watt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.293071;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === '(kWh) kilowatt hour') {
        let before = $('#energyBefore').val();
        let after = before * 0.000293071;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === 'electronvolt') {
        let before = $('#energyBefore').val();
        let after = before * 6585000000000000000000;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === 'ton of TNT') {
        let before = $('#energyBefore').val();
        let after = before * 0.00000025216;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === 'calories') {
        let before = $('#energyBefore').val();
        let after = before * 252.164;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === 'Calories (food)') {
        let before = $('#energyBefore').val();
        let after = before * 0.252164;
        $('#energyAfter').val(after);
    }
    if (unitA === '(BTU) British thermal unit' && unitB === '(BTU) British thermal unit') {
        let before = $('#energyBefore').val();
        let after = before * 1;
        $('#energyAfter').val(after);
    }
}