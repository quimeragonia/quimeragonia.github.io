// Starts in english
var lang = 0;
var maintainPageY = -1;

window.onload = function() {

  if (window.location.href == "file:///D:/github/quimeranoxia.github.io/shapearena.html" || window.location.href == "https://quimeranoxia.github.io/shapearena")
    translateshape();
  else {
  loadWorks();
  // Detecta se o link ptbr foi dado para traduzir em português
  if (document.referrer == "https://quimeranoxia.github.io/ptbr")
    lang = 1;
  translate();
  }
}

function mobilemenuabrir () {
  // Y atual da página
  maintainPageY = window.pageYOffset;
  // Hides entire page
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "none";
  // Transition to white bg
  document.body.style.transition = "all 0.3s";
	document.body.style.backgroundColor = "black";
}

function mobilemenufechar () {
  // Displays back entire page
  document.getElementById("allpage").style.transition = "all 0.3s";
  document.getElementById("allpage").style.display = "inline";
  // Mantém Y da página (precisa estar nessa ordem depois das outras coisas!)
  window.scrollTo(0, maintainPageY);
  // Fade out back to the page
  document.body.style.transition = "none";
  document.body.style.backgroundColor = "transparent";
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

  if (window.location.href == "file:///D:/github/quimeranoxia.github.io/shapearena.html" || window.location.href == "https://quimeranoxia.github.io/shapearena")
        translateshape();
  else {
        translate();
  }
}

function translate() {

	// TRANSLATE TO ENG
	if (lang == 0)	{
    // NAVIGATION
    document.getElementById("navi_lang").innerHTML = navi[0];
		document.getElementById("navi_about").innerHTML = navi[2];
    document.getElementById("navi_works").innerHTML = navi[4];
		document.getElementById("navi_experience").innerHTML = navi[6];
    document.getElementById("navi_education").innerHTML = navi[8];
    document.getElementById("navi_projects").innerHTML = navi[10];
    document.getElementById("navi_skills").innerHTML = navi[12];
    document.getElementById("navi_contact").innerHTML = navi[14];
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
    document.getElementById("navi_works").innerHTML = navi[5];
		document.getElementById("navi_experience").innerHTML = navi[7];
    document.getElementById("navi_education").innerHTML = navi[9];
    document.getElementById("navi_projects").innerHTML = navi[11];
    document.getElementById("navi_skills").innerHTML = navi[13];
    document.getElementById("navi_contact").innerHTML = navi[15];
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
