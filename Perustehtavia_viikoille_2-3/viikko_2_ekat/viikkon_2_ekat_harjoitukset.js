function jarjesta() {
  let jono = [];
  jono.push(document.getElementById("eka").value)
  jono.push(document.getElementById("toka").value)
  jono.push(document.getElementById("kolmas").value)
  coloring()
  return document.getElementById("jarkassa").innerHTML = jono.sort((a, b) => a - b);
}

function suurin() {
  let jono = [];
  jono.push(document.getElementById("isoinEka").value)
  jono.push(document.getElementById("isoinToka").value)
  jono.push(document.getElementById("isoinKolmas").value)
  jono.push(document.getElementById("isoinNel").value)
  jono.push(document.getElementById("isoinViis").value)
  jono.sort((a, b) => a - b);
  coloring()
  return document.getElementById("isoin").innerHTML = jono[4]
}

function parillinen() {
  coloring()
  let luku = document.getElementById("pariton").value;
  if(luku % 2 == 0) {
    return document.getElementById("parinVastaus").innerHTML = "parillinen"
  }
  else {
    return document.getElementById("parinVastaus").innerHTML = "pariton"
  }
}

function saaAjaa() {
  coloring()
  let ika = document.getElementById("ika").value;
  if (ika<16) {
    return document.getElementById("menoPeli").innerHTML = "saa ajaa polkupyörää";
  }
  else if (ika<18) {
    return document.getElementById("menoPeli").innerHTML = "Saa ajaa mopoa."
  }
  else if (ika>18) {
    return document.getElementById("menoPeli").innerHTML = "saa ajaa autoa"

  }
  else {
    return document.getElementById("menoPeli").innerHTML = "vastaus ei kelpaa kyseisessä muodossa"
  }
}

function muuta() {
  coloring()
  let arvo = document.getElementById("trans").value;
  switch (arvo) {
    case "en":
      return document.getElementById("hello").innerHTML = "Hello World!"
    case "fi":
      return document.getElementById("hello").innerHTML = "Hei Maailma!"
    case "swe":
      return document.getElementById("hello").innerHTML = "Hej Världen!"
    case "es":
      return document.getElementById("hello").innerHTML = "Hola Mundo!"
      break;
    default: "Sayonara"

  }
}


function ranCol() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#"+randomColor;
}

function coloring() {

  document.body.style.background = ranCol();
}
