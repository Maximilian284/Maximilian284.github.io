function renderPage(name){
  open("visualizer.html", "_self")

  name = name + ".pdf"

  localStorage.setItem("pdfName", name) 
}

function loadPDF(){
  let pdf = document.getElementById("pdf")

  pdfName = localStorage.getItem("pdfName")

  pdf.setAttribute("src", "./data/pdf/" + pdfName)
}
