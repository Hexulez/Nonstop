

//muuttujia ja vakioita
const tetrisBoard = document.getElementById("tetrisCanvas");
const tetris_ctx = tetrisBoard.getContext("2d");
let partColor= "red";
let partColor2 = "blue";
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
let block = [{x:40, y:0}, {x:40, y:40}, {x:0, y:40}, {x:40, y:80}];
const t = [{x:40, y:0}, {x:40, y:40}, {x:0, y:40}, {x:40, y:80}];
const i = [{x:0, y:0}, {x:0, y:40}, {x:0, y:80}, {x:0, y:120}];
const s = [ { x: 40, y: 0 }, { x: 40, y: 40 }, { x: 0, y: 40 }, { x: 0, y: 80 } ];
const z = [ { x: 0, y: 0 }, { x: 0, y: 40 }, { x: 40, y: 40 }, { x: 40, y: 80 } ];
const o = [ { x: 0, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 40 }, { x: 0, y: 40 } ];
const l = [ { x: 0, y: 0 }, { x: 0, y: 40 }, { x: 0, y: 80 }, { x: 40, y: 80 } ];
const j = [{ x: 40, y: 0 }, { x: 40, y: 40 }, { x: 40, y: 80 }, { x: 0, y: 80 }];

const blockList = [t, i, s, z, o, l, j];

//random block
const randomBlock = () => {
  console.log(Math.floor(Math.random()*4));
  return Math.floor(Math.random()*6)
}

//draw block piece
const drawPartBlock = (partPiece) => {
  tetris_ctx.fillStyle = partColor;
  tetris_ctx.strokeStyle = partColor2;
  tetris_ctx.fillRect(partPiece.x, partPiece.y, 40, 40);
  tetris_ctx.strokeRect(partPiece.x, partPiece.y, 40,40);
}

//clear canvas
const erase = () => {
  tetris_ctx.clearRect(0, 0, tetrisBoard.width, tetrisBoard.height);
}
//draw block
const drawblock = () =>{
  console.log(randomBlock());
  //testBlock.forEach(e => drawPartBlock(e));
  block.forEach(e => drawPartBlock(e));
}

//block picker
const blockPicker = () =>{
  block = [...nextBlock];
  nextBlock = [...blockList[randomBlock()]];
}



//falling
const falling = () => {
  lastPlace = [...block];
  console.log(typeof block);
  console.log(block);
  block.forEach(e => e.y = e.y+40)
  console.log();
  console.log(block);
}

//logic
const logic = () =>{
  block.forEach(e => {
    if (e.y >= 480){
      blockPicker()
    }

  })
}

//Rule all the kingdom =)
const main = () =>{
  nextBlock = [...blockList[randomBlock()]];
  console.log(block);
  const mainLoop = () =>{
    setTimeout(()=>{
      console.log("time");
      logic()
      erase();
      falling();
      drawblock();
      mainLoop()
    }, 1000 )
  }
  mainLoop()
}
