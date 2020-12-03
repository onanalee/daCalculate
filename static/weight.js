function convertWeight(){
    let unitA = $('#weightUnitA option:selected').val();
    let unitB = $('#weightUnitB option:selected').val();


    if (unitA === '(ng) nanogram' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000035274;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000000022046;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000984207;
        $('#weightAfter').val(after);
    }
    if (unitA === '(ng) nanogram' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000000000011023;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) micro' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(Kt) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000035274;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000022046;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00000000000098421;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mcg) microgram' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000000011023;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 0.000035274;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000022046;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00000000098421;
        $('#weightAfter').val(after);
    }
    if (unitA === '(mg) milligram' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000011023;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 0.035274;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 0.00220462;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00000098421;
        $('#weightAfter').val(after);
    }
    if (unitA === '(g) gram' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000011023;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 35.274;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2.20462;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000984207;
        $('#weightAfter').val(after);
    }
    if (unitA === '(kg) kilogram' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00110231;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 35274;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2204.62;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.984207;
        $('#weightAfter').val(after);
    }
    if (unitA === '(t) ton' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 1.10231;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 35274000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2204620;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 984.207;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Kt) kiloton' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 1102.31;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.001;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 35274000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2204620000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 984207;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Mt) megaton' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 1102310;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 1000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 1000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 1000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 35274000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2204620000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 984207000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(Gt) gigaton' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 1102310000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 28349500000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 28349500;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 28349.5;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 28.3495;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 0.0283495;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000283495;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000283495;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000000283495;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.0000000000000283495;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 0.0625;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000027902;
        $('#weightAfter').val(after);
    }
    if (unitA === '(oz) ounce' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00003125;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 453592000000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 453592000;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 453592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 453.592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 0.453592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000453592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000453592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000453592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000000453592;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 16;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * (1/2240);
        $('#weightAfter').val(after);
    }
    if (unitA === '(lb) pound' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * (1/2000);
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 1016050000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 1016050000000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 1016050000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 1016050;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 1016.05;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 1.01605;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00101605;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00000101605;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.00000000101605;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 35840;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2240;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
    if (unitA === 'long ton' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 1.12;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(ng) nanogram') {
        let before = $('#weightBefore').val();
        let after = before * 907185000000000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(mcg) microgram') {
        let before = $('#weightBefore').val();
        let after = before * 907185000000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(mg) milligram') {
        let before = $('#weightBefore').val();
        let after = before * 907185000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(g) gram') {
        let before = $('#weightBefore').val();
        let after = before * 907185;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(kg) kilogram') {
        let before = $('#weightBefore').val();
        let after = before * 907.185;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(t) ton') {
        let before = $('#weightBefore').val();
        let after = before * 0.907185;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(Kt) kiloton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000907185;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(Mt) megaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000907185;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(Gt) gigaton') {
        let before = $('#weightBefore').val();
        let after = before * 0.000000000907185;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(oz) ounce') {
        let before = $('#weightBefore').val();
        let after = before * 32000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === '(lb) pound') {
        let before = $('#weightBefore').val();
        let after = before * 2000;
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === 'long ton') {
        let before = $('#weightBefore').val();
        let after = before * (1/1.12);
        $('#weightAfter').val(after);
    }
    if (unitA === 'short ton' && unitB === 'short ton') {
        let before = $('#weightBefore').val();
        let after = before * 1;
        $('#weightAfter').val(after);
    }
}