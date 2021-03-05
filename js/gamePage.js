function drawGamePage(){
  drawRect(1223, 20, 15, 45)
  drawRect(1248, 20, 15, 45)

  if (intro == true){
    gameIntro()
  }

  if (storyPartOne == true){
    gamePartOne()
  }
}

// GAME
function gameIntro(){
  writeText("STORIA:", "38px", 565, 180)

  writeText("Sei stato mandato in spedizione al Polo Nord con un equipaggio", "30px", 210, 250)
  writeText("di 5 persone e tutti i tuoi colleghi risultano dispersi. Ora ti trovi solo.", "30px", 210, 290)
  writeText("Oggi e' l'1 di Dicembre e mancano solo 25 giorni a Natale,", "30px", 210, 330)
  writeText("ma hai promesso a tua figlia che saresti tornato a casa in tempo per il 25", "30px", 210, 370)
  writeText("per farle una sorpresa. Non bisogna mancare una promessa cosi' importante!", "30px", 210, 410)

  writeText("AVANTI", "30px", 1125, 690)
  drawArrowRight(1243, 662, 18, 36, 6)
}

function gamePartOne(){

}

gameArea.canvas.addEventListener("click", (event) => {
  if (gamePage == true){
    if (buttonClick(event, 1223, 20, 35, 45)){
      pausePage = true
      gamePage = false
    }

    if (buttonClick(event, 1125, 662, 136, 36) && intro == true){ // AVANTI (intro)
      intro = false
      storyPartOne = true
    }
  }
}) 