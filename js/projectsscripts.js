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
      for (i = 1; i <= 3; i++)
        document.getElementById("button" + String(i)).disabled = true;


  setTimeout(function() {
    if (nextpage == 0)
      for (i = 0; i < buttonback.length; i++)
        buttonback[i].disabled = false;
    else
      for (i = 1; i <= 3; i++)
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
  if (nextpage > 0) { // ir para outras páginas
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
//    document.getElementById("MainScreen").classList.remove("animationpagetransition0");
//    document.getElementById("initialtext").classList.remove("animationpagetransition0");
    document.getElementById("apagador").offsetWidth;
    document.getElementById("apagador").classList.add("animationapagador");
//    document.getElementById("MainScreen").classList.add("animationpagetransition0");
//    document.getElementById("initialtext").classList.add("animationpagetransition0");

}

function translateshape() {

	// TRANSLATE TO ENG
	if (lang == 0)	{
    // DESC
    document.getElementById("navi_lang").innerHTML = navi[0];
		document.getElementById("navi_about").innerHTML = navi[2];
    document.getElementById("navi_works").innerHTML = navi[4];
		document.getElementById("navi_experience").innerHTML = navi[6];
    document.getElementById("navi_education").innerHTML = navi[8];
    document.getElementById("navi_projects").innerHTML = navi[10];
    document.getElementById("navi_skills").innerHTML = navi[12];
    document.getElementById("navi_contact").innerHTML = navi[14];
    // NAME & OCCUPATION
    document.getElementById("shapearenadesc").innerHTML = shapedesc[0];
    // SHAPE: INITIAL TEXT
	}

  // TRANSLATE TO PTBR
	if (lang == 1)	{
    document.getElementById("navi_lang").innerHTML = navi[1];
		document.getElementById("navi_about").innerHTML = navi[3];
    document.getElementById("navi_works").innerHTML = navi[5];
		document.getElementById("navi_experience").innerHTML = navi[7];
    document.getElementById("navi_education").innerHTML = navi[9];
    document.getElementById("navi_projects").innerHTML = navi[11];
    document.getElementById("navi_skills").innerHTML = navi[13];
    document.getElementById("navi_contact").innerHTML = navi[15];
    // NAME & OCCUPATION
    document.getElementById("myname").innerHTML = shapedesc[1];
    // SHAPE: INITIAL TEXT
	}
}
