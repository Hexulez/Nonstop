
//can make tetris objet
let block =[];
let times = 0
const objectCreator = () =>{
  for (let i = 40;i<=840;i += 40){
    let ob = {x:0, y:i};
    block.push(ob);
    times ++
  }
  console.log(times);
  return block
}

console.log(objectCreator());




const blockChanger = () =>{
  let elem = [{x:10, y:0}, {x:10, y:10},{x:10, y:20},{x:0, y:20}]
  elem = elem.map(e=> {
    e.x = e.x*4;
    e.y = e.y*4;
    return e});
  return elem
}

console.log(blockChanger());
