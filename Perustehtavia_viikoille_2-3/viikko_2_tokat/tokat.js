function posNeg() {
  let luku = document.getElementById("positiivinen").value;
  if (luku>=0) {
    return document.getElementById("nega").innerHTML = "luku on positiivinen";
  }
  else {
    return document.getElementById("nega").innerHTML = "luku on negatiivinen";
  }

}

function viikonp() {
  let day = document.getElementById("day").value;
  switch (day) {
    case "1":
      return "Maanantai";
    case "2":
      return "Tiistai";
    case "3":
      return "Keskiviikko";
    case "4":
      return "Torstai";
    case "5":
      return "Perjantai";
    case "6":
      return "Lauantai";
    case "7":
      return "Sunnuntai";
    case "":
      return "tarkista syöte";
    default:
      return "Ei ollut päivän numero"
    break;
    }
}


function karkaus() {
  let vuosi = document.getElementById("vuosi").value;
  if (vuosi % 4 == 0 && vuosi % 100 != 0){
    return "vuosi on karkaus vuosi"
  }
  else if (vuosi % 400 == 0){
    return "vuosi on karkaus vuosi"
  }
  else {
    return "vuosi ei ole karkaus vuosi"
  }
}

function lasku() {
  let luku1 = parseInt(document.getElementById("luku1").value);
  let luku2 = parseInt(document.getElementById("luku2").value);
  let luku3 = parseInt(document.getElementById("luku3").value);
  let luku4 = parseInt(document.getElementById("luku4").value);
  let luku5 = parseInt(document.getElementById("luku5").value);
  if (isNaN(luku1) || isNaN(luku2) || isNaN(luku3) || isNaN(luku4) || isNaN(luku5)) {
    return "tarkista arvot"
  }
  let summa = luku1+luku2+luku3+luku4+luku5;
  let keskiarvo = summa / 5;
  return "lukujen summa on: "+summa+" ja keskiarvo on: "+keskiarvo;

}

function lausemuuttuja() {
  let luku = parseInt(document.getElementById("joku").value);
  if (isNaN(luku)){
    return "tarkista luku"
  }
  let lause = luku + "x 1 ="+ luku*1 ;
  for (let i = 2; i < 11; i++ ) {
    lause += `| ${luku} x ${i} = ${luku * i} `;
  }
  return lause;
}
function tulosta() {
  document.getElementById("viikonp").innerHTML = viikonp();
  document.getElementById("kvuosi").innerHTML = karkaus();
  document.getElementById("tulos").innerHTML = lasku();
  document.getElementById("hullunHommaa").innerHTML = lausemuuttuja();


}





function ranCol() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#"+randomColor;
}

function coloring() {

  document.body.style.background = ranCol();
}

function suorita() {
    setInterval(coloring, 1);
    tulosta();
    posNeg();
}
