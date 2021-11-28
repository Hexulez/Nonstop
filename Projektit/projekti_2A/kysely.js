var tulos = 0;
function tarkistus(muuttuja, oikea) {
  for (let i = 0; i < muuttuja.length; i++) {
    if (muuttuja[i].checked && muuttuja[i] == oikea[i]) {
      return tulos += 1
    }
    else if (muuttuja[i].checked && muuttuja[i] != oikea[i]) {
      return tulos
    }
    else if (muuttuja[muuttuja.length-1].checked == false ){
      alert (muuttuja "puuttuu");
    }
  }
}

function tarkastaLomake(form) {

var howMany = 5;
var points = 0;
var errors = 0;

let kysymys1 = form.k1.value;
let kysymys2= form.k2.value;
let kysymys3 = form.k3.value;
let kysymys4 = form.k4.value;
let kysymys5 = form.k5.value;

var vastaukset = ["b", "b", "a", "b", "d"];


for (let x = 1; x < howMany; x++) {
  if (eval("kysymys"+x) == null || eval("kysymys"+x) == ""){
    alert ("et vastannut kysymykseen numero" + x);
    errors ++
    if (errors >= 1) {
      return false;
    }
  }
}
console.log("Fuck");
for (let i = 1; i < howMany+1; i++) {

  if (eval("kysymys"+i) == vastaukset[i-1])		{
    points++;
}
}
let printHere = document.getElementById("printHere");
alert ("sait pisteitä " + points + " suurin mahdollinen määrä on " + howMany);
printHere.innerHTML = "<h3>sait pisteitä <span> " + points + " </span> suurin mahdollinen määrä on <span>" + howMany+ "</span></h3>";
return false;
}
