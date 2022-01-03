function test(i) {
  if (i == 1)
    document.getElementById("MainScreen").style.display ="block";

  if (i == 2)
    document.getElementById("MainScreen").style.display ="none";


}

function loadShapeAnims () {
  let n;
  for (n = 0; n < 7; n++)
      document.getElementById("general" + String(n)).src = thumbnail[n];
  for (n = 0; n < 9; n++)
      document.getElementById("hazards" + String(n)).src = thumbnail[n];
  for (n = 0; n < 1 ;n++)
      document.getElementById("project" + String(n)).src = thumbproject[n];
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

	}
}

function generatelist0() {



}
