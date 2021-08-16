let cardNumber = getRandomInt(list.length)
let picked = []


let text = document.getElementById("cardText")
let penitence = document.getElementById("cardPenitence")
let resetButton = document.getElementById("reset")

function contains(n){
  for (let i = 0; i < picked.length; i++){
    if (picked[i] == n){
      return true
    }
  }

  return false
}

function next(){
  while (true){
    cardNumber = getRandomInt(list.length)
    
    if (contains(cardNumber) == false){
      picked.push(cardNumber)
      break
    }
  }

  if (picked.length == list.length){
    picked = []
  }
  
  text.innerHTML = list[cardNumber][0]
  penitence.innerHTML = "Penitenza: " + list[cardNumber][1] + " shot"
}
