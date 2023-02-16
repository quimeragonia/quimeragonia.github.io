// Starts in english
var lang = 0;
var maintainPageY = -1;

window.onload = function() {
  // MAIN PAGE
  // Detecta se o link ptbr foi dado para traduzir em português
  if (document.referrer == "https://quimeragonia.github.io/ptbr")
    lang = 1;

  // WORKS
  // Detecta se o link ptbr foi dado para traduzir em português
  if (document.referrer == "https://quimeragonia.github.io/referrers/worksptbr") {
    lang = 1;
    document.getElementById("works_title").innerHTML = workstext[1];
  }

  // SHAPE ARENA
  // Detecta se o link ptbr foi dado para traduzir em português
  if (document.referrer == "https://quimeragonia.github.io/referrers/shapearenaptbr")
    lang = 1;


  // TRADUÇÃO
  if (window.location.href == "file:///D:/github/quimeragonia.github.io/shapearena.html" || window.location.href == "https://quimeragonia.github.io/shapearena")
    translateshape();
  else {
    if (window.location.href == "file:///D:/github/quimeragonia.github.io/index.html" || window.location.href == "https://quimeranoxia.github.io/") {
      loadProjectThumbs();
     // translate();
    }
  // FUNCIONAMENTO
    loadWorks();
  }
}
function loadProjectThumbs() {
 for (let n = 0; n < 1 ;n++)
      document.getElementById("project" + String(n)).src = thumbproject[n];
}

function linktopage(nextpage) { // Formato: "/shapearena" ou "/works"
  if (lang === 0)
    window.location.replace(nextpage);
  else if (lang === 1)
    if (nextpage == "/")
      window.location.replace("/ptbr");
    else
      window.location.replace("/referrers" + nextpage + "ptbr");
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
  let i, j;
  let vP = document.getElementsByClassName("viewproject");
  let mT = document.getElementsByClassName("text_more");
  let bT = document.getElementsByClassName("text_back");

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
    // WORKS
    document.getElementById("works_title").innerHTML = workstext[0];
    for (i = 0; i < mT.length; i++)
        mT[i].innerHTML = misc[0];
    // PROJECTS
    for (i = 0; i < vP.length; i++)
        vP[i].innerHTML = misc[2];
    document.getElementById("text_projects0").innerHTML = titleproject[0];
    document.getElementById("text_projects1").innerHTML = shapedesc[0];
    document.getElementById("shapelinksteam").innerHTML = misc[4];
    // EXPERIENCE
    document.getElementById("exp_title").innerHTML = exp[0];
    document.getElementById("exp_jobtitle0").innerHTML = exp[2];
    document.getElementById("exp_jobdesc0").innerHTML = exp[4];
    document.getElementById("exp_jobtitle1").innerHTML = exp[6];
    document.getElementById("exp_jobdesc1").innerHTML = exp[8];
    document.getElementById("exp_jobtitle2").innerHTML = exp[10];
    document.getElementById("exp_jobdesc2").innerHTML = exp[12];
    document.getElementById("exp_jobtitle3").innerHTML = exp[14];
    document.getElementById("exp_jobdesc3").innerHTML = exp[16];
	document.getElementById("exp_jobtitle4").innerHTML = exp[18];
    document.getElementById("exp_jobdesc4").innerHTML = exp[20];
	document.getElementById("exp_jobtitle5").innerHTML = exp[22];
    document.getElementById("exp_jobdesc5").innerHTML = exp[24];
    // EDUCATION
    document.getElementById("educ_title").innerHTML = educ[0];
    document.getElementById("educ_major01").innerHTML = educ[2];
    document.getElementById("educ_major02").innerHTML = educ[4];
    document.getElementById("educ_major03").innerHTML = educ[6];
    document.getElementById("educ_desc01").innerHTML = educ[8];
    document.getElementById("educ_desc02").innerHTML = educ[8];
    document.getElementById("educ_desc03").innerHTML = educ[10];
    // SKILLS
    document.getElementById("skills_title").innerHTML = skills[0];
    // LANGUAGES
    for (i = 0, j = 0; i <= 6 && j <= 3; i += 2, j++)
         document.getElementById("text_lang" + String(j)).innerHTML = languages[i];
    // CONTACT
    document.getElementById("text_contact0").innerHTML = contact[0];
    document.getElementById("text_contact1").innerHTML = contact[2];
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
    // WORKS
    document.getElementById("works_title").innerHTML = workstext[1];
    for (i = 0; i < mT.length; i++)
        mT[i].innerHTML = misc[1];
    // PROJECTS
    for (i = 0; i < vP.length; i++)
        vP[i].innerHTML = misc[3];
    document.getElementById("text_projects0").innerHTML = titleproject[1];
    document.getElementById("text_projects1").innerHTML = shapedesc[1];
    document.getElementById("shapelinksteam").innerHTML = misc[5];
    // EXPERIENCE
    document.getElementById("exp_title").innerHTML = exp[1];
    document.getElementById("exp_jobtitle0").innerHTML = exp[3];
    document.getElementById("exp_jobdesc0").innerHTML = exp[5];
    document.getElementById("exp_jobtitle1").innerHTML = exp[7];
    document.getElementById("exp_jobdesc1").innerHTML = exp[9];
    document.getElementById("exp_jobtitle2").innerHTML = exp[11];
    document.getElementById("exp_jobdesc2").innerHTML = exp[13];
    document.getElementById("exp_jobtitle3").innerHTML = exp[15];
    document.getElementById("exp_jobdesc3").innerHTML = exp[17];
	document.getElementById("exp_jobtitle4").innerHTML = exp[19];
    document.getElementById("exp_jobdesc4").innerHTML = exp[21];
	document.getElementById("exp_jobtitle5").innerHTML = exp[23];
    document.getElementById("exp_jobdesc5").innerHTML = exp[25];
    // EDUCATION
    document.getElementById("educ_title").innerHTML = educ[1];
    document.getElementById("educ_major01").innerHTML = educ[3];
    document.getElementById("educ_major02").innerHTML = educ[5];
    document.getElementById("educ_major03").innerHTML = educ[7];
    document.getElementById("educ_desc01").innerHTML = educ[9];
    document.getElementById("educ_desc02").innerHTML = educ[9];
    document.getElementById("educ_desc03").innerHTML = educ[11];
    // SKILLS
    document.getElementById("skills_title").innerHTML = skills[1];
    // LANGUAGES
    for (i = 1, j = 0; i <= 7 && j <= 3; i += 2, j++)
         document.getElementById("text_lang" + String(j)).innerHTML = languages[i];
    // CONTACT
    document.getElementById("text_contact0").innerHTML = contact[1];
    document.getElementById("text_contact1").innerHTML = contact[3];
	}
}

