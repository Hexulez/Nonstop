function minMax() {
  let arr = document.getElementById("minmax").value;
  arr = arr.trim();
  arr = arr.split(" ");
  console.log(arr);
  numeroiksi(arr);
  return  document.getElementById("pienin").innerHTML =  Math.min(...arr) + ", " +  Math.max(...arr);
}

console.log(minMax([1, 4, 5, 7]));

function pari() {
  let num = document.getElementById("parillinen").value;
    if (num == 0) {
    return document.getElementById("pariton").innerHTML = "Numero on 0"
  }
    if else (num % 2 === 0) {
      return document.getElementById("pariton").innerHTML = "parillinen";
    }
    else {
      return document.getElementById("pariton").innerHTML  = "Pariton";
    }
}

console.log(parillinen(3))

function kuukausi(num) {
  switch (num) {
    case 1:
      return "tammikuu";
    case 2:
      return "helmikuu";
    case 3:
    return "maaliskuu";
    case 4:
      return "huhtikuu";
    case 5:
      return "toukokuu";
    case 6:
      return "kesäkuu";
    case 7:
      return "heinäkuu";
    case 8:
      return "elokuu";
    case 9:
      return "syyskuu";
    case 10:
        return "lokakuu";
    case 11:
      return "marraskuu";
    case 12:
      return "Joulukuu";
    default:
      return "Numero ei ole kuukausien lukumäärä";

  }
}

function kuukausiksi() {
  let kk = document.getElementById("kuukausiksi").value;
  return kuukausi(kk);
}
console.log(kuukausi(5));

function osTiedot(etunimi, sukunimi, losoite, postinumero, postitoimipaikka, puhelin, mail) {
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.lähiosoite = losoite;
  this.postinumero = postinumero;
  this. postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sahkoposti = mail;

}
let henkka = new  osTiedot("henry", "juhola", "kukinkuja", "01620", "vantaa", "0400950198", "henry.juhola@edu.keuda.fi");
let erkki = new osTiedot("pertti", "perttiläinen", "eimissäänkatu", "76343", "eimissään", "0600123123", "erkki@pornhub.com");
let bertta = new osTiedot("Bertta", "perus", "jakokatu 69", "82934", "jakelija", "0700696969", "bertta@onlyfans.com");

console.log(henkka);
console.log(erkki);
console.log(bertta);

function jarjesta(str) {
  let order = str.split("");
  order = order.sort();
  return order.join();
}

console.log(jarjesta("mika meno"));

function arvosana(nimi, num) {
  return (num<50)?nimi+" Hylätty":(num<60)?nimi+" T1":(num<70)?nimi+" T2":(num<80)?nimi+" H3":
  (num<90)?nimi+" H4":nimi+" K5";
}



console.log(arvosana("matti", 76));

function numeroiksi(num) {
  return parseInt(num, 10);
}

function ekat() {
  let min = document.getElementById("minMax").value;
  //let parillinen = document.getElementById("parillinen").value;
  //let kk = document.getElementById("kuukausi").value;
  //let order = document.getElementById("jarjesta").value;

}
