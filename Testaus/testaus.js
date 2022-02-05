function summa(a,b){
  return a+b;
}
//module.exports=summa;


/*
MERKKIJONOT
Joukko merkkejä (kirjaimet, numerot, symbolit) tunnetaan merkkijonona.
Merkkijonojen tulee alkaa ja päättyä lainausmerkkeihin. Joko yksittäinen heittomerkki ' tai
kaksoisheittomerkki " toimii, kunhan käytät samaa alussa ja lopussa. Alla esimerkki:

  'edabit.com'
  "edabit.com"

Lainausmerkit osoittavat, että mukana oleva teksti on arvo, ei koodi.

MUUTTUJAT
Sana "muuttuja" (var) tarkoittaa "voi muuttua"; niitä käytetään tallentamaan arvoja, jotka voivat muuttua.

Muuttuja on kuin laatikko, johon on kiinnitetty tarralappu. Kun viittaat tarralapussa olevaan nimeen,
voit käyttää mitä tahansa laatikon sisällä olevaa (muuttujaa). Kuten matematiikassa käytetyt x- ja y-muuttujat,
ne ovat yksinkertainen nimi edustamaan tietoja, joihin haluamme viitata.

Käytämme avainsanaa var ilmoittamaan (eli luomaan) muuttuja nimeltä elain:

  var elain = "Kettu"

var on lyhenne muuttujalle (variable) ja = tarkoittaa arvon tallentamista oikealle puolelle
vasemman puolen muuttujaan. Voit nimetä muuttujan millä nimellä tahansa, mutta se ei voi sisältää välilyöntejä.

/// TEHTÄVÄ 1 ///
Poista varsinaisesta tehtävästä (rivistä 29) kommentointi katkaisemalla kommentti rivillä 28 (tähti + kauttaviiva)ja
aloittamalla se uudestaan rivillä 31 (kauttaviiva + tähti) ja tee alla annettu tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Syötä yhtäläisyysmerkin jälkeen merkkijono "edabit.com". Muista, että merkkijonot on käärittävä lainausmerkkeihin " ".
*/
var verkkosivusto = "edabit.com"

/*

Nykyaikaisessa JavaScriptissä var käytetään harvoin muuttujien ilmoittamiseen.
Sen sijaan käytämme const (lyhenne vakiolle) ja let.
Tässä aloittelijan opetusohjelmassa käytämme tästä lähtien const.

/// TEHTÄVÄ 2 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Luodaan muuttuja tyhjästä. Ilmoita muuttuja ruoka ja anna sille arvo "pizza". Käytä var-komennon sijasta const-komentoa.

// kirjoita koodi tämän rivin alle
*/
const ruoka = "pizza";
/*
​NUMEROT
Kuten merkkijonot, numerot ovat arvoja, mutta niitä ei ole kääritty lainausmerkkeihin.
Ne voidaan kirjoittaa desimaalien kanssa tai ilman, ja ne voivat olla positiivisia tai negatiivisia. Esim.

  vakiolampotila = -7.5

Jos luku ei sisällä desimaalilukua, sitä kutsutaan kokonaisluvuksi.

/// TEHTÄVÄ 3 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Ilmoita muuttuja nimeltä paiva ja anna sille arvo 19.

// kirjoita koodi tämän rivin alle
*/
const paiva = 19;
/*
​OPERAATTORIT
Operaattorit ovat arvojen välisiä symboleja, jotka mahdollistavat erilaisia ​​operaatioita,
kuten yhteenlasku +, vähennyslasku -, kertolasku *, jako / jne.
JavaScriptillä on kymmeniä operaattoreita, mutta keskitymme vain aritmeettisiin operaattoreihin,
koska aloittelijat käyttävät niitä kaikkein eniten.

/// TEHTÄVÄ 4 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Jaa 100 2:lla.
*/
const jako = 100/2;

/*
Tietenkin on olemassa muita operaattoreita, kuten moduuli %, eksponentio **, lisäys ++, dekrementti -- ja monia muita.

/// TEHTÄVÄ 5 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Käytä + -operaattoria ketjuttaaksesi (yhdistääksesi) kaksi merkkijonoa yhteen.

    Ilmoita muuttujan nimi.
    Liitä etunimi sukunimeen (huomaa, että N on isolla kirjaimella).

Koodisi pitäisi näyttää täsmälleen samalta kuin yllä olevassa esimerkissä,
vain sinä lisäät (käyttäen +-operaattoria) kaksi merkkijonoa yhteen.
*/
const firstName = "Luke "

const lastName = "Skywalker"

// kirjoita koodi tämän rivin alle
const name = firstName+lastName

/*
​FUNKTIOT
Funktiot ovat koodilohkoja, jotka voidaan nimetä ja käyttää uudelleen.
Niille annetaan dataa, he tekevät jotain tiettyä tiedolla ja palauttavat tuloksen.

Perustoiminto näyttää tältä:

  function laskeYhteen(num1, num2)
  {
    return numero1 + numero2
  }

Voitko arvata mitä se tekee? Katsotaanpa jokaista osaa:

    laskeYhteen on funktion nimi.
    num1 ja num2 ovat parametreja (eli muuttujia, jotka sisältävät syöttödataa).
    return on avainsana, joka poistuu funktiosta ja palauttaa arvon (ulostulon).

Palautusavainsanan (return) käyttö on erittäin tärkeää.
Kun ajat funktion, sinun on palautettava vastauksesi, muuten koodi ei toimi.

/// TEHTÄVÄ 6 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Alla oleva funktio ottaa kaksi parametria, joista jokainen sisältää numeron.

    Kerro ensimmäinen parametri num1 toisella parametrilla num2.
    Muista käyttää palautus-avainsanaa yllä olevan esimerkin mukaisesti.
*/
    function kerroNumerot(num1, num2)
    {
      return num1*num2
    }
/*
Vaikka funktiot yleensä ottavat parametreja, niiden ei välttämättä tarvitse olla.

  function hello()
  {
    return "Hei maailma!";
  }

Kun yllä olevaa funktiota hello() kutsutaan, se palauttaa "Hei maailma!".

TAULUKOT
Taulukot ovat asioiden luetteloita. Ne näyttävät tältä:

  const hedelma = ["omena", "banaani", "appelsiini", "mango", "tomaatti"]

Jokaista hedelmää yllä olevassa taulukossa kutsutaan elementiksi.
Vaikka jokainen elementti yllä olevassa esimerkissä on merkkijono, taulukon elementit voivat olla mitä tahansa arvoja:

const tavaraa = [true, 1976, null, "hei"]

Jokaisella taulukon elementillä on indeksi, joka alkaa nollasta.
Ensimmäisessä hedelmäesimerkissä "omena" on indeksissä 0, "banaani" on indeksissä 1,
"appelsiini" on numerossa 2 ja niin edelleen joukko.

Jos haluat käyttää tiettyä elementtiä taulukossa, teemme näin:

hedelmä[2]

Se on "appelsiinin" indeksi.

/// TEHTÄVÄ 7 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Palauta elementti "Donatello".

    Muista, että taulukon ensimmäinen elementti on 0.
    Palauta aina vastauksesi!
*/
    const kilpikonnat = ["Rafael", "Michelangelo", "Leonardo", "Donatello"]
    function turtlePower(kilpikonnat)
    {
      return kilpikonnat[3];
    }

/*
Taulukon elementit ovat muuttuvia, mikä tarkoittaa, että niitä voidaan muuttaa.
Oletetaan esimerkiksi, että meillä on joukko numeroita:

vakionumerot = [14, 56, 78]

Muuttaaksesi arvon 14 (indeksissä 0), teemme näin:

  numerot[0] = 35;

/// TEHTÄVÄ 8 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Määritä indeksiin 1 tallennetun tiedon arvoksi 88, kun annetaan lukujoukko.

  vakionumerot = [1, 4, 6, 8, 0]

// kirjoita koodi tämän rivin alle


Useimmissa tapauksissa et tiedä taulukon tarkkaa pituutta. Toisin sanoen, et tiedä kuinka monta elementtiä se sisältää.
Silloin .length -komento on hyödyksi

Oletetaan, että meillä on joukko elokuvien nimiä:
const movies = ["Matrix", "Se7en", "The Wizard of Oz", "Marry Poppins"]
Saadaksemme elokuvien taulukon tarkan pituuden, käyttäisimme .length-ominaisuutta.
  elokuvat.pituus
Se antaisi sinulle 4, koska elokuvien ryhmässä on neljä elementtiä.
Annettu taulukko arr, jonka pituus on tuntematon, palauttaa sen pituus.
  function getLength(arr) {
  }

  OBJEKTIT
Taulukot ovat hyviä listoille, mutta muihin tehtäviin niiden kanssa voi olla vaikea työskennellä.
Harkitse joukkoa nimiä:
  const firstNames = ["Tyrion", "Jon", "Jorah", "Arya", "Joffrey"]
  const lastNames = ["Lannister", "Snow", "Mormont", "Stark", "Baratheon"]
Entä jos sinulla on mielessäsi sukunimi (oletetaan, että se on Snow) ja haluat etsiä hänen etunimensä.
Taulukoiden kanssa se vaatii paljon työtä, koska "Jon" on yhdessä taulukossa ja
"Snow" (hänen sukunimensä) on täysin eri taulukossa.
Tästä voi tulla hyvin sotkua, koska jos lisäämme uuden henkilön etunimi-taulukkoon,
meidän on myös päivitettävä sukunimi-taulukko. Jos haluamme seurata muutakin kuin
henkilön etu- ja sukunimiä, asiat muuttuvat monimutkaisiksi.

Objektit ovat helpompi tapa tallentaa ja ylläpitää tietoa, kuten tämä:
  const person1 = {
    etunimi: "Joffy",
    sukunimi: "Baratheon",
    sähköposti: "joff@widowswail.com"
  }
  const person2 = {
    etunimi: "Jon",
    sukunimi: "Lumi",
    sähköposti: "brooding@thewall.com"
  }
  const person3 = {
    etunimi: "Tyrion",
    sukunimi: "Lannister",
    sähköposti: "tyrion@pourmeanother.com"
  }

Nyt meillä on jokaiselle henkilölle muuttuja, jonka avulla voidaan saada arvot
helpommin ylläpidettävällä ja luettavalla tavalla.
Esineet ovat kuin avaimet avaimenperässä, jotka avaavat tietyn oven ja jokaisen
oven takana on huone, johon mahtuu monia asioita. Jos jokainen avain on merkitty,
voit nopeasti avata ovet ja päästä käsiksi sisällä oleviin tavaroisiin.

  const person2 = {
    etunimi: "Jon",
    sukunimi: "Lumi",
    sähköposti: "brooding@thewall.com"
  }

Kohteen : vasemmalla puolella olevia asioita kutsutaan avaimiksi ja oikealla
olevia asioita arvoiksi. Kutsumme tätä avainarvo-pareina.


/// TEHTÄVÄ 9 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Syötä seuraavat avain-arvoparit henkilölle4.

    Anna FirstName-arvo "Daenerys".
    Anna sukunimelle arvo "Targaryen".
    Anna sähköpostiin arvo "dragonlady@gmail.com".

    const person4 = {

    }

Jos haluat käyttää henkilön3 sukunimeä, palautetaan henkilö3.sukunimi.
Tätä kutsutaan pistemerkinnäksi, koska se käyttää . määrittääksesi avaimen, jota haluat käyttää.

/// TEHTÄVÄ 10 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Käytä pistemerkintää päästäksesi henkilön sähköpostiin.

  function getEmail(person) {

  }

SILMUKAT
Silmukat tarjoavat nopean ja helpon tavan tehdä jotain toistuvasti.
Tämä osio kattaa yleisimmät tavat tehdä silmukoita nykyaikaisessa JavaScriptissä.
.map()-menetelmä käyttää funktiota jokaiseen taulukon elementtiin.
Sitten palautetaan uusi taulukko. Toisin sanoen .map() ottaa taulukon,
tekee jotain jokaiselle taulukon elementille ja palauttaa uuden taulukon.

Oletetaan, että meillä on joukko numeroita:
  vakionumerot = [1, 4, 9, 16]

Voit kertoa jokaisen numerotaulukon elementin kahdella seuraavasti:
  numerot.map(x => x * 2)

Mistä palautuisi:
  [2, 8, 18, 32]

/// TEHTÄVÄ 10 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Vähennä 2 jokaisesta numerotaulukon alkiosta.
  vakionumerot = [1, 4, 9, 16]
  function subtractTwo(numbers) {

  }

.filter()-menetelmä palauttaa uuden taulukon, joka sisältää kaikki antamasi
funktion testin läpäisevät elementit. Toisin sanoen .filter() ottaa taulukon,
testaa jokaisen elementin ja palauttaa uuden taulukon, joka sisältää vain antamasi
testin läpäiseviä elementtejä.

Oletetaan, että meillä on joukko merkkijonoja:
  const sanat = ["sulatus", "saavutus", "voitto", "lähtö", "ero"]

Jos haluat palauttaa sanataulukon vain alle 5 merkin pituisia elementtejä, teemme näin:
  sanat.filter(sana => sana.pituus < 5)

Joka palauttaa seuraavan tulosteen:
  ["lähtö", "ero"]

/// TEHTÄVÄ 12 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja kirjoita tarvittava testi
ja aja sen jälkeen komentoriviltä npm test.
Palauta vain luvut vuositaulukosta, joka on suurempi kuin 1950.
  vuodet = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]
  function getYears(years) {

  }
*/
