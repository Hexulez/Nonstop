function jarjesta() {
  let jono = [];
  jono.push(document.getElementById("eka").value;
  jono.push(document.getElementById("toka").value;
  jono.push(document.getElementById("kolmas").value;
  return jono.sort((a, b) => a - b);
}

function suurin() {
  let jono = [];
  jono.push(document.getElementById("isoinEka").value;
  jono.push(document.getElementById("isoinToka").value;
  jono.push(document.getElementById("isoinKolmas").value;
  jono.push(document.getElementById("isoinNel").value;
  jono.push(document.getElementById("isoinViis").value;
  jono.sort((a, b) => a - b);
  return jono[4]
}

function parillinen() {
  let luku = document.getElementById("pariton").value;
  if(luku % 2 = 0) {
    return "parillinen"
  }
  else {
    return "pariton"
  }
}

function saaAjaa() {
  let ika = document.getElementById("ika").value;
  if (ika<16) {
    return "saa ajaa polkupyörää";
  }
  else if (ika<18) {
    return "Saa ajaa mopoa."
  }
  else {
    return "saa ajaa autoa"

  }

}
