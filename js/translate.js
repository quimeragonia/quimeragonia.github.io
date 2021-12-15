// Starts in english
var lang = 0;

window.onload = function() {
//	currentPage('index', lang);
//  if (document.referrer.length != 0)
//    lang = 1;
  loadThumbnails();
    if (document.referrer == "https://quimeranoxia.github.io/ptbr")
      lang = 1;
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
    // ABOUT
    document.getElementById("abt_title").innerHTML = about[0];
    document.getElementById("abt_text").innerHTML = about[2];
    // EXPERIENCE
    document.getElementById("exp_title").innerHTML = exp[0];
    document.getElementById("exp_employer0").innerHTML = exp[8];
    document.getElementById("exp_jobtitle0").innerHTML = exp[4];
    document.getElementById("exp_jobdesc0").innerHTML = exp[6];
    // EDUCATION
    document.getElementById("educ_title").innerHTML = educ[0];
    document.getElementById("educ_major01").innerHTML = educ[2];
    document.getElementById("educ_major02").innerHTML = educ[4];
    document.getElementById("educ_major03").innerHTML = educ[6];
    document.getElementById("educ_desc01").innerHTML = educ[8];
    document.getElementById("educ_desc02").innerHTML = educ[8];
    document.getElementById("educ_desc03").innerHTML = educ[10];

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
    // ABOUT
    document.getElementById("abt_title").innerHTML = about[1];
    document.getElementById("abt_text").innerHTML = about[3];
    // EXPERIENCE
    document.getElementById("exp_title").innerHTML = exp[1];
    document.getElementById("exp_employer0").innerHTML = exp[8];
    document.getElementById("exp_jobtitle0").innerHTML = exp[5];
    document.getElementById("exp_jobdesc0").innerHTML = exp[7];
    // EDUCATION
    document.getElementById("educ_title").innerHTML = educ[1];
    document.getElementById("educ_major01").innerHTML = educ[3];
    document.getElementById("educ_major02").innerHTML = educ[5];
    document.getElementById("educ_major03").innerHTML = educ[7];
    document.getElementById("educ_desc01").innerHTML = educ[9];
    document.getElementById("educ_desc02").innerHTML = educ[9];
    document.getElementById("educ_desc03").innerHTML = educ[11];
	}
}
