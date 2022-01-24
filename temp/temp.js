/*
function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a-b);
  let kerroin = 1;
  let arvo = min;
  let kerrat = 0;
  let testeri = 1;
  for (let i = min; i <= max; i++){
    //console.log()
    if (arvo % i == 0){
      kerrat += 1;
      console.log(i)
      if (kerrat == max-min){
        //console.log(arvo)
        return arvo;
      }
    }
    else {
      arvo += 1;
       i = min;
       kerrat = 0;
       //console.log()

    }
  }
console.log("testi")
}
console.log(smallestCommons([23,18]));
*/

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([23, 18]));
