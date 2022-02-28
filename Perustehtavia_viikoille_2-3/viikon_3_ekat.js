
function parilliset(num) {
  if (num % 2 == 1){
    return  "Anna parillinen luku"
  }
  else {
    let luvut = []
    for (let i = 1; i <= num; i++){
      if (i % 2 == 0 ){
        luvut.push(i);
      }
    }
    return luvut
  }
}
function teh1() {
  return document.getElementById("t1v").innerHTML =  parilliset(document.getElementById("t1").value);


}

console.log(parilliset (10));

function salakirjoitus(sana) {
  let jono = sana.split("")
  let salattu = []
  for (let i = 0; i < jono.length; i++){
    salattu.push(jono[i]);
    salattu.push("ö")
  }
  return salattu.join("");
}

function teh2() {
  return document.getElementById("tv2").innerHTML =  salakirjoitus(document.getElementById("t2").value);

}
console.log(salakirjoitus("Vittu"));


function tarkistus(sana) {
  let testi = /ö/ig;
  return testi.test(sana);
}

function teh3() {
  return document.getElementById("tv3").innerHTML = tarkistus(document.getElementById("t3").value);
}
console.log(tarkistus("örkki"));


function laskema(num) {
  let numerot = 1;
  for (let i = num; i >0; i--){
    numerot *= i;
  }
  return numerot;
}

function teh4() {
  return document.getElementById("tv4").innerHTML = laskema(document.getElementById("t4").value);
}

console.log(laskema(4));

function tulostaa() {
  let vastaus = []
  for (let i = 1; i< 101 ; i++ ){
    if (i % 3 == 0 && i %5 == 0){
      vastaus.push("hipheijaa");
    }
    else if (i %3 == 0){
      vastaus.push("hip");
    }
    else if (i % 5 == 0) {
      vastaus.push("heijaa");
    }
    else {
      vastaus.push(i);
    }
  }
  return document.getElementById("tv5").innerHTML = vastaus.toString()
}




function teh6() {
  let numerot = [];
  for (var i = 1; i < 11; i++) {
    numerot.push(i);
  }
  return document.getElementById("tv6").innerHTML = numerot.join(" ");
}



function teh7() {
  let numerot = 0;
  for (var i = 1; i < 11; i++) {
    numerot += i;
  }
  return  document.getElementById("tv7").innerHTML = numerot;
}



function potenssiin(x, y) {
  if (x == 0 || y == 0){
    return 0
  }
  return x**y;
}

function teh8() {
  let a = parseInt(document.getElementById("t8a").value);
  let b = parseInt(document.getElementById("t8b").value);
  return document.getElementById("tv8").innerHTML = potenssiin(a,b);
}


function testi(a,b,c,d,e) {
  return "suurin on " + Math.max(a,b,c,d,e)+ " Pienin on " + Math.min(a,b,c,d,e);
}

function teh9() {
  let a = document.getElementById("t9a").value;
  let b = document.getElementById("t9b").value;
  let c = document.getElementById("t9c").value;
  let d = document.getElementById("t9d").value;
  let e = document.getElementById("t9e").value;
  return document.getElementById("tv9"). innerHTML = testi(a,b,c,d,e);
}


function salakirjoitusRandom(sana) {
  let aakkoset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];
  let jono = sana.split("");
  let salattu = [];
  for (let i = 0; i < jono.length; i++){
    let salakirjain = aakkoset[Math.floor(Math.random()*24)]; //jos haluaisi käyttää vain yhtä kirjainta niin tämä rivi siirrettäisiin for lausekkeen ylöpuolelle
    salattu.push(jono[i]);
    salattu.push(salakirjain);
  }
  return salattu.toString("");
}

function teh10() {
  return document.getElementById("tv10").innerHTML = salakirjoitusRandom(document.getElementById("t10").value);
}
console.log(salakirjoitusRandom("hoplaa"));


function pariTonSumma(x,y) {
  let parillinen = [];
  let pariton = [];
  for (var i = x+1; i < y; i++) {
    if (i % 2 == 0) {
      parillinen.push(i);
      console.log(parillinen);
      console.log("vittu");
    }
    else if (i % 2 == 1 ) {
      pariton.push(i);
    }
  }
  let summapari = 0;
  let summaPariton = 0;

  for (var i = 0; i < parillinen.length; i++) {
    summapari += parillinen[i];
  }
    for (var i = 0; i < pariton.length; i++) {
      summaPariton += pariton[0];
    }
    console.log(parillinen);
    console.log(pariton);
  return "Parilliset "+ parillinen + " Parittomat " + pariton+ " niiden summat: parillinen " + summapari + " parittomat " + summaPariton;
}

function teh11() {
  let x = parseInt(document.getElementById("t11a").value, 10);
  let y = parseInt(document.getElementById("t11b").value, 10);
  return document.getElementById("tv11").innerHTML = pariTonSumma(x,y);
}

console.log(pariTonSumma(1,10));


function ranCol() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#"+randomColor;
}

function colors() {
  let boxes = document.querySelectorAll(".laatikot");
  for (var i = 0; i < 11; i++) {
    boxes[i].style.background = ranCol();
    document.body.style.background = ranCol();
  }
}
