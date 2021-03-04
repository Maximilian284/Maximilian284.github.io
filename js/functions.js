function writeText(text, px, x, y, color = "white", style = "normal") {
  let ctx = gameArea.context
  ctx.font = px + " " + style
  ctx.fillStyle = color
  ctx.fillText(text, x, y)
}

function drawImg(src, x, y, width, height) {
  let ctx = gameArea.context
  let image = new Image()
  image.src = src
  ctx.drawImage(image, x, y, width, height)
}

function drawLine(x1, y1, x2, y2, width, color = "white") {
  let ctx = gameArea.context
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = width
  ctx.strokeStyle = color
  ctx.stroke()
}

function drawRoundRectBorder(x, y, width, height, radius, lineWidth = "3", color = "white"){
  let ctx = gameArea.context
  if (width < 2 * radius) radius = width / 2
  if (height < 2 * radius) radius = height / 2
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + width, y, x + width, y + height, radius)
  ctx.arcTo(x + width, y + height, x, y + height, radius)
  ctx.arcTo(x, y + height, x, y, radius)
  ctx.arcTo(x, y, x + width, y, radius)
  ctx.closePath()
  ctx.lineWidth = lineWidth
  ctx.strokeStyle = color
  ctx.stroke()
}

function buttonClick(event, x, y, width, height) {
  x += gameArea.canvas.offsetLeft
  y += gameArea.canvas.offsetTop
  return event.x > x && event.x < x + width && event.y > y && event.y < y + height
}
