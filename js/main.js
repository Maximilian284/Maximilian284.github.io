let startPage = true
let gamePage = false
let settingsPage = false

let difficulty = 0 // {"0": "Easy", "1": "Medium", "2": "Difficult"}

let gameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 1280
    this.canvas.height = 720  
    this.context = this.canvas.getContext("2d")
    document.body.insertBefore(this.canvas, document.body.childNodes[2])
    this.interval = setInterval(update, 20)
  }, 
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  stop : function() {
    clearInterval(this.interval)
  }
}

function start() {
  gameArea.start()
}

function update() {
  gameArea.clear()

  if (startPage == true){
    drawStartPage()
  } 

  if (gamePage == true){
    drawGamePage()
  }

  if (settingsPage == true){
    drawSettingsPage()
  }

  // DEBUG
  //drawLine(0, 0, 1280, 720, 1, "white")
  //drawLine(1280, 0, 0, 720, 1, "white")
  //drawLine(640, 0, 640, 720, 1, "white")
  //drawLine(0, 360, 1280, 360, 1, "white")
}

document.addEventListener("keydown", (event) => {
})

document.addEventListener("keyup", (event) => {
})