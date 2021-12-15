var idImg = -1;
var maintainPageY = -1;


function loadThumbnails () {
  // Loads thumbnails
  document.getElementById("w0").src = thumbnail[0];
  document.getElementById("w1").src = thumbnail[1];
  document.getElementById("w2").src = thumbnail[2];
  document.getElementById("w3").src = thumbnail[3];
  document.getElementById("w4").src = thumbnail[4];
  document.getElementById("w5").src = thumbnail[5];
  document.getElementById("w6").src = thumbnail[6];
  document.getElementById("w7").src = thumbnail[7];
  document.getElementById("w8").src = thumbnail[8];
}


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
