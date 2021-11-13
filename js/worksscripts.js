var idImg = -1;
var maintainPageY = -1;

function ampliar (i) {
  // Y atual da página
  maintainPageY = window.pageYOffset;

  // Hiding entire page + showing image
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "none";
  document.getElementById("imagemampliada").style.display = "flex";
  document.getElementById("fullimg").style.display = "flex";

  // Transition to black bg
  document.body.style.transition = "all 0.3s";
	document.body.style.backgroundColor = "black";
  document.body.style.overflow = "hidden";

  // img
	document.getElementById("fullimg").src = full[i];
  idImg = i;
}

function fechar () {
  // Hiding image + mantém Y da página + showing entire page
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "inline";
  window.scrollTo(0, maintainPageY);
  document.getElementById("imagemampliada").style.display = "none";
  document.getElementById("fullimg").style.display = "none";

  // Transition back to the page
  document.body.style.transition = "all 0.3s";
  document.body.style.backgroundColor = "white";
  document.body.style.overflow = "auto";
}
