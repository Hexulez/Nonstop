/*
Tämä on minun ylpeyden aihe etenkin sen jälkeen kun saan tämän valmiiksi
Koodi ei ole kaikista näteintä tai tehokkainta, mutta se on puhtaasti omaa käsialaa.
Toki Googlea jouduin hydyntämään hetkittäin mutta logiikka ja toteutus on tehty lennosta,
aina sitä mukaan kun tarvitsin uuden asian.

*/


//muuttujia ja vakioita
const tetrisBoard = document.getElementById("tetrisCanvas");
const tetris_ctx = tetrisBoard.getContext("2d");
let partColor= "red";
let partColor2 = "blue";
let played = []
const testBlock = [
  { x: 0, y: 20 },  { x: 0, y: 40 },
  { x: 0, y: 60 }, { x: 0, y: 160 },
  { x: 0, y: 200 }, { x: 0, y: 220 },
  { x: 0, y: 240 }, { x: 0, y: 320 },
  { x: 0, y: 360 }, { x: 0, y: 200 },
  { x: 0, y: 420 }, { x: 0, y: 440 },
  { x: 0, y: 520 }, { x: 0, y: 560 },
  { x: 0, y: 600 }, { x: 0, y: 620 },
  { x: 0, y: 640 }, { x: 0, y: 720 },
  { x: 0, y: 760 }, { x: 0, y: 400 },
  { x: 0, y: 820 }
]
let nextBlock = [];
let lastPlace = [];
let block = [{x:20, y:0, c:	"#400040"}, {x:20, y:20, c:	"#400040"}, {x:0, y:20, c:"#400040"}, {x:20, y:40, c:"#400040"}];
const t = [{x:20, y:0, c:	"#400040"}, {x:20, y:20, c:	"#400040"}, {x:0, y:20, c:"#400040"}, {x:20, y:40, c:"#400040"}];
const i = [{x:0, y:60, c:"#00ffff"}, {x:0, y:40, c:"#00ffff"}, {x:0, y:20, c:"#00ffff"}, {x:0, y:0, c:"#00ffff"}];
const z = [ { x: 20, y: 0, c: "#00ff00" }, { x: 20, y: 20, c: "#00ff00" }, { x: 0, y: 20, c: "#00ff00" }, { x: 0, y: 40, c: "#00ff00" } ];
const s = [ { x: 0, y: 0, c: "#ff0000" }, { x: 0, y: 20, c: "#ff0000" }, { x: 20, y: 20, c: "#ff0000" }, { x: 20, y: 40, c: "#ff0000" } ];
const o = [ { x: 0, y: 0, c: "#ffff00" }, { x: 20, y: 0, c: "#ffff00" }, { x: 20, y: 20, c: "#ffff00" }, { x: 0, y: 20, c: "#ffff00" } ];
const l = [ { x: 0, y: 0, c: "#ff7f00" }, { x: 0, y: 20, c: "#ff7f00" }, { x: 0, y: 40, c: "#ff7f00" }, { x: 20, y: 40, c: "#ff7f00" } ];
const j = [{ x: 20, y: 0, c: "#0000ff" }, { x: 20, y: 20, c: "#0000ff" }, { x: 20, y: 40, c: "#0000ff" }, { x: 0, y: 40, c: "#0000ff" }];

let logicArr = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
const blockList = [t, i, s, z, o, l, j];

//random block
const randomBlock = () => {
  return Math.floor(Math.random()*6)
}

//borders
const drawBorders =() => {
  tetris_ctx.strokeStyle  = "black" //reunaväri
  tetris_ctx.strokeRect(0, 0, 200, 440); //määrittelee reunojen alueen
}

//draw block piece
const drawPartBlock = (partPiece) => {
  console.log(partPiece);
  tetris_ctx.fillStyle = partPiece.c;
  tetris_ctx.strokeStyle = "light grey";
  tetris_ctx.fillRect(partPiece.x, partPiece.y, 20, 20);
  tetris_ctx.strokeRect(partPiece.x, partPiece.y, 20,20);
}

const unDrawPartBlock = (partPiece) => {
  console.log(partPiece);
  tetris_ctx.fillStyle = "white";
  tetris_ctx.strokeStyle = "white";
  tetris_ctx.fillRect(partPiece.x, partPiece.y, 20, 20);
  tetris_ctx.strokeRect(partPiece.x, partPiece.y, 20,20);
}

//clear canvas
const erase = () => {
  tetris_ctx.clearRect(0, 0, tetrisBoard.width, tetrisBoard.height);
}
//draw block
const drawblock = () =>{
  block.forEach(e => drawPartBlock(e));
}
const unDrawblock = () =>{
  block.forEach(e => unDrawPartBlock(e));
}
//drawPlayed
const drawPlayed =() => {
  played.forEach(e=> drawPartBlock(e))
  }


//block picker
const blockPicker = () =>{
  block = JSON.parse(JSON.stringify(nextBlock));
  nextBlock = JSON.parse(JSON.stringify(blockList[randomBlock()]));
}



//falling
const falling = () => {
  lastPlace = JSON.parse(JSON.stringify(block));
  block.forEach(e =>{return e.y = e.y+20});
  console.log(block);
  bottomCheck()
  drawblock()
}

//const bottom =(elem) => elem == 400;



let logic = false;
//logic
const logicBottom = () =>{
  block.forEach(e=> {if (e.y >= 440){
    //console.log(played);
    logic = true;
  }} )
  console.log("torö");
}

//bottom check
const bottomCheck = () =>{
  logicBottom()
  collision()
  if (logic == true){
    played.push(JSON.parse(JSON.stringify(lastPlace)));
    blockPicker()
    tetrisLines()
    checkLines()
    logic=false
    console.log(played);
  }
}

//brick collision
const collision =  () =>{
  block.forEach(e=>{
    console.log(logicArr);
    console.log(typeof logicArr);

    logicArr.forEach(el =>{
      el.forEach(ele =>{
        if (e.y == ele.y && e.x == ele.x){
          logic = true;
        }
      })
    })
  })
}

//replace long if else
const keyObj =  {440 : 0,
420 : 1, 400 : 2, 380 : 3, 360 : 4,
340 : 5, 320 : 6, 300 : 7, 280 : 8,
260 : 9, 240 : 10, 220 : 11, 200 : 12,
180 : 13, 160 : 14, 140 : 15, 120 : 16,
100 : 17, 80 : 18, 60 : 19, 40 : 20,
20 : 21}

const elif = (key) => keyObj[key]


//beta tetris logic
let tetrisLines = () =>{
  let key = 0
  played.map(e=>{
    e.map(el=>{
      //console.log("onko tämä");
      //console.log(el);
      logicArr[elif(el.y)].push(el)
    })
  })
  played = []
  drawTetrisLines()
}

//drawtetris
const drawTetrisLines = () => {
  logicArr.forEach(e=>{
    //console.log(e);
    //console.log("kaatu");
    e.forEach(el =>{
      drawPartBlock(el);  //tämä tarvitsee korjata....

      console.log(el.y);
    })
  })
};

let tiputa = false;   //asettaa uuden tarkistus arvon jos löytää täysiä rivejä
let remove = []
//check if full lines
const checkLines = () =>{ //tarvii korjaa
  for (let i = 0;i<logicArr.length;++i){ //käy kaikki tiputetut palat läpi.
    if (logicArr[i].length >= 10){ //tarkistaa onko täysi rivi
      console.log("tässä");
      console.log(logicArr[i]);
      remove.unshift(i); //puskee rivi numeron jotta voi myöhemmin poistaa
      tiputa = true;  //ilmoittaa löytyneestä täydestä rivistä
    }
      }
  remove.forEach(e=>logicArr.splice(e,1));
  let count = 20*remove.lenght;
  if (tiputa == true){
    for (let j = remove[0];j<logicArr.length;j++){  //tiputtaa kaikkia loppuja rivejä alemmaksi.
      logicArr[j].every(e => e.y += count);
      console.log("---------------");
      console.log(logicArr[j]);
      console.log("-------------");
      count -= 20;
    }
  }
  remove = [];
  erase();
  drawBorders();
  drawTetrisLines();


}

//block rotation
const rotation = (block) =>{
  if (block[0].c == "#ffff00"){  //ottaa i ja o palikan sivuun
    console.log("testp");
  }
  //käyttää lopuissa palikoissa [1] paikalla olevaa palikkaa kiintopisteenä kääntämisessä
  else {
    for (let i = 0; i<5;i++){
      if (i == 1){
        console.log("=)");
      }
      else if (block[i].c == "#00ffff"){
        if (block[i].y == block[1].y +20){
          block[i].x -=20;
          block[i].y -=20;
        }
        else if (block[i].y == block[1].y -20){
          block[i].x +=20;
          block[i].y +=20;
        }
        else if (block[i].y == block[1].y -40){
          block[i].x +=40;
          block[i].y +=40;
        }
        else if (block[i].x == block[1].x -20){
          block[i].x +=20;
          block[i].y +=20;
        }
        else if (block[i].x == block[1].x +20){
          block[i].x -=20;
          block[i].y -=20;
        }
        else if (block[i].x == block[1].x +40){
          block[i].x -=40;
          block[i].y -=40;
        }
      }
      else {
        if (block[i].x == block[1].x-20 && block[i].y == block[1].y-20  ){ //yksin kertaisesti siirtää eripaikkaan palikat
          block[i].x += 40;
        }
        else if (block[i].x == block[1].x && block[i].y == block[1].y-20 ){
          block[i].x += 20;
          block[i].y += 20;
        }
        else if (block[i].x == block[1].x +20 && block[i].y == block[1].y-20 ){
          block[i].y += 40;
        }
        else if (block[i].x == block[1].x+20 && block[i].y == block[1].y ){
          block[i].x -= 20;
          block[i].y += 20;
        }
        else if (block[i].x == block[1].x+20 && block[i].y == block[1].y+20 ){
          block[i].x -= 40;
        }
        else if (block[i].x == block[1].x && block[i].y == block[1].y+20 ){
          block[i].x -= 20;
          block[i].y -= 20;
        }
        else if (block[i].x == block[1].x-20 && block[i].y == block[1].y+20 ){
          block[i].y -= 40;
        }
        else if (block[i].x == block[1].x-20 && block[i].y == block[1].y ){
          block[i].x += 20;
          block[i].y -= 20;
        }


      }
    }
  }
}

//detecting arrow key presses and change direction... :D
document.addEventListener('keydown', (e) => {

  if(e.keyCode == 37){ // tarkistaa onko painettu vasemmalle?
    unDrawblock()
    block.forEach(e =>e.x -= 20)
    main()
  }
  else if (e.keyCode == 32){ //tarkistaa onko painettu avaruutta?
    unDrawblock()
    rotation(block)
    main()
  }
  else if (e.keyCode == 39){  //tarkistaa onko painettu oikealle?
    unDrawblock()
    block.forEach(e=> e.x += 20)
    main()
  }
  else if (e.keyCode == 40){  //tarkistaa onko painettu alas
    unDrawblock();
    falling()
    main()
  }
});

nextBlock = JSON.parse(JSON.stringify(blockList[randomBlock()]));
//Rule all the kingdom =)
const main = () =>{
  //erase();
  //unDrawblock()
  //tetrisLines();
  //drawTetrisLines()
  //falling();
  dropStart = Date.now()
  bottomCheck()
  //drawPlayed();
  drawblock();


}

let dropStart = Date.now();

const drop = () =>{
  let now = Date.now();
  let delta = now - dropStart;
  if (delta>600){
    //erase();
    unDrawblock()
    falling();
    drawBorders();
    //bottomCheck()
    //drawPlayed();
    //drawblock();

    dropStart= Date.now();
  }

    requestAnimationFrame(drop);

}

drop()
