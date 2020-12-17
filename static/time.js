function dateCalculate() {
    var date = new Date($('#dateInput').val());
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    console.log([day, month, year].join('/'));
}

let today = new Date();
let days = 1000 * 60 * 60 * 24;


// read all the books in the room

let dueBooks = new Date("December 31, 2021");
let	diffBooks = dueBooks - today;

let remBooks = diffBooks / days;


function convertTime() {
    let unitA = $('#timeUnitA option:selected').val();
    let unitB = $('#timeUnitB option:selected').val();

    if (unitA === 'nanoseconds' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 0.001;
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 0.000001;
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 0.000000001;
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 60000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 3600000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 86400000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 2628000000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 31540000000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 0.001;
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 0.000001;
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 60000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 3600000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 86400000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 2628000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 31540000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 0.001;
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 60000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 3600000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 86400000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 2628000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 31540000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 1000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 60);
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 3600);
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 86400);
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 2628000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 31540000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 60000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 60000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 60000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 60;
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 60);
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 1440);
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 43800);
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 525600);
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 3600000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 3600000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 3600000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 3600;
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * 60;
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 24);
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 730);
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 8760);
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 86400000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 86400000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 86400000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 86400;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * 1440;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * 24;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 30);
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 365);
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 2628000000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 2628000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 2628000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 2628000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * 43800;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * 730;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * 30;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 12);
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 31540000000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 31540000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 31540000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 31540000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * 525600;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * 8760;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * 365;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * 12;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'nanoseconds') {
        let before = $('#timeBefore').val();
        let after = before * 604800000000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'microseconds') {
        let before = $('#timeBefore').val();
        let after = before * 604800000000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'milliseconds') {
        let before = $('#timeBefore').val();
        let after = before * 604800000;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'seconds') {
        let before = $('#timeBefore').val();
        let after = before * 604800;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'minutes') {
        let before = $('#timeBefore').val();
        let after = before * 10080;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'hours') {
        let before = $('#timeBefore').val();
        let after = before * 168;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'days') {
        let before = $('#timeBefore').val();
        let after = before * 7;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * 1;
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'months') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 4.345);
        $('#timeAfter').val(after);
    }
    if (unitA === 'weeks' && unitB === 'years') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 52.143);
        $('#timeAfter').val(after);
    }
    if (unitA === 'nanoseconds' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 604800000000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'microseconds' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 604800000000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'milliseconds' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 604800000);
        $('#timeAfter').val(after);
    }
    if (unitA === 'seconds' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 604800);
        $('#timeAfter').val(after);
    }
    if (unitA === 'minutes' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 10080);
        $('#timeAfter').val(after);
    }
    if (unitA === 'hours' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 168);
        $('#timeAfter').val(after);
    }
    if (unitA === 'days' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * (1 / 7);
        $('#timeAfter').val(after);
    }
    if (unitA === 'months' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * 4.345;
        $('#timeAfter').val(after);
    }
    if (unitA === 'years' && unitB === 'weeks') {
        let before = $('#timeBefore').val();
        let after = before * 52.143;
        $('#timeAfter').val(after);
    }
}