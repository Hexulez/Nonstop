







/*
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var array = rangeOfNumbers(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}
*/

/*
const picToCard = (cards) => {
  let arr = [];
  for (let y =0;y<2;y++)
  for (let i = 0; i < cards/2; i++) {

    arr.push(i);
    arr.push(i);

  }
  const suffle = (arr) =>{
    for (let x = arr.length-1; x >0;x--){

        let j = Math.floor(Math.random() * (x +1));
        let temp =arr[x]; //save last number of array
        arr[x] = arr[j];  // change last number to random number
        arr[j] = temp;  // change that random numner place to last numner of starting array
  }
  return arr;

  }
  console.log("testi");
  console.log(suffle(arr));
  return suffle(arr);
}

console.log(picToCard(16));


*/
let juttu = {change: 100}
let tarina = ["jee"]
juttu.change =  tarina

console.log(juttu.change)
