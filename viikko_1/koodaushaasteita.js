function laskeYhteen(x, y)   {
  return document.getElementById('eka').innerHTML =(x + y);

}
laskeYhteen(2,3)



function ekaMuuttuja() {
  var taulukko = [34, 23, 53];
  return document.getElementById('toka').innerHTML = (taulukko[0]);
}

ekaMuuttuja();


function YhteenLaskettu(x, y) {
  if (x+y < 100) {
    return document.getElementById('kolmas').innerHTML = (x+y);
  }
  else if (x+y > 100) {
    return document.getElementById('kolmas').innerHTML = ("luvut ovat liian suuret, jotta pystyisin laskemaan niitä");
  }
}

YhteenLaskettu(29, 30);
YhteenLaskettu(51, 50);

function samat(x, y) {
  if (x == y){
    return document.getElementById('neljas').innerHTML = ("Samat");
  }
  else {
    return document.getElementById('neljas').innerHTML = ("Eri luvut");
  }
}

samat(5, 6);
samat(6, 6);

function sekuntit(x,y,z) {
  return document.getElementById('viides').innerHTML = (x*60*60 + y*60 + z);
}

sekuntit(10, 10, 10);

/* howOld Funktio hakee tämän hetken päivämäärän ja ottaa arvot myös käyttäjältä
millä se laskee karkeasti kuinka paljon päivillä on eroavaisuutta.*/
function howOld(d, m, y) {
  const today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+1;
  var day = today.getDate();
  function vuodet(x) {
    return x * 365.25;
  }

  function monthToDays (h) {
    switch (h-1) {
      case 0:
        return 0;
      case 1:
        return 31;
      case 2:
        return 59;
      case 3:
        return 90;
      case 4:
        return 120;
      case 5:
        return 151;
      case 6:
        return 181;
      case 7:
        return 212;
      case 8:
        return 243;
      case 9:
        return 273;
      case 10:
        return 304;
      case 11:
        return 334;
      case 12:
        return 365;
      default:
        return 0;
        break
    }
  }
var synt = vuodet(y) + monthToDays(m) + d;
var nyt = vuodet(year) + monthToDays(month) + day;
console.log(nyt - synt);
return nyt- synt;
}
  howOld(28, 9, 2021)
/* myTest funktio ottaa formin tiedot ja muuttaa ne numeroiksi jonka jälkeen kutsuu
howOld funktiota. Joka laskee hyvin karrikoidusti tuon päivien määrän. */
  function myTest() {
    let paiva = document.getElementById('paava').value;
    let kk = document.getElementById('kuukaus').value;
    let vuosi = document.getElementById('year').value;
      function int(x) {
        return parseInt(x, 10);
      }
    let jes = howOld(int(paiva), int(kk), int(vuosi));
    document.getElementById('vastaus').innerHTML = jes;
  }

  function oldie(x, y, z) {
    return document.getElementById("t6").innerHTML = (howOld(x, y, z));

  }
