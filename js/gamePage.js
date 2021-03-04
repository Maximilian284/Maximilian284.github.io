function drawGamePage(){
  drawArrowLeft(20, 20, 25, 50)
}

gameArea.canvas.addEventListener("click", (event) => {
  if (gamePage == true){
    if (buttonClick(event, 20, 20, 25, 50)){ // INDIETRO
      startPage = true
      gamePage = false
    }

    
  }
}) 