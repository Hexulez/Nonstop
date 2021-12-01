
function parilliset(num) {
  if (num % 2 == 1){
    return  "Anna parillinen luku"
  }
  else {
    let luvut = []
    for (let i = 1; i < num; i++){
      if (i % 2 == 0 ){
        luvut.push(i);
      }
    }
    return luvut
  }
}

console.log(parilliset (10));

function salakirjoitus(sana) {
  let jono = sana.split("")
  let salattu = []
  for (let i = 0; i < jono.length; i++){
    salattu.push(jono[i]);
    salattu.push("ö")
  }
  return salattu.toString("");
}

console.log(salakirjoitus("Vittu"));


function tarkistus(sana) {
  let testi = /ö/ig;
  return testi.test(sana);
}

console.log(tarkistus("örkki"));


function laskema(num) {
  let numerot = 1;
  for (let i = num; i >0; i--){
    numerot *= i;
  }
  return numerot;
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
  return vastaus.toString()
  }
}

console.log(tulostaa());

function kymmenen() {
  let numerot = [];
  for (var i = 1; i < 11; i++) {
    numerot.push(i)
  }
  return numerot.join(" ")
}

console.log(kymmenen());


function laskeeKymmenen() {
  let numerot = 0
  for (var i = 1; i < 11; i++) {
    numerot += i
  }
  return numerot
}

console.log(laskeeKymmenen());
