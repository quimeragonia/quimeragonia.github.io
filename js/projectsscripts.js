// Pages:

// Main:    0
// General: 1
// Hazards: 2
// unused:  3

function shapenavigation(nextpage, lastpage) {
  let i;
  let buttonback = document.getElementsByClassName("button_back");

  if (nextpage == 0)
    for (i = 0; i < buttonback.length; i++)
        buttonback[i].disabled = true;
    else
      for (i = 1; i <= buttonback.length; i++)
        document.getElementById("button" + String(i)).disabled = true;


  setTimeout(function() {
    if (nextpage == 0)
      for (i = 0; i < buttonback.length; i++)
        buttonback[i].disabled = false;
    else
      for (i = 1; i <= buttonback.length; i++)
          document.getElementById("button" + String(i)).disabled = false;
    }, 3000);
  toggleapagador();
  if (nextpage == 0) { // voltar para menu principal
    // sair da última página
    document.getElementById("page" + String(lastpage)).classList.remove("animationpagetransition1");
    document.getElementById("page" + String(lastpage)).classList.remove("animationpagetransition0");
    document.getElementById("page" + String(lastpage)).offsetWidth;
    document.getElementById("page" + String(lastpage)).classList.add("animationpagetransition0");
    // entrar Main Screen
    document.getElementById("MainScreen").classList.remove("animationpagetransition1");
    document.getElementById("initialtext").classList.remove("animationpagetransition1");
    document.getElementById("MainScreen").classList.add("animationpagetransition1");
    document.getElementById("initialtext").classList.add("animationpagetransition1");
  }
  else if (nextpage > 0) { // ir para outras páginas
    // sair de Main Screen
    document.getElementById("MainScreen").classList.remove("animationpagetransition1");
    document.getElementById("initialtext").classList.remove("animationpagetransition1");
    document.getElementById("MainScreen").classList.remove("animationpagetransition0");
    document.getElementById("initialtext").classList.remove("animationpagetransition0");
    document.getElementById("MainScreen").classList.add("animationpagetransition0");
    document.getElementById("initialtext").classList.add("animationpagetransition0");
    // entrar próxima página
    document.getElementById("page" + String(nextpage)).classList.remove("animationpagetransition1");
    document.getElementById("page" + String(nextpage)).offsetWidth;
    document.getElementById("page" + String(nextpage)).classList.add("animationpagetransition1");
  }
}
function toggleapagador() {

    document.getElementById("apagador").classList.remove("animationapagador");
    document.getElementById("apagador").offsetWidth;
    document.getElementById("apagador").classList.add("animationapagador");
}

function translateshape() {
  let i, j;

	// TRANSLATE TO ENG
	if (lang == 0)	{
    // SHAPE ARENA
    for (i = 2, j = 0; i <= 12 && j <= 5; i += 2, j++)
        document.getElementById("projecttext" + String(j)).innerHTML = shapedesc[i];
    for (j = 6; j <=9 ; j++)
        document.getElementById("projecttext" + String(j)).innerHTML = shapedesc[14];
	}

  // TRANSLATE TO PTBR
	if (lang == 1)	{
    // SHAPE ARENA
    for (i = 3, j = 0; i <= 13 && j <= 5; i += 2, j++)
        document.getElementById("projecttext" + String(j)).innerHTML = shapedesc[i];
    for (j = 6; j <= 9; j++)
        document.getElementById("projecttext" + String(j)).innerHTML = shapedesc[15];
	}
}
