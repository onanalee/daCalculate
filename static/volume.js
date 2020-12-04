function convertVolume() {
    let unitA = $('#volumeUnitA option:selected').val();
    let unitB = $('#volumeUnitB option:selected').val();

    if (unitA === '(mcL) microliter' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000000000000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000061024;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000035315;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * 0.00000000130795;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000035195;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0000021134;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0000010567;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mcL) microliter' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 0.00000026417;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000000000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 0.061024;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000035315;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * 0.00000130795;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 0.035195;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0021134;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0010567;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(mL) milliliter' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 0.00026417;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 61.0237;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0353147;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/765);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 33.814;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 2.113;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 1.057;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(L) liter' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/3.785);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.001;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1000);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1000000000);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1000000000000000000);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * (1/16387);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/28320000);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/764600000);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * (1/29574);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * (1/473176);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * (1/946353);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic millimeter' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/3785000);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.001;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000000000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * (1/16.387);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/28317);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/764555);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * (1/29.574);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * (1/473);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * (1/946);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic centimeter' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/3785);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000001;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 61023.7;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 35.3147;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * 1.30795;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 33814;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 2113.38;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 1056.69;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic meter' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 264.172;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 1000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 61020000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 35310000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * 1308000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 33810000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 2113000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 1057000000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic kilometer' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 264200000000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 16387.1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 16.3871;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0163871;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 16387.1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 16.3871;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0000163871;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0000000000000163871;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1728);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/46656);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1.805);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * (1/28.875);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * (1/57.75);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic inch' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/231);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 28320000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 28320;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 28.32;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 28320000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 28316.8;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/35.315);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0000000000283168;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 1728;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/27);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 957.506;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 59.8442;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 29.9221;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic feet' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 7.481;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 764600000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 764600;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 764.6;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 764600000;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 764555;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1.308);
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000000764555;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 46656;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * 27;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 25852.7;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 1615.79;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 807.896;
        $('#volumeAfter').val(after);
    }
    if (unitA === 'cubic yard' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 201.974;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 29573.5;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 29.5735;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.0295735;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 29573.5;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 29.5735;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/33814);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * (1/33810000000000);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 1.805;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/958);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/25853);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * (1/16);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * (1/32);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/128);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 473176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 473.176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.473176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 473176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 473.176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000473176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.00000000000473176;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 28.875;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/59.844);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1616);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * (1/16);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * (1/2);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(pt) pint' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/8);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 946353;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 946.353;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 0.946353;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 946353;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 946.353;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/1057);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.000000000000946353;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 57.75;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/29.922);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/808);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 32;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 2;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(qt) quart' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * (1/4);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(mcL) microliter') {
        let before = $('#volumeBefore').val();
        let after = before * 3785000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(mL) milliliter') {
        let before = $('#volumeBefore').val();
        let after = before * 3785;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(L) liter') {
        let before = $('#volumeBefore').val();
        let after = before * 3.785;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic millimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 3785000;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic centimeter') {
        let before = $('#volumeBefore').val();
        let after = before * 3785;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic meter') {
        let before = $('#volumeBefore').val();
        let after = before * (1/264);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic kilometer') {
        let before = $('#volumeBefore').val();
        let after = before * 0.00000000000378541;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic inch') {
        let before = $('#volumeBefore').val();
        let after = before * 231;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic feet') {
        let before = $('#volumeBefore').val();
        let after = before * (1/7.481);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === 'cubic yard') {
        let before = $('#volumeBefore').val();
        let after = before * (1/202);
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(oz) ounce') {
        let before = $('#volumeBefore').val();
        let after = before * 128;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(pt) pint') {
        let before = $('#volumeBefore').val();
        let after = before * 8;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(qt) quart') {
        let before = $('#volumeBefore').val();
        let after = before * 4;
        $('#volumeAfter').val(after);
    }
    if (unitA === '(gal) gallon' && unitB === '(gal) gallon') {
        let before = $('#volumeBefore').val();
        let after = before * 1;
        $('#volumeAfter').val(after);
    }
}