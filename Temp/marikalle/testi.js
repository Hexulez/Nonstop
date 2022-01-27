/*function moi(){ //Tämä on nyt funktio mitä mietit...
  document.getElementById("teksti").innerHTML = 5*10
}

function testi1() { //tämä on satunnainen funktio tässä
  let muuttuja = "heippa";
  document.getElementById("juttu").innerHTML = muuttuja;
}

//jos on useampi minkä haluaa sivun latauksen yhteydessä kutsua,
//niin itse olen vielä ainakin käyttänyt funktiota funktion sisällä
function kaikki() { //tämä siis vain kutsuu nuo ylemmät jotta niiden sisältö näkyy sivulla
  testi1()
  moi()

}



function testi2() {
  //ja tänne tein nappilla toimivan funtion että saa muutta
  document.getElementById("juttu").innerHTML = "nappi muutti";
}
*/
/*
function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {

       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
       console.log(j);
       var temp = array[i];
       console.log(array);
       array[i] = array[j];
       console.log(array);
       array[j] = temp;
       console.log(array);
   }

   return array;
}

console.log(shuffleArray([10,20,30,40,50,60,70]))
*/
/*let arr = [1,2,3,4,5,6,7];
let sekoitus = (arr) =>{
  for (let i = arr.length-1; i >0;i--){
      let j = Math.floor(Math.random() * (i +1));
      let temp =arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

}
}

sekoitus(arr)
*/



let numbers = [];
const numerot = () =>{

for (var i = 1; i < 17; i++) {
  numbers.push(i)
}
console.log(numbers)
}






const picToCard = (cards) => {
  let arr = [];
  for (let y =0;y<2;y++)
  for (let i = 0; i < cards/2; i++) {

    arr.push(i);
    arr.push(i);

  }
  console.log(arr);
  const suffle = (arr) =>{
    for (let x = arr.length-1; x >0;x--){
        let j = Math.floor(Math.random() * (x +1));
        let temp =arr[x]; //save last number of array
        console.log(arr.length-1);
        arr[x] = arr[j];  // change last number to random number
        arr[j] = temp;  // change that random numner place to last numner of starting array
  }
  console.log(arr);

  }
  return suffle(arr);
}

console.log(picToCard(16));


console.log(picToCard(16));
