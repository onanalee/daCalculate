function randomNumber() {
    $('#randomNum').empty();
    let valueMax = $('#valueMax').val();
    let valueMin = $('#valueMin').val();

    let result = Math.floor(Math.random() * Number(valueMax - valueMin + 1)) + Number(valueMin);
    $('#randomNum').append(result);
}

function generatePassword() {
    $('#password').empty();
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    let length = $('#length').val();

    let onlyUpper = lowercase + uppercase;
    let onlyNumber = lowercase + numbers;
    let onlySymbols = lowercase + symbols;
    let numberUpper = lowercase + uppercase + numbers;
    let numberSymbol = lowercase + symbols + numbers;
    let upperSymbol = lowercase + uppercase + symbols;
    let all = uppercase + lowercase + numbers + symbols;
    let password = '';

    let isNumber = document.getElementById("number");
    let isUpper = document.getElementById("upper");
    let isSpecial = document.getElementById("special");

    if (isNumber.checked === true && isUpper.checked === true && isSpecial.checked === true) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
    }


    // for (let index = 0; index < length; index++) {
    //     let character = Math.floor(Math.random() * all.length);
    //     password += all.substring(character, character + 1);
    // }


    $('#password').append(password);
}


function generateLotto() {
    //get random numbers
    var numbers = [];
    var ball = document.getElementsByClassName("ball");

    while (numbers.length < 6) {

        var random = Math.floor(Math.random() * 45) + 1;

        if (numbers.indexOf(random) == -1) {
            numbers.push(random);
        }
    }

    //sort numbers in array

    numbers.sort(function (a, b) {
        return a - b;
    });

    //color balls

    for (var i = 0; i < ball.length; i++) {

        ball[i].style.backgroundColor = "white";
        ball[i].style.color = "#3d3c3a";

        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] == parseInt(ball[i].innerHTML)) {
                ball[i].style.backgroundColor = "#fa8b60";
                ball[i].style.color = "white";
            }
        }
    }

    //add numbers to history

    var history = [];
    var historyDiv = document.getElementById("history");
    var para = document.createElement("p");
    history.push(numbers.join(", "));

    for (var k in history) {

        var node = document.createTextNode(history[k]);
        para.appendChild(node);
        historyDiv.appendChild(para);

    }

}