function convertPressure(){
    let unitA = $('#pressureUnitA option:selected').val();
    let unitB = $('#pressureUnitB option:selected').val();

    if (unitA === 'Bar' && unitB === 'Bar') {
        let before = $('#pressureBefore').val();
        let after = before * 1;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Bar' && unitB === 'Pascal') {
        let before = $('#pressureBefore').val();
        let after = before * 100000;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Bar' && unitB === 'pound per square inch') {
        let before = $('#pressureBefore').val();
        let after = before * 14.5038;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Bar' && unitB === 'Torr') {
        let before = $('#pressureBefore').val();
        let after = before * 750.062;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Pascal' && unitB === 'Bar') {
        let before = $('#pressureBefore').val();
        let after = before * 0.00001;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Pascal' && unitB === 'Pascal') {
        let before = $('#pressureBefore').val();
        let after = before * 1;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Pascal' && unitB === 'pound per square inch') {
        let before = $('#pressureBefore').val();
        let after = before * (1/6895);
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Pascal' && unitB === 'Torr') {
        let before = $('#pressureBefore').val();
        let after = before * (1/133);
        $('#pressureAfter').val(after);
    }
    if (unitA === 'pound per square inch' && unitB === 'Bar') {
        let before = $('#pressureBefore').val();
        let after = before * 0.0689476;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'pound per square inch' && unitB === 'Pascal') {
        let before = $('#pressureBefore').val();
        let after = before * 6894.76;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'pound per square inch' && unitB === 'pound per square inch') {
        let before = $('#pressureBefore').val();
        let after = before * 1;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'pound per square inch' && unitB === 'Torr') {
        let before = $('#pressureBefore').val();
        let after = before * 51.7149;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Torr' && unitB === 'Bar') {
        let before = $('#pressureBefore').val();
        let after = before * (1/750);
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Torr' && unitB === 'Pascal') {
        let before = $('#pressureBefore').val();
        let after = before * 133.322;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Torr' && unitB === 'pound per square inch') {
        let before = $('#pressureBefore').val();
        let after = before * 0.0193368;
        $('#pressureAfter').val(after);
    }
    if (unitA === 'Torr' && unitB === 'Torr') {
        let before = $('#pressureBefore').val();
        let after = before * 1;
        $('#pressureAfter').val(after);
    }



}