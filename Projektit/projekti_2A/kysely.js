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

}

let kysymys1 = form.k1.value;
let  kysymys2= form.k2.value;
let kysymys3 = form.k3.value;
let kysymys4 = form.k4.value;
let kysymys5 = form.k5.value;
const vastaukset = (b, b, a, b, d);

tarkistus(kysymys1, vastaukset[0]) {


}
