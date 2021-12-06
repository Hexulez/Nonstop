function scramble(sana) {
  let pisteet = [
    ["A", "E", "I", "N", "S,", "T"],
    ["O", "Ä", "K", "L"],
    ["U", "M"],
    ["Y", "H", "J", "P", "R", "V"],
    ["Ö","D"],
    ["B", "F", "G"],
    ["C"],
  ]

  sana = sana.toUpperCase();

  sana = sana.split("");

  let total = 0;
  for (let i = 0; i <sana.length; i++ ) {
    for (let x = 0; x <pisteet.length; x++){

      if(pisteet[x].includes(sana[i])) {

        switch (x) {

          case 0:
            total += 1;
            break;
            case 1:
            total += 2;
            break;
            case 2:
            total += 3;
            break;
            case 3:
            total +=4;
            break;
            case 4:
            total +=7;
            break;
            case 5:
            total +=8;
            break;
            case 6:
            total +=10;
            break;

        }

      }
      else if (x == pisteet.length -1) {
        total += 12;
      }
    }
  }
console.log(total);
return "sanassa " + sana +" pisteitä yhteensä " +total;
}

function scaSana() {
  return document.getElementById("pisteet").innerHTML = scramble(document.getElementById("ssana").value);
}

console.log(scramble("cxc"));

function lotto() {
  let num = [];
  let testeri = 0;
  for (var i = 0; i < 7; i++) {
    testeri = Math.floor(Math.random()*40+1);
    if (num.includes(testeri)){
      i--;
    }
    else {
      num.push(testeri);
    }

  }
  return num.sort(function(a, b){return a-b});
}

function lottoN() {
  document.getElementById("lottonumerot").innerHTML = lotto();
}
console.log(lotto());


function taulukoksi() {
  let jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  let taulu = '<table border="1">';
  for(let i = 0; i < jono.length; i++)
  {
    taulu += "<tr>";
    for(let x = 0; x < jono[i].length; x++)
    {
      taulu += "<td>" + jono[i][x] + "</td>";
    }
    taulu += "</tr>";
  }
  taulu += "</table>";
  console.log(taulu);
  document.getElementById("taulukko").innerHTML = taulu;
}

  let maa = ["&#9824;", "&#9825;", "&#9827;", "&#9826;" ]
  let kortit =[]
  for (let x = 0; x < 4; x++) {
    for (let i = 1; i <13; i++){
      switch (i) {
        case 1:
        kortit.push(maa[x]+"A");
        break;
        case 11:
        kortit.push(maa[x]+"J");
        break;
        case 12:
        kortit.push(maa[x]+"Q");
        break;
        case 13:
        kortit.push(maa[x]+"K");
        break;
        default:
        kortit.push(maa[x]+i);
        break;

      }
    }

  }

function pelaa() {
  let play = [];
  let card = 0;
  for (let y = 1; y < 6; y++) {
    card = kortit[Math.floor(Math.random()*52)]
    if (play.includes(card)) {
      y--
    }
    else {
      play.push(card);
    }

  }
  return document.getElementById("pelatut").innerHTML = play;
}
