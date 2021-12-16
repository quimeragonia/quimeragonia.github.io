var idImg = -1;
var maintainPageY = -1;



// IMPORTANTE: fazer uma função que já deixa todas as imagens full carregadas, e aí a ampliar só ativa o display delas. pro usuário não esperar elas carregarem lol

function loadThumbnails () {
  // Loads thumbnails
  document.getElementById("img0").src = thumbnail[0];
  document.getElementById("img1").src = thumbnail[1];
  document.getElementById("img2").src = thumbnail[2];
  document.getElementById("img3").src = thumbnail[3];
  document.getElementById("img4").src = thumbnail[4];
  document.getElementById("img5").src = thumbnail[5];
  document.getElementById("img6").src = thumbnail[6];
  document.getElementById("img7").src = thumbnail[7];
  document.getElementById("img8").src = thumbnail[8];
}


function ampliar (i) {
  // Y atual da página
  maintainPageY = window.pageYOffset;



  // Hiding entire page + showing image

  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "none";
  document.getElementById("imagemampliada").style.display = "flex";
  document.getElementById("fullimg").style.transition = "all 0.3s";
  document.getElementById("fullimg").style.display = "flex";

  // Transition to black bg
  document.body.style.transition = "all 0.3s";
	document.body.style.backgroundColor = "black";

  // img
	document.getElementById("fullimg").src = full[i];
  idImg = i;
}

function fechar () {
  // Hiding image + mantém Y da página + showing entire page
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "inline";
  window.scrollTo(0, maintainPageY);
  document.getElementById("fullimg").style.transition = "all 0.3s";
  document.getElementById("imagemampliada").style.transition = "all 0.3s";
  document.getElementById("imagemampliada").style.display = "none";
  document.getElementById("fullimg").style.display = "none";

  // Transition back to the page
  document.body.style.transition = "none";
  document.body.style.backgroundColor = "transparent";
}
