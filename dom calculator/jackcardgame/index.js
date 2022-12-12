
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
//object
let player = {
     name: "Per",
     chip: Math.floor(Math.random()*1000) + 100
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$" + player.chip
//create a function of getting random number for card

console.log(cards)

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1//1-13//floor covert random into whole number
    if(randomNumber > 10){
    return 10;
    }else if(randomNumber ===1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: " 
   for(let i=0; i<cards.length; i++){
    cardEl.textContent += cards[i] + " " //increase the card length
   }
    sumEl.textContent = "Sum: " + sum; 
if(sum < 20) {
    message="Do you want to draw a new card?"
   
}else if(sum === 20){
    message="Wohooo! You've got BlackJack!"
    hasBlackJack = true;
    
}else{
    message="You are out of game!"
    isAlive = false;
}
messageEl.textContent = message;
}
function newCard(){
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
  
}
// let age = 23;
// if(age < 21){
//     console.log("You cannot enter the club!")
// }else if(age === 22){
//     console.log("Welcome!!")
// }else{
//     console.log("Your also welcome u pervy bitch")
// }
console.log(hasBlackJack)
console.log(isAlive)
console.log(message)
 