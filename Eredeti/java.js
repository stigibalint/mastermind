
//document.addEventListener('DOMContentLoaded', function () {

let korok = []
let code = []
var jatektabla = document.getElementById("GameTable");
var szinek = ["cyan", "green", "yellow", "blue", "red", "darksalmon", "orange", "purple"]
function Kezdes() {

    for (var i = 0; i < 28; i++) {
        const kor = document.createElement("span");
        kor.className = "korStilus";
        document.getElementById("GameTable1").appendChild(kor);
        korok.push(kor)
    }
}
function Gombok() {

    
    for (var index = 0; index < szinek.length; index++) {
        const element = szinek[index];
        var gomb = document.createElement("button")
        gomb.style.backgroundColor = element;
        gomb.style.width = "14rem"
        gomb.style.height = "6rem"
        gomb.setAttribute("onclick", "katt(this)");
        document.getElementById("menu").appendChild(gomb)
    }
}


Kezdes()
Gombok()

let valasztottSzinek = [];
let kattszamlal = 1;
let korIdx = 0

for(let i = 0; i < 4; i++){
    code.push(szinek[Math.floor(Math.random() * 5)]);
}

console.log(code);

function katt(szin) {
    var szin = szin.style.backgroundColor;
    console.log(szin)
    korok[korIdx].style.backgroundColor = szin
    valasztottSzinek.push(szin)


    if ((korIdx + 1) % 4 == 0) {

        console.log("ELLENŐRZÉS")
     for (var i = 0; i < valasztottSzinek.length; i++) {
          for (var y = 0; y < code.length; y++) {
              
           }
        }
        console.log(valasztottSzinek);
    }
    korIdx++
    
}