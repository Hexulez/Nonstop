

//muuttujia ja vakioita
const tetrisBoard = document.getElementById("tetrisCanvas");
const tetris_ctx = tetrisBoard.getContext("2d");
let partColor= "red";
let partColor2 = "blue";
let played = []
const testBlock = [
  { x: 0, y: 40 },  { x: 0, y: 80 },
  { x: 0, y: 120 }, { x: 0, y: 160 },
  { x: 0, y: 200 }, { x: 0, y: 240 },
  { x: 0, y: 280 }, { x: 0, y: 320 },
  { x: 0, y: 360 }, { x: 0, y: 400 },
  { x: 0, y: 440 }, { x: 0, y: 480 },
  { x: 0, y: 520 }, { x: 0, y: 560 },
  { x: 0, y: 600 }, { x: 0, y: 640 },
  { x: 0, y: 680 }, { x: 0, y: 720 },
  { x: 0, y: 760 }, { x: 0, y: 800 },
  { x: 0, y: 840 }
]
let nextBlock = [];
let lastPlace = [];
let block = [{x:40, y:0, c:	"#800080"}, {x:40, y:40, c:	"#800080"}, {x:0, y:40, c:"#800080"}, {x:40, y:80, c:"#800080"}];
const t = [{x:40, y:0, c:	"#800080"}, {x:40, y:40, c:	"#800080"}, {x:0, y:40, c:"#800080"}, {x:40, y:80, c:"#800080"}];
const i = [{x:0, y:0, c:"#00ffff"}, {x:0, y:40, c:"#00ffff"}, {x:0, y:80, c:"#00ffff"}, {x:0, y:120, c:"#00ffff"}];
const s = [ { x: 40, y: 0, c: "#00ff00" }, { x: 40, y: 40, c: "#00ff00" }, { x: 0, y: 40, c: "#00ff00" }, { x: 0, y: 80, c: "#00ff00" } ];
const z = [ { x: 0, y: 0, c: "#ff0000" }, { x: 0, y: 40, c: "#ff0000" }, { x: 40, y: 40, c: "#ff0000" }, { x: 40, y: 80, c: "#ff0000" } ];
const o = [ { x: 0, y: 0, c: "#ffff00" }, { x: 40, y: 0, c: "#ffff00" }, { x: 40, y: 40, c: "#ffff00" }, { x: 0, y: 40, c: "#ffff00" } ];
const l = [ { x: 0, y: 0, c: "#ff7f00" }, { x: 0, y: 40, c: "#ff7f00" }, { x: 0, y: 80, c: "#ff7f00" }, { x: 40, y: 80, c: "#ff7f00" } ];
const j = [{ x: 40, y: 0, c: "#0000ff" }, { x: 40, y: 40, c: "#0000ff" }, { x: 40, y: 80, c: "#0000ff" }, { x: 0, y: 80, c: "#0000ff" }];

let logicArr = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
const blockList = [t, i, s, z, o, l, j];

//random block
const randomBlock = () => {
  return Math.floor(Math.random()*6)
}

//draw block piece
const drawPartBlock = (partPiece) => {
  console.log(partPiece);
  tetris_ctx.fillStyle = partPiece.c;
  tetris_ctx.strokeStyle = "light grey";
  tetris_ctx.fillRect(partPiece.x, partPiece.y, 39, 39);
  tetris_ctx.strokeRect(partPiece.x, partPiece.y, 39,39);
}

//clear canvas
const erase = () => {
  tetris_ctx.clearRect(0, 0, tetrisBoard.width, tetrisBoard.height);
}
//draw block
const drawblock = () =>{
  block.forEach(e => drawPartBlock(e));
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
  block.forEach(e =>{return e.y = e.y+40});
  console.log(block);
}

//const bottom =(elem) => elem == 800;



let logic = false;
//logic
const logicBottom = () =>{
  block.forEach(e=> {if (e.y >= 800){
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
const keyObj =  {800 : 0,
760 : 1, 720 : 2, 680 : 3, 640 : 4,
600 : 5, 560 : 6, 520 : 7, 480 : 8,
440 : 9, 400 : 10, 360 : 11, 320 : 12,
280 : 13, 240 : 14, 200 : 15, 160 : 16,
120 : 17, 80 : 18, 40 : 19, 0 : 20}

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
  //console.log(logicArr);
  played = []
  /*played.map(e =>{
    e.map(el=>{
      if (el.y == 800){
        logicArr[0].push(el)
      }
      else if (el.y == 760){
        logicArr[1].push(el)
      }
    })
  })*/
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

//detecting arrow key presses and change direction... :D
document.addEventListener('keydown', (e) => {

  if(e.keyCode == 37){ // tarkistaa onko painettu vasemmalle?
    block.forEach(e =>e.x -= 40)
  }
  else if (e.keyCode == 38){ //tarkistaa onko painettu ylös?
  }
  else if (e.keyCode == 39){  //tarkistaa onko painettu oikealle?
    block.forEach(e=> e.x += 40)
  }
  else if (e.keyCode == 40){  //tarkistaa onko painettu alas
  }
});

//Rule all the kingdom =)
const main = () =>{
  nextBlock = JSON.parse(JSON.stringify(blockList[randomBlock()]));
  console.log("kerran");
  const mainLoop = () =>{
    setTimeout(()=>{
      //console.log(played);
      erase();
      tetrisLines();
      drawTetrisLines()
      falling();

      bottomCheck()
      drawPlayed();
      drawblock();
      mainLoop()
    }, 200 )
  }
  mainLoop()
}



// MUistiin.... [[{}]] rakenne pelattuihin palikoihin
