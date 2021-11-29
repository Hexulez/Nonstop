//funktio minkä sisälle luon arvauspelin

function uusi() { //funktio millä luon uuden luvun
  return Math.floor(Math.random()* 10 + 1);
}
let number = uusi()
let voitot = 0;
let pelit = 0;
let yritykset = 1;


function pippeli() {
  console.log(number);
  document.getElementById("numberOfGames").innerHTML = "pelatut pelit " + pelit;
  document.getElementById("wins").innerHTML = "Voitot " + voitot;
  document.getElementById("yritys").innerHTML = "yritykset " + yritykset;
  let answer = document.getElementById("vastaus").value;
  if (answer == number){
    document.getElementById("palaute").innerHTML = "Oikein!! aloitetaan uusi peli."
    voitot ++;
    pelit ++;
    yritykset = 1;
    number = uusi()
  }
  else if (yritykset >= 3 ) {
    pelit ++;
    yritykset = 1;
    number = uusi()
    document.getElementById("palaute").innerHTML = "Arvauksia oli jo 3 aloitetaan uusi peli."
  }
  else if (answer < number) {
    yritykset ++;
    document.getElementById("palaute").innerHTML = "numero on isompi kuin "+ answer;

  }
  else if (answer > number) {
    yritykset ++;
    document.getElementById("palaute").innerHTML = "numero on pienmpi kuin "+ answer;

  }
}

//tästä alkaa näppäimistö osuus.

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
    button.addEventListener("click", (e) => {
      document.getElementById("numberOfGames").innerHTML = "pelatut pelit " + pelit;
      document.getElementById("wins").innerHTML = "Voitot " + voitot;
      document.getElementById("yritys").innerHTML = "yritykset " + yritykset;
      let answer = e.target.innertext;
      if (e.target.innertext == number){
        document.getElementById("palaute").innerHTML = "Oikein!! aloitetaan uusi peli."
        voitot ++;
        pelit ++;
        yritykset = 1;
        number = uusi()

      }
      else if (yritykset >= 3 ) {
        pelit ++;
        yritykset = 1;
        number = uusi()
        document.getElementById("palaute").innerHTML = "Arvauksia oli jo 3 aloitetaan uusi peli."

      }
      else if (e.target.innertext < number) {
        yritykset ++;
        document.getElementById("palaute").innerHTML = "numero on isompi kuin "+ answer;

      }
      else if (e.target.innertext > number) {
        yritykset ++;
        document.getElementById("palaute").innerHTML = "numero on pienmpi kuin "+ answer;

  };
  });
});
