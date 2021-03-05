function drawStartPage(){
  if (game == false){
    drawRoundRectBorder(473, 268, 332, 55, 10)
    writeText("NUOVA PARTITA", "40px", 485, 310)
  } else {
    drawRoundRectBorder(440, 268, 402, 55, 10)
    writeText("CONTINUA PARTITA", "40px", 452, 310)
  }
  
  drawRoundRectBorder(489, 350, 303, 55, 10)
  writeText("IMPOSTAZIONI", "40px", 500, 390)
}

gameArea.canvas.addEventListener("click", (event) => {
  if (startPage == true){
    if (buttonClick(event, 473, 268, 330, 55) && game == false){ // NUOVA PARTITA 
      startPage = false
      gamePage = true
      game = true
      intro = true
    }

    if (buttonClick(event, 443, 268, 402, 55) && game == true){ // CONTINUA PARTITA
      startPage = false
      gamePage = true
    }

    if (buttonClick(event, 489, 350, 303, 55)){ // IMPOSTAZIONI
      startPage = false
      settingsPage = true
    }
  }
}) 