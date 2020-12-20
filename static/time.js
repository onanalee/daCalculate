//CALENDAR CALCULATE

const today = new Date();
const unix = 1000 * 60 * 60 * 24;
let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// ($('#startDate').val(today.toDateInputValue()));
// $(document).ready( function() {
//     $('#startDate').val(today.toDateInputValue());
// });
// Date.prototype.toDateInputValue = (function() {
//     var local = new Date(this);
//     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
//     return local.toJSON().slice(0,10);
// });
$(document).ready(function () {
    document.getElementById('startDate').valueAsDate = today;
});


function dateCalculate() {
    let startDate = new Date($('#startDate').val());
    let endDate = new Date($('#endDate').val());
    let difference = endDate - startDate;
    console.log(difference);
    let result = difference / unix;
    console.log(result);
    ($('#result1').val(result));
}

function addDate() {
    let startDate = new Date($('#startDate2').val());
    let unixTime = (startDate.getTime()) / 1000;
    let days = $('#days').val();
    let weeks = $('#weeks').val();
    let total = Number(weeks * 7) + Number(days);


    if ($('#plusMinus').val() === '+ (Add)') {
        let final = Number(unixTime) + Number((total * 60 * 60 * 24));

        // Convert timestamp to milliseconds
        let date = new Date(final * 1000);

        let year = date.getFullYear();
        let month = monthsArray[date.getMonth()];
        let day = date.getDate();

        // Display date time in MM-dd-yyyy format
        let result = month + '-' + day + '-' + year;
        ($('#result').val(result));
    } else {
        let final = Number(unixTime) - Number((total * 60 * 60 * 24));

        // Convert timestamp to milliseconds
        let date = new Date(final * 1000);

        let year = date.getFullYear();
        let month = monthsArray[date.getMonth()];
        let day = date.getDate();

        // Display date time in MM-dd-yyyy format
        let result = month + '-' + day + '-' + year;
        ($('#result').val(result));
    }
}


//TIME ZONES

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */





//if country has one time zone, then select only country.
//if country has multiple time zones, then specify city.


// Date.prototype.stdTimezoneOffset = function () {
//     var jan = new Date(this.getFullYear(), 0, 1);
//     var jul = new Date(this.getFullYear(), 6, 1);
//     return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
// }
//
// Date.prototype.isDstObserved = function () {
//     return this.getTimezoneOffset() < this.stdTimezoneOffset();
// }
//
// var today2 = new Date();
// if (today2.isDstObserved()) {
//     alert ("Daylight saving time!");
// } else {
//     alert("no daylight saving")
// }

//
// const d = new Date()
// console.log("d", d);
//
// // convert to msec since Jan 1 1970
// const localTime = d.getTime()
// console.log("localTime", localTime);
//
// // obtain local UTC offset and convert to msec
// const localOffset = d.getTimezoneOffset() * 60 * 1000
// console.log("localOffset", localOffset);
//
// // obtain UTC time in msec
// const utcTime = localTime + localOffset
// console.log("utcTime", utcTime);
//
// // Get time zone offset for NY, USA
// const getEstOffset = () => {
//     const stdTimezoneOffset = () => {
//         var jan = new Date(today.getFullYear(), 0, 1)
//         var jul = new Date(today.getFullYear(), 6, 1)
//         return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
//     }
//
//     var today = new Date()
//
//     const isDstObserved = (today, Date) => {
//         return today.getTimezoneOffset() < stdTimezoneOffset()
//     }
//
//     if (isDstObserved(today)) {
//         return -4
//     } else {
//         return -5
//     }
//
// }
//
// const getPstOffset = () => {
//     const stdTimezoneOffset = () => {
//         var jan = new Date(today.getFullYear(), 0, 1)
//         var jul = new Date(today.getFullYear(), 6, 1)
//         return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
//     }
//
//
//     const isDstObserved = (today, Date) => {
//         return today.getTimezoneOffset() < stdTimezoneOffset()
//     }
//
//     if (isDstObserved(today)) {
//         return -7
//     } else {
//         return -8
//     }
// }
//
// // obtain and add destination's UTC time offset
// const estOffset = getEstOffset()
// console.log("estOffset", estOffset)
// const usa = utcTime + (60 * 60 * 1000 * estOffset)
// console.log("usa", usa)
// const pstOffset = getPstOffset()
// console.log("pstOffset", pstOffset);
// const la = utcTime + (60 * 60 * 1000 * pstOffset);
// console.log("la", la);
//
// const laTime = new Date(la);
// console.log("laTime", laTime);
//
//
// let year = laTime.getFullYear();
// let month = monthsArray[laTime.getMonth()];
// let day = laTime.getDate();
// let hour = laTime.getHours();
// let minute = laTime.getMinutes();
// // Display date time in MM-dd-yyyy format
// let result = `${hour}:${minute} <br>
//                 ${month} - ${day} - ${year}`;
//
// $(document).ready(function () {
//     ($('#timezoneA').append(result));
// })
//
// // convert msec value to date string
// const nd = new Date(usa)
// console.log("nd", nd)

//https://codepen.io/Sinnemanie/pen/qNEXXX


// Date.prototype.stdTimezoneOffset = function () {
//     var jan = new Date(this.getFullYear(), 0, 1);
//     var jul = new Date(this.getFullYear(), 6, 1);
//     return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
// }
//
// Date.prototype.isDstObserved = function () {
//     return this.getTimezoneOffset() < this.stdTimezoneOffset();
// }
//
// var today = new Date();
// if (today.isDstObserved()) {
//     alert("Daylight saving time!");
// }

//TIME UNIT CONVERTER

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