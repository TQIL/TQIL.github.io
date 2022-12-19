//---Funkce přepínání týmů---
let team = 0;
function teamstatus(){
    if (team < 2){
        team = team + 1;
        visibleteam();
    }
    else{
        team = 1;
        visibleteam()
    }
}

function visibleteam(){
    if (team == 1){
        document.getElementById("titletymjedna").style.background = "orange";
    }
    else if(team != 1){
        document.getElementById("titletymjedna").style.background = "none";
    }
    if (team == 2){
        document.getElementById("titletymdva").style.background = "blue";
    }
    else if(team != 2){
        document.getElementById("titletymdva").style.background = "none";
    }
}
//---ENDE---

//Funkce pro zobrazení a schováni divu
function showDiv() {
    var div = document.getElementById("questiondiv");
    div.style.display = "block";
  };
  var ukazdiv = document.getElementById("buttondn");
  if (ukazdiv){
    ukazdiv.addEventListener("click", showDiv());
  }


  function disableDiv() {
    var div = document.getElementById("questiondiv");
    div.style.display = "none";
  };
  var schovdiv = document.getElementById("schovat_div");
  if (schovdiv){
    schovdiv.addEventListener("click", disableDiv());
  }
//ENDE
//correct incorrect
let correct = new Audio("sounds/correctyzonot.mp3");
let incorrect = new Audio("sounds/yzoincorrect.mp3");
function soundcorrect(){
    correct.play()
}
function soundincorrect(){
    incorrect.play();
}
//ende
//FUNKCE pro přidání bodů
var count = 0;
var five = 5;
var ten = 10;
var fifteen = 15;
var counttwo = 0;
function addFive(){
    if(team === 1){
        count = count + five;
        document.getElementById("counterone").innerHTML = count;
    }
    if(team === 2){
        counttwo = counttwo + five;
        document.getElementById("countertwo").innerHTML = counttwo;
    }
}
function addTen(){
    if(team === 1){
        count = count + ten;
        document.getElementById("counterone").innerHTML = count;
    }
    if(team === 2){
        counttwo = counttwo + ten;
        document.getElementById("countertwo").innerHTML = counttwo;
    }
}
function addFifteen(){
    if(team === 1){
        count = count + fifteen;
        document.getElementById("counterone").innerHTML = count;
    }
    if(team === 2){
        counttwo = counttwo + fifteen;
        document.getElementById("countertwo").innerHTML = counttwo;
    }
}
//ENDE
//disable buttons
//ende

//jednotlive funkce
function jj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Síla";
    document.getElementById("questiontext").innerHTML = "Značka síly?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();" )
}
function jd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Síla";
    document.getElementById("questiontext").innerHTML = "Název jednotky?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();" );

}
function jt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Síla";
    document.getElementById("questiontext").innerHTML = "Objevitel síly?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function dj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hmotnost";
    document.getElementById("questiontext").innerHTML = "Jak zní vzorec pro výpočet hmotnosti pomocí gravitační síly?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function dd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hmotnost";
    document.getElementById("questiontext").innerHTML = "Kolik je 50dkg centigramů??"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function dt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hmotnost";
    document.getElementById("questiontext").innerHTML = "Z jakého anglického slovíčka je veličina (m) přejatá?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function tj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Rychlost";
    document.getElementById("questiontext").innerHTML = "Jaká je značka rychlosti?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function td(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Rychlost";
    document.getElementById("questiontext").innerHTML = "Jak se vypočítá rychlost(vzorec)?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function tt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Rychlost";
    document.getElementById("questiontext").innerHTML = "Kolik je 360km/h na m/s?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function cj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hustota";
    document.getElementById("questiontext").innerHTML = "Značka hustoty?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function cd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hustota";
    document.getElementById("questiontext").innerHTML = "Základní jednotky?(2)"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function ct(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hustota";
    document.getElementById("questiontext").innerHTML = "Které z těchto kovů má největší hustotu? - zlato, železo, hliník, měď"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function pj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Kladky";
    document.getElementById("questiontext").innerHTML = "Využití kladky?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function pd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Kladky";
    document.getElementById("questiontext").innerHTML = "Vynálezce kladky?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function pt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Kladky";
    document.getElementById("questiontext").innerHTML = "Rozdělení kladek?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function sj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Páky";
    document.getElementById("questiontext").innerHTML = "Vyjmenuj 3 příklady páky?!";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function sd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Páky";
    document.getElementById("questiontext").innerHTML = "Jednotka momentu síly?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function st(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Páky";
    document.getElementById("questiontext").innerHTML = "Typy pák?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function sej(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Tlak";
    document.getElementById("questiontext").innerHTML = "";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function sed(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Tlak";
    document.getElementById("questiontext").innerHTML = "Vzorec pro výpočet tlaku?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function set(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Tlak";
    document.getElementById("questiontext").innerHTML = "Znění Pascalového zákona?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}
function oj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Magnety";
    document.getElementById("questiontext").innerHTML = "Jak se nazývá 'přírodní magnet'?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); teamstatus();");
}
function od(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Magnety";
    document.getElementById("questiontext").innerHTML = "vyjmenuj části magnetu (3)";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus();");
}
function ot(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Magnety";
    document.getElementById("questiontext").innerHTML = "Čím se znázorňují magnetické pole okolo magnetu?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus();");
}