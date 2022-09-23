//Declare Object
let player = {
    name: "Brandon",
    chips: 250,
    /*sayHello: function(){
        console.log("Hello")
    }*/
}

//Call a function in an object
//--> player.sayHello()

//Declare Array
let cards = []

//Variable
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""

//Set elements to variables
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name  + ":" +" $" + player.chips;

//Generate a random number from 1 to 13
function getRandomcard()
{
    let drawCard = Math.floor(Math.random()*13) + 1;//Floor to the nearest integer

    if(drawCard > 10)
    {
        return 10;
    }
    else if (drawCard === 1)
    return 11;
    else
    {
        return drawCard;
    }
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    //cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomcard();
        console.log("Draw new card");
        sum += card;
        cards.push(card);//Add to the end of the array
        //cards.pop(card); Remove last item in an array
        renderGame();
    }
}

function startGame(){
    isAlive = true;
    firstCard = getRandomcard();
    secondCard = getRandomcard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame();
}