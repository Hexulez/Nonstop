// Armstrongin numerot
function armstrong() {
  let vastaus = [];
  for (var i = 100; i < 1000; i++) {
    let x = i.toString().split("");
      let luku = 0;
      for (let y = 0 ; y < x.length; y++) {
      luku += parseInt(x[y] ** 3, 10);
      if (luku == i) {
        vastaus.push(luku);
        break
      }
      else {
        continue
      }
      }
  }
  return vastaus;
}
function testi() {
return document.getElementById("arms").innerHTML = armstrong()
}

console.log(armstrong())

//tulostaa tähtiä
function tulosta(num) {
  let merkki ="";
  for (let i = 0; i < num;  i++) {
    merkki += "*";
    console.log(merkki);

  }
}
tulosta(5)


function salakoodi(text) {
  let kirjaimet = ["a", "e", "i", "o", "s"];
  let numerot = ["4", "3", "1", "0","5"];
  for (let i = 0; i < 5; i++) {
    let regex = new RegExp(kirjaimet[i], "g");
    text = text.replace(regex, numerot[i]);
  }
  return text;
}

console.log(salakoodi("minä olen paras"));

function salaa() {
  let text = document.getElementById("koodaa").value;
  return document.getElementById("koodattu").innerHTML = salakoodi(text);
}

// hikka laskenta

function hicUps() {
  for (let i = 0; i <=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log("hic-up");
    }
    else if (i % 3 == 0) {
      console.log("hic");
    }
    else if (i % 5 == 0){
      console.log("up");
    }
    else {
      console.log(i);
    }
  }

}

console.log(hicUps())
