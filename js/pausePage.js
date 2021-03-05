function drawPausePage() {
  drawRoundRectBorder(523, 230, 222, 51, 10)
  writeText("CONTINUA", "38px", 535, 270)

  drawRoundRectBorder(428, 310, 412, 51, 10)
  writeText("RICOMINCIA PARTITA", "38px", 440, 350)

  drawRoundRectBorder(478, 390, 312, 51, 10)
  writeText("MENU' INIZIALE", "38px", 490, 430)
}

gameArea.canvas.addEventListener("click", (event) => {
  if (pausePage == true){
    if (buttonClick(event, 523, 230, 222, 51)){
      pausePage = false
      gamePage = true
    }

    if (buttonClick(event, 428, 310, 412, 51)){
      pausePage = false
      gamePage = true
      intro = true
      storyPartOne = false
      storyPartTwo = false
    }
    
    if (buttonClick(event, 478, 390, 312, 51)){
      pausePage = false
      startPage = true
    }
  }
}) 