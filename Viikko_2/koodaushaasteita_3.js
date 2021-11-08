function armstrong() {
  let vastaus = [];
  for (var i = 100; i < 1000; i++) {
    let x = i.toString().split("");
      let luku = 0;
      for (let y = 0 ; y < x.length; i++) {
      luku += parseInt(x[y] * 3, 10);
      if (luku == i) {
        vastaus.push(luku);

      }

      }
    console.log(x);
    console.log(i);
    console.log("luku");

  }
}
function testi() {

  return armstrong()
}
armstrong()
console.log(luku);
