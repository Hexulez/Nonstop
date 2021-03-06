//Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

//image bank
const imgBank = [

      {imgSrc: "./images/beatles.jpeg", name: "beatles"},
      {imgSrc: "./images/blink182.jpeg", name: "blink182"},
      {imgSrc: "./images/ccr.jpeg", name: "ccr"},
      {imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
      {imgSrc: "./images/godsmack.jpeg", name: "godsmack"},
      {imgSrc: "./images/ledzep.jpeg", name: "ledzep"},
      {imgSrc: "./images/metallica.jpeg", name: "metallica"},
      {imgSrc: "./images/nirvana.jpeg", name: "nirvana"},
      {imgSrc: "./images/acdc.jpg", name: "acdc"},
      {imgSrc: "./images/bonjovi.jpg", name: "bonjovi"},
      {imgSrc: "./images/deeppurple.jpg", name: "deeppurple"},
      {imgSrc: "./images/gunsandroses.jpg", name: "gunsandroses"},
      {imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},
      {imgSrc: "./images/queen.jpeg", name: "queen"},
      {imgSrc: "./images/rhcp.jpg", name: "rhcp"},
      {imgSrc: "./images/rollingstones.jpg", name: "rollingstones"},
      {imgSrc: "./images/scorpions.jpeg", name: "scorpions"},
      {imgSrc: "./images/theoffspring.jpg", name: "theoffspring"},

  ];


// fill getData
const fill = (card) =>{
  let numberOfCards = [];
  for (let y =0;y<2;y++) {
    for (let i = 0; i < card; i++) {
      numberOfCards.push(imgBank[i]);
    }
  }
  return numberOfCards
}
numberOfCards= fill(18);

//Generate the object
const getData = () =>  numberOfCards;

//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate the HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

//Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //Logic
    if (flippedCards.length === 2) {
        if (flippedCards[0]. getAttribute("name") === flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        }
        else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("Try again");
            }
        }
    }
    //Run a check to see if we won the game
    if (toggleCard.length === 16) {
        restart("You won");
    }
};

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();


//Hexulez new lines star here


document.getElementById("valitseKoko").addEventListener("change",(value)=>
valitseKoko(value))


const boardEraser = () =>{
  let div = document.querySelector('.card');
  if (div != null ) {
    document.querySelectorAll('.card').forEach(e => e.remove());
  }}

//size change

const valitseKoko = (value) => {
  boardEraser()

  let elem = document.getElementsByClassName("board")
  let size = document.getElementById("valitseKoko").value;
    if (size == 16){
      elem[0].style.gridTemplateColumns = "repeat(4, 8rem)"
      elem[0].style.gridTemplateRows = "repeat(4, 8rem)"
      numberOfCards = fill(8)
    }
    else if (size == 24){
      elem[0].style.gridTemplateColumns = "repeat(4, 8rem)"
      elem[0].style.gridTemplateRows = "repeat(6, 8rem)"
      numberOfCards = fill(12)
    }
    else if (size == 36){
      elem[0].style.gridTemplateColumns = "repeat(6, 8rem)"
      elem[0].style.gridTemplateRows = "repeat(6, 8rem)"
      numberOfCards = fill(18)
    }
  cardGenerator()
}
