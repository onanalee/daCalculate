function exchange() {
    $.ajax({
        type: 'GET',
        url: 'https://api.exchangeratesapi.io/latest?base=USD',
        data: {},
        success: function (response) {
            let krw= response['rates']['KRW'];
            console.log(krw);
            // let dream = randomDream['dream'];
            // let title = randomDream['title'];
            //
            // $('#random_dream').empty()
            // $('#dream_video').empty()
            //
            // let showTextDream = `<div class="randomDream"> Title: ${title} <br>
            // Content: ${dream}
            //  </div> <br><br>`;
            // $('#random_dream').append(showTextDream);
        }
    })
};