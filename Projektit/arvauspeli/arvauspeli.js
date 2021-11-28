 //funktio minkä sisälle luon arvauspelin

  function uusi() { //funktio millä luon uuden luvun
  return math.floor(math.random()* 10 + 1);
  }
  let number = uusi()
  let voitot = 0;
  let pelit = 0;
  let yritykset = 0;
  console.log(number);
  while (true) { // silmukka mikä pitää arvaus pelin vaikka loputtomasti käynnissä.


    let answer = document.getElementById("vastaus").value;
    if (answer == number){
      document.getElementById("palaute").innerHTML = "Oikein"
      voitot ++;
      pelit ++;
      yritykset = 0;
      uusi(voitot)
    }
    else if (answer > number) {
      yritykset ++;
      document.getElementById("palaute").innerHTML = "numero on isompi kuin "+ answer;

    }
    else if (answer < number) {
      yritykset ++;
      document.getElementById("palaute").innerHTML = "numero on pienmpi kuin "+ answer;
    }



  }
