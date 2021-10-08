// Starts in english
var lang = 0;

window.onload = function() {
//	currentPage('index', lang);
  translate();
}

function currentPage(i, language) {
	if (i == 'index') {
		document.getElementById("about_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "none";
		document.getElementById("design_container").style.display = "none";
		document.getElementById("index_container").style.display = "flex";

		document.body.style.overflowY = "hidden";
	}

	if (i == 'about') {
		document.getElementById("index_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "none";
		document.getElementById("design_container").style.display = "none";
		document.getElementById("about_container").style.display = "flex";

		document.body.style.overflowY = "hidden";
	}

	if (i == 'illustration') {
		document.getElementById("about_container").style.display = "none";
		document.getElementById("index_container").style.display = "none";
		document.getElementById("design_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "inline";

		illustTab('original')
		thumbnails_illust();
		document.getElementById("button_orig").disabled = true;
		document.getElementById("button_fan").disabled = false;

		document.body.style.overflowY = "scroll";
	}

	if (i == 'design') {
		document.getElementById("about_container").style.display = "none";
		document.getElementById("index_container").style.display = "none";
		document.getElementById("illustration_container").style.display = "none";
		document.getElementById("design_container").style.display = "inline";

		thumbnails_illust();

		document.body.style.overflowY = "scroll";
	}



	if (language != 0 && language != 1) {
		translate(language);
		document.getElementById("eng").disabled = true;
		document.getElementById("ptbr").disabled = false;
	}
}

function changeLanguage() {

  if (lang != 0 && lang != 1)
    lang = 0;
  else
    if (lang == 0){
      lang = 1;
    }
    else
      lang = 0;
  translate();
}

function translate() {

	// TRANSLATE TO ENG
	if (lang == 0)	{
    // NAVIGATION
    document.getElementById("navi_lang").innerHTML = navi[0];
		document.getElementById("navi_about").innerHTML = navi[2];
		document.getElementById("navi_experience").innerHTML = navi[4];
    document.getElementById("navi_education").innerHTML = navi[6];
    document.getElementById("navi_projects").innerHTML = navi[8];
    document.getElementById("navi_skills").innerHTML = navi[10];
    document.getElementById("navi_contact").innerHTML = navi[12];
    // NAME & OCCUPATION
    document.getElementById("myname").innerHTML = cover[0];
    document.getElementById("occ").innerHTML = cover[2];
    document.getElementById("cv").innerHTML = cover[4];
	}

  // TRANSLATE TO PTBR
	if (lang == 1)	{
    document.getElementById("navi_lang").innerHTML = navi[1];
		document.getElementById("navi_about").innerHTML = navi[3];
		document.getElementById("navi_experience").innerHTML = navi[5];
    document.getElementById("navi_education").innerHTML = navi[7];
    document.getElementById("navi_projects").innerHTML = navi[9];
    document.getElementById("navi_skills").innerHTML = navi[11];
    document.getElementById("navi_contact").innerHTML = navi[13];
    // NAME & OCCUPATION
    document.getElementById("myname").innerHTML = cover[1];
    document.getElementById("occ").innerHTML = cover[3];
    document.getElementById("cv").innerHTML = cover[5];
	}
}
