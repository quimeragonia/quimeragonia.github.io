
function test(i) {
  if (i == 1) {

    document.getElementById("MainScreen").style.display ="block";
    document.getElementById("initialtext").style.display ="block";
  }

  if (i == 2)
    document.getElementById("MainScreen").style.display ="none";


}

function shapenavigation(n) {
  //toggleapagador();
  document.getElementById("initialtext").opacity = "none";
  document.getElementById("MainScreen").opacity = "none";
  let i;
  if (n == 0) { // voltar para menu principal
    document.getElementById("MainScreen").style.display ="block";
    document.getElementById("initialtext").style.display ="block";
  }
  if (n == 1) { // GENERAL
    i = 0;
    document.getElementById("general" + String(i)).style.display = "inline-block";
//    for (i = 0; i < 7; n++) {
//        document.getElementById("general" + String(i)).style.display = "inline-block";
//      }
//    for (i = 0; i < 6; n++) {
//        document.getElementById("hazards" + String(i)).style.display = "none";
//      }
//    for (i = 0; i < 1 ;n++) {
//        document.getElementById("project" + String(i)).style.display = "none";
//      }
    }
  if (n == 20) { // HAZARDS
    for (i = 0; i < 7; n++) {
        document.getElementById("general" + String(n)).style.display = "none";
      }
    for (i = 0; i < 9; n++) {
        document.getElementById("hazards" + String(n)).style.display = "inline-block";
      }
    for (i = 0; i < 1 ;n++) {
        document.getElementById("project" + String(n)).style.display = "none";
      }
    }

}

function toggleapagador() {
  document.getElementById("apagador").classList.remove("animationapagador");
  document.getElementById("MainScreen").classList.remove("animationbgsumindo");
  document.getElementById("apagador").offsetWidth;
  document.getElementById("apagador").classList.add("animationapagador");
  document.getElementById("MainScreen").classList.add("animationbgsumindo");
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
