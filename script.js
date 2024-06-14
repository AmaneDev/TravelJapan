function openHamburgerSidebar(){  /*fce pro otevreni sidebaru (hamburger)*/
  const hamburgerItemsSidebar = document.getElementById("hamButtons");
  hamburgerItemsSidebar.style.display = "flex";
}
function closeHamburgerSidebar(){ /*fce (opet volana onclickem) pro zavreni sidebaru (display propertie se zmeni na none)*/
  const hamburgerItemsSidebar = document.getElementById("hamButtons");
  hamburgerItemsSidebar.style.display = "none";
}

/* kdyz scrolnu dolu, navbar se skryje, kdyz scrolnu nahoru, odkryje - odkryti je jen transform (top-bottom...) */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "5rem";
    document.getElementById("navbar").style.opacity = "100%";
} else {
    document.getElementById("navbar").style.top = "-5rem"; /*meni top values*/
    document.getElementById("navbar").style.opacity = "-100%";  /*meneni opacity values v css*/
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function () {
  const cardImages = document.querySelectorAll('.VideoCardImage');
  const cardTexts = document.querySelectorAll('.containerTextEmojiCard');
  const dots = document.querySelectorAll('.vidCardImg img');
  let currentCard = 0;

  function switchCard() {
    // na skryti aktualniho obrazku a textu
    cardImages[currentCard].classList.add('vidCardNotActive');
    cardTexts[currentCard].classList.add('vidCardNotActive');

    // updatuje aktualni index karty
    currentCard = (currentCard + 1) % cardImages.length;

    // removne skryti obrazku a textu oddelanim non-active classy, zobrazeni probehne dle noveho indexu
    cardImages[currentCard].classList.remove('vidCardNotActive');
    cardTexts[currentCard].classList.remove('vidCardNotActive');

    // fce updatujici progress bar
    updateDots();
  }

  document.getElementById('arrowRight').addEventListener('click', switchCard);

  document.getElementById('arrowLeft').addEventListener('click', function () {
    // skryje aktualni obrazek a text
    cardImages[currentCard].classList.add('vidCardNotActive');
    cardTexts[currentCard].classList.add('vidCardNotActive');

    // aktualizace indexu (i zpet odectenim inkrementu)
    if (currentCard === 0) {
        currentCard = cardImages.length - 1;
    } else {
        currentCard--;
    }

    // zase ukaze podle nvoyho indexu
    cardImages[currentCard].classList.remove('vidCardNotActive');
    cardTexts[currentCard].classList.remove('vidCardNotActive');
  
    /*update progbaru*/
    updateDots();
  });

  function updateDots() {
      dots.forEach((dot, index) => {   
          if (index === currentCard) {   /*pokud je index dotu roven aktualnimu indexu karty, zmeni se obrazek na vybrany*/
              dot.src = "./res/icons/sel.png";
          } else {
              dot.src = "./res/icons/unsel.png";  /*pokud neni, tak blank dots */
          }
      });
  }
});


var width = window.innerWidth;  /*bere value sirky okna - vyreseni responzivity...*/

/*Section2_overlay fcs*/
function openSection2_Tab1_Osaka() {
          /* Původní řešení co jen mění display none na block ".style.display = "block";"*/ 
          /* document.getElementById("section2_Tab1_Osaka").style.display = "block";*/ /*U tohodle novýho řešení jsme přidal block zpět z důvodu toho, že padding toho wrapperu způsoboval přetékání widthu i při 0%*/ 

  if (width < 800) {  /*pokud je sirka okna prohlizece mensi jak 800px, roztahne se nabidka o 50%*/
    document.getElementById("section2_Tab1_Osaka").style.width = "50%";
  } else {   /*jinak klasicky 20% ... pro desktopy ...*/
    document.getElementById("section2_Tab1_Osaka").style.width = "20%";
  }

  document.getElementById("section2_Tab1_Osaka").style.left = "0";
}

function closeSection2_Tab1_Osaka() {
  /*document.getElementById("section2_Tab1_Osaka").style.display = "none";*/
  document.getElementById("section2_Tab1_Osaka").style.width = "0%";
  document.getElementById("section2_Tab1_Osaka").style.left = "-10rem"; /*overflowujici padding nakonec vyresen natvrdo absolutnim posunem do leva*/
}    /*puvodni reseni (naopak) ".style.display = "none";"*/


function openSection2_Tab2_Tokyo() {  
  if(width<800){
    document.getElementById("section2_Tab2_Tokyo").style.width = "50%";
  } else{
    document.getElementById("section2_Tab2_Tokyo").style.width = "20%";
  }   
  document.getElementById("section2_Tab2_Tokyo").style.left = "0";
}

function closeSection2_Tab2_Tokyo() {
  document.getElementById("section2_Tab2_Tokyo").style.width = "0%";
  document.getElementById("section2_Tab2_Tokyo").style.left = "-10rem";
}        

function openSection2_Tab2_Kyoto() {   
  if(width<800){
    document.getElementById("section2_Tab2_Kyoto").style.width = "50%";
  }else{
    document.getElementById("section2_Tab2_Kyoto").style.width = "20%";
  }  
  document.getElementById("section2_Tab2_Kyoto").style.left = "0";
}

function closeSection2_Tab2_Kyoto() {
  document.getElementById("section2_Tab2_Kyoto").style.width = "0%";
  document.getElementById("section2_Tab2_Kyoto").style.left = "-10rem";
}  

function openSection2_Tab2_Kobe() {  
  if(width<800){
    document.getElementById("section2_Tab2_Kobe").style.width = "50%";
  }else{
    document.getElementById("section2_Tab2_Kobe").style.width = "20%";
  }   
  document.getElementById("section2_Tab2_Kobe").style.left = "0";
}

function closeSection2_Tab2_Kobe() {
  document.getElementById("section2_Tab2_Kobe").style.width = "0%";
  document.getElementById("section2_Tab2_Kobe").style.left = "-10rem";
}   


/*pageApps overlay*/

function openMoreinfo_GMAPS() {  
  
  document.getElementById("overlay_GMAPS").style.display = "block";
  
}
function closeMoreinfo_GMAPS(){
  document.getElementById("overlay_GMAPS").style.display = "none";
}

function openMoreinfo_DEEPL() {  
  
  document.getElementById("overlay_DeepL").style.display = "block";
  
}
function closeMoreinfo_DEEPL(){
  document.getElementById("overlay_DeepL").style.display = "none";
}

function openMoreinfo_HYPERDIA() {  
  
  document.getElementById("overlay_HYPERDIA").style.display = "block";
  
}
function closeMoreinfo_HYPERDIA(){
  document.getElementById("overlay_HYPERDIA").style.display = "none";
}

function openMoreinfo_JOTA() {  
  
  document.getElementById("overlay_JOTA").style.display = "block";
  
}
function closeMoreinfo_JOTA(){
  document.getElementById("overlay_JOTA").style.display = "none";
}

function openMoreinfo_CR() {  
  
  document.getElementById("overlay_CR").style.display = "block";
  
}
function closeMoreinfo_CR(){
  document.getElementById("overlay_CR").style.display = "none";
}