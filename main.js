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
//winner function
var questioncount = 24;
function checkAvaQue(){
    questioncount = questioncount - 1;
    document.getElementById("test").innerHTML = questioncount;
    if (questioncount === 0){
        if(count > counttwo){
            document.getElementById("winnerdiv").style.display = "block";
            document.getElementById("winnertext").innerHTML = "VÝHERCE TÝM 1";
            };
        if(counttwo > count){
            document.getElementById("winnerdiv").style.display = "block";
            document.getElementById("winnertext").innerHTML = "VÝHERCE TÝM 2";
            };
        }
        }       
    

    


//ende
//disablebutton
function jjt(){
    document.getElementById("jednabtn").disabled = true;
}
function jdt(){
    document.getElementById("jednadvabtn").disabled = true;
}
function jtt(){
    document.getElementById("jednatribtn").disabled = true;
}
function djt(){
    document.getElementById("dvabtn").disabled = true;
}
function ddt(){
    document.getElementById("dvadvabtn").disabled = true;
}
function dtt(){
    document.getElementById("dvatribtn").disabled = true;
}
function tjt(){
    document.getElementById("trijedna").disabled = true;
}
function tdt(){
    document.getElementById("tridva").disabled = true;
}
function ttt(){
    document.getElementById("tritri").disabled = true;
}
function cjt(){
    document.getElementById("ctyrijedna").disabled = true;
}
function cdt(){
    document.getElementById("ctyridva").disabled = true;
}
function ctt(){
    document.getElementById("ctyritri").disabled = true;
}
function pjt(){
    document.getElementById("petjedna").disabled = true;
}
function pdt(){
    document.getElementById("petdva").disabled = true;
}
function ptt(){
    document.getElementById("pettri").disabled = true;
}
function sjt(){
    document.getElementById("sestjedna").disabled = true;
}
function sdt(){
    document.getElementById("sestdva").disabled = true;
}
function stt(){
    document.getElementById("sesttri").disabled = true;
}
function sejt(){
    document.getElementById("sedmjedna").disabled = true;
}
function sedt(){
    document.getElementById("sedmdva").disabled = true;
}
function sett(){
    document.getElementById("sedmtri").disabled = true;
}
function ojt(){
    document.getElementById("osmjedna").disabled = true;
}
function odt(){
    document.getElementById("osmdva").disabled = true;
}
function ott(){
    document.getElementById("osmtri").disabled = true;
}
//ende
//jednotlive funkce
function jj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Síla";
    document.getElementById("questiontext").innerHTML = "Značka síly?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); jjt();" )
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); jjt();")
}
function jd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Síla";
    document.getElementById("questiontext").innerHTML = "Název jednotky?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); teamstatus(); checkAvaQue(); jdt();" );
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); jdt();")

}
function jt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Síla";
    document.getElementById("questiontext").innerHTML = "Objevitel síly?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); teamstatus(); checkAvaQue(); jtt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); jtt();")
}
function dj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hmotnost";
    document.getElementById("questiontext").innerHTML = "Jak zní vzorec pro výpočet hmotnosti pomocí gravitační síly?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); djt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); djt();")
}
function dd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hmotnost";
    document.getElementById("questiontext").innerHTML = "Kolik je 50dkg centigramů??"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); ddt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); ddt();")
}
function dt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hmotnost";
    document.getElementById("questiontext").innerHTML = "Z jakého anglického slovíčka je veličina (m) přejatá?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); dtt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); dtt();")
}
function tj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Rychlost";
    document.getElementById("questiontext").innerHTML = "Jaká je značka rychlosti?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); tjt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); tjt();")
}
function td(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Rychlost";
    document.getElementById("questiontext").innerHTML = "Jak se vypočítá rychlost(vzorec)?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); tdt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); tdt();")
}
function tt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Rychlost";
    document.getElementById("questiontext").innerHTML = "Kolik je 360km/h na m/s?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); ttt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); ttt();")
}
function cj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hustota";
    document.getElementById("questiontext").innerHTML = "Značka hustoty?"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); cjt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); cjt();")
}
function cd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hustota";
    document.getElementById("questiontext").innerHTML = "Základní jednotky?(2)"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); cdt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); cdt();")
}
function ct(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Hustota";
    document.getElementById("questiontext").innerHTML = "Které z těchto kovů má největší hustotu? - zlato, železo, hliník, měď"
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); ctt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); ctt();")
}
function pj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Kladky";
    document.getElementById("questiontext").innerHTML = "Využití kladky?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); pjt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); pjt();")
}
function pd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Kladky";
    document.getElementById("questiontext").innerHTML = "Vynálezce kladky?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); pdt();");
        document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); pdt();")
}
function pt(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Kladky";
    document.getElementById("questiontext").innerHTML = "Rozdělení kladek?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); ptt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); ptt();")
}
function sj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Páky";
    document.getElementById("questiontext").innerHTML = "Vyjmenuj 3 příklady páky?!";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); sjt();");
        document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); sjt();")
}
function sd(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Páky";
    document.getElementById("questiontext").innerHTML = "Jednotka momentu síly?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); sdt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); sdt();")
}
function st(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Páky";
    document.getElementById("questiontext").innerHTML = "Typy pák?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); stt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); stt();")
}
function sej(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Tlak";
    document.getElementById("questiontext").innerHTML = "Jednotka tlaku?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); sejt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); sejt();")
}
function sed(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Tlak";
    document.getElementById("questiontext").innerHTML = "Vzorec pro výpočet tlaku?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); sedt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); sedt();")
}
function set(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Tlak";
    document.getElementById("questiontext").innerHTML = "Znění Pascalového zákona?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); sett();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); sett();")
}
function oj(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Magnety";
    document.getElementById("questiontext").innerHTML = "Jak se nazývá 'přírodní magnet'?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFive(); checkAvaQue(); teamstatus(); ojt();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); ojt();")
}
function od(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Magnety";
    document.getElementById("questiontext").innerHTML = "vyjmenuj části magnetu (3)";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addTen(); checkAvaQue(); teamstatus(); odt()");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); odt();")
}
function ot(){
    showDiv()
    document.getElementById("questiontitle").innerHTML = "Magnety";
    document.getElementById("questiontext").innerHTML = "Čím se znázorňují magnetické pole okolo magnetu?";
    document.getElementById("plus_body").setAttribute( "onClick", "javascript: soundcorrect(); disableDiv(); addFifteen(); checkAvaQue(); teamstatus(); ott();");
    document.getElementById("schovat_div").setAttribute("onClick", "javascript: soundincorrect(); disableDiv(); checkAvaQue(); teamstatus(); ott();")
}