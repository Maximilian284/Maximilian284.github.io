function drawStartPage(){
  drawRoundRectBorder(473, 268, 330, 55, 10)
  writeText("NUOVA PARTITA", "40px", 485, 310)
  
  drawRoundRectBorder(489, 350, 303, 55, 10)
  writeText("IMPOSTAZIONI", "40px", 500, 390)
}

gameArea.canvas.addEventListener("click", (event) => {
  if (startPage == true){
    if (buttonClick(event, 473, 268, 330, 55)){ // NUOVA PARTITA
      startPage = false
      gamePage = true
    }

    if (buttonClick(event, 489, 350, 303, 55)){ // IMPOSTAZIONI
      startPage = false
      settingsPage = true
    }
  }
}) 