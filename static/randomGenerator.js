function reset(){
    $('#lottoHistory').empty();
}

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
    let symbols = '!"#$%&\'()*+,-./:;=?@^[\\]^_`{|}~';
    let length = $('#length').val();

    let onlyUpper = lowercase + uppercase;
    let onlyNumber = lowercase + numbers;
    let onlySymbols = lowercase + symbols;
    let numberUpper = lowercase + uppercase + numbers;
    let numberSymbols = lowercase + symbols + numbers;
    let upperSymbols = lowercase + uppercase + symbols;
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
    } else if (isNumber.checked === false && isUpper.checked === true && isSpecial.checked === false) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * onlyUpper.length);
            password += onlyUpper.substring(character, character + 1);
        }
    } else if (isNumber.checked === true && isUpper.checked === false && isSpecial.checked === false) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * onlyNumber.length);
            password += onlyNumber.substring(character, character + 1);
        }
    } else if (isNumber.checked === false && isUpper.checked === false && isSpecial.checked === true) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * onlySymbols.length);
            password += onlySymbols.substring(character, character + 1);
        }
    } else if (isNumber.checked === true && isUpper.checked === true && isSpecial.checked === false) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * numberUpper.length);
            password += numberUpper.substring(character, character + 1);
        }
    } else if (isNumber.checked === true && isUpper.checked === false && isSpecial.checked === true) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * numberSymbols.length);
            password += numberSymbols.substring(character, character + 1);
        }
    } else if (isNumber.checked === false && isUpper.checked === true && isSpecial.checked === true) {
        for (let index = 0; index < length; index++) {
            let character = Math.floor(Math.random() * upperSymbols.length);
            password += upperSymbols.substring(character, character + 1);
        }
    }
    $('#password').html(password);
}

function generateLotto() {
    //get random numbers
    let numbers = [];
    let ball = document.getElementsByClassName("ball");
    while (numbers.length < 6) {
        let random = Math.floor(Math.random() * 45) + 1;
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
    var historyDiv = document.getElementById("lottoHistory");
    var para = document.createElement("p");
    history.push(numbers.join(", "));

    for (var k in history) {
        var node = document.createTextNode(history[k]);
        para.appendChild(node);
        historyDiv.appendChild(para);
    }
}