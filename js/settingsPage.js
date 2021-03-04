function drawSettingsPage(){
  drawArrowLeft(20, 20, 25, 50)

  writeText("Difficolta:", "35px", 565, 200)

  if (difficulty == 0){
    drawRoundRect(553, 256, 170, 38, 10)
    writeText("FACILE", "28px", 590, 285, "black")
  } else {
    writeText("FACILE", "28px", 590, 285)
    drawRoundRectBorder(553, 256, 170, 38, 10)
  }
  
  if (difficulty == 1){
    drawRoundRect(553, 316, 170, 38, 10)
    writeText("NORMALE", "28px", 570, 345, "black")
  } else {
    writeText("NORMALE", "28px", 570, 345)
    drawRoundRectBorder(553, 316, 170, 38, 10)
  }
  
  if (difficulty == 2){
    drawRoundRect(553, 376, 170, 38, 10)
    writeText("DIFFICILE", "28px", 572, 405, "black")
  } else {
    writeText("DIFFICILE", "28px", 572, 405)
    drawRoundRectBorder(553, 376, 170, 38, 10)
  }
}

gameArea.canvas.addEventListener("click", (event) => {
  if (settingsPage == true){
    if (buttonClick(event, 20, 20, 25, 50)){ // INDIETRO
      startPage = true
      settingsPage = false
    }

    if(buttonClick(event, 553, 256, 170, 38)){ // FACILE
      difficulty = 0
    }

    if (buttonClick(event, 553, 316, 170, 38)){ // NORMALE
      difficulty = 1
    }

    if (buttonClick(event, 553, 376, 170, 38)){ // DIFFICILE
      difficulty = 2
    }
  }
}) 