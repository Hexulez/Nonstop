//main thing or not :D
const main = () => {
  console.log("moi");

  let btn_element = document.getElementById("btn");
  btn_element.onclick = (e) => {taskFun(e)};


}



//make new task
const taskFun = () => {
  console.log("miksi");
  let task = document.getElementById("giveTask").value;
  console.log(task);
  makeElement(task);
}
//make element from user given task
const makeElement = (task) => {
  const divRow =document.createElement("div")
  const div = document.createElement("div")   //nämä tekevät kauhean määrän uusia elementtejä
  const para = document.createElement("p");
  const node = document.createTextNode(task);
  const butt = document.createElement("button");
  const nodeX = document.createTextNode("X");
  divRow.classList.add("row");
  butt.classList.add("btn-close")
  butt.classList.add("closeX");   //lisää luokan halutulle elementille
  div.classList.add("row")
  div.classList.add("theTask");
  para.classList.add("text-danger");
  const element = document.getElementById("container");  //keröö jo olevan elementin, mihin myöhemmin sijoitetaan uusia elementtejä
  element.appendChild(divRow);   //sijoitetaan elementtejä paikoilleen
  divRow.appendChild(div);
  div.appendChild(para);
  para.appendChild(node);
  div.appendChild(butt);
  //butt.appendChild(nodeX);
  div.addEventListener("click", (e) => done(e));  //lisätään elementteihin "kuuntelu"
  butt.addEventListener("click", (el) => remove(el))
}
//when task is done
const done = (e) => {
  console.log(e.target);
  e.target.classList.toggle("done")   //lisää ja poistaa luokan jolla saadaan vaihdettua väriä.
}

//remove task
const remove = (el) => {
  console.log("remove?");
  el.target.parentElement.remove() //poistaa buttonia ennen olevan elementin

}
