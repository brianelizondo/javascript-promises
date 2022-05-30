$(document).ready(function(){
    function showResponse(id_Div, resp){
        let $div_response = $(`#${id_Div}`);
        $div_response.append(`<p>${resp}</p>`);
    }

    // Part 1: Number Facts
    // 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number
    let div_show_1_1 = "part_1_1";
    let numberFactsURL = "http://numbersapi.com/random";
    let numberFactsPromise = axios.get(numberFactsURL);
    
    numberFactsPromise
        .then(resp => showResponse(div_show_1_1, resp.data))
        .catch(err => showResponse(div_show_1_1, err));


    // 2. Figure out how to get data on multiple numbers in a single request.
    // Make that request and when you get the data back, put all of the number facts on the page
    let div_show_1_2 = "part_1_2";
    let num_start = parseInt(Math.random() * 100);
    let num_end = num_start + 4;

    let multipleNumbersURL = `http://numbersapi.com/${num_start}..${num_end}`;
    let multipleNumbersPromise = axios.get(multipleNumbersURL);
    
    multipleNumbersPromise
        .then(resp => {
            for(var key in resp.data){
                showResponse(div_show_1_2, resp.data[key])
            }
        })
        .catch(err => showResponse(div_show_1_2, err));


    // 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. 
    // It’s okay if some of the facts are repeats.    
    let div_show_1_3 = "part_1_3";
    let getFactsURL = "http://numbersapi.com/random";
    let getFactsPromise = [];

    for (let i = 1; i < 5; i++){
        getFactsPromise.push(axios.get(getFactsURL));
    }
        
    Promise.all(getFactsPromise)
        .then(getFactsArr => (
            getFactsArr.forEach(resp => showResponse(div_show_1_3, resp.data))
        ))
        .catch(err => showResponse(div_show_1_3, err));


    // Part 2: Deck of Cards
    // 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. 
    // Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
    let div_show_2_1 = "part_2_1";
    let pickCardURL = "http://deckofcardsapi.com/api/deck/new/draw/?count=1";
    let pickCardPromise = axios.get(pickCardURL);

    pickCardPromise
        .then(resp => {
            let card_data = `${resp.data.cards[0].value} ${resp.data.cards[0].suit}`;
            showResponse(div_show_2_1, card_data);
            console.log(card_data);
        })
        .catch(err => showResponse(div_show_2_1, err));







});