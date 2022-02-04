

//muuttujia ja vakioita
const tetrisBoard = document.getElementById("tetrisCanvas");
const tetris_ctx = tetrisBoard.getContext("2d");
let partColor= "red";
let partColor2 = "blue";
let block = [{x:10, y:0}];
const t = [{x:10, y:0}, {x:10, y:10}, {x:10, y:20}, {x:0, y:10}];


const drawPartBlock = (partPiece) => {
  tetris_ctx.fillStyle = partColor;
  tetris_ctx.strokeStyle = partColor2;
  tetris_ctx.fillRect(partPiece.x, partPiece.y, 10, 10);
  tetris_ctx.strokeRect(partPiece.x, partPiece.y, 10,10);
}

const drawblock = () =>{
  t.forEach(e => drawPartBlock(e));
}

const main = () =>{
  drawblock()
}
