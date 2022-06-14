
const names = ["Guadalupe", "Ollie", "Aki"]
let cards = []


function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)

}

return cards

}



function countDown(number){
    while(number > 0){
        console.log(number)
        number -= 1
        
    }
    console.log(number)
}

// countDown(10)

// while(count Down> 0){
//     console.log(countDown)
//     countDown--
// }


