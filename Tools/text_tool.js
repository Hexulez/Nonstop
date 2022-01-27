/*let abc =  "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, å, ä, ö"

abc = abc.toUpperCase().split(", ");
console.log(abc);
*/
function Picture(os, nimi){
  this.imgSrc = os;
  this.name = nimi;
}
let lista = []
const obj = {imgSrc: "img", name:"nimi"}

let testi= []
const allPictures =  [
  "kuvat/aasi.jpg", "kuvat/apina.jpg", "kuvat/haukka.jpg",
  "kuvat/janis.jpg", "kuvat/kauris.jpg", "kuvat/kettu.jpg",
  "kuvat/kili.jpg", "kuvat/kirahvi.jpg", "kuvat/kissa.jpg",
  "kuvat/koira.jpg", "kuvat/kultapanda.jpg", "kuvat/lammas.jpg",
  "kuvat/leppakerttu.jpg", "kuvat/lintu.jpg", "kuvat/norsu.jpg",
  "kuvat/seepra.jpg", "kuvat/tiikeri.jpg", "kuvat/villisika.jpg"

]
//testi.push(new Picture("kuva","juttu"))
testi.push(new Picture("kuva1","juttu1"))

for (let i = 0; i < allPictures.length; i++) {
  lista.push(JSON.parse(JSON.stringify(obj)))
  console.log(allPictures[i])
  lista[i].imgSrc = "./images/" +allPictures[i].slice(6)
  lista[i].name= allPictures[i].slice(6,11);
  console.log(i);
}

testi.push(allPictures.map(e => new Picture(e, e.slice(6,11)) ))

console.log(lista)
//console.log(testi)

/*
function checkCashRegister(price, cash, cid) {
  let erotus= cash -price;
  let left = erotus.toFixed(3)
  console.log(left);
  let change = cid;
  let change2 = JSON.parse(JSON.stringify(change));
  console.log(typeof left);
  let giveback = [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]
  let arvo = 8;
  const check = ()=> {
    console.log("check")
    console.log(check)
    console.log(left);
    console.log(arvo);
    left >= 100? arvo = 8:
    left >= 20?  arvo = 7:
    left >= 10?  arvo = 6:
    left >= 5?   arvo = 5:
    left >= 1?   arvo = 4:
    left >= 0.25? arvo = 3:
    left >= 0.1? arvo = 2:
    left >= 0.05? arvo = 1:
    left >= 0.005? arvo = 0:
    arvo = -1;
  }
  console.log();
  console.log("testi");

  const vaihto = () =>{
    console.log("vaihto")
    console.log(left)
    console.log(arvo)
    arvo == 8? change[8][1]>=100?
    (change[8][1]-=100,(left-=100).toFixed(2), giveback[8][1]+=100 ):
    (arvo = 7, vaihto()):
    arvo == 7? change[7][1]>=20?
    (console.log(change[7][1]), change[7][1]-=20, (left-=20).toFixed(2), giveback[7][1]+=20):
    (arvo = 6, vaihto()):
    arvo == 6? change[6][1]>=10?
    (change[6][1]-=10, (left-=10).toFixed(2), giveback[6][1]+=10):
    (arvo = 5, vaihto()):
    arvo == 5? change[5][1]>=5?
    (change[5][1]-=5, (left-=5).toFixed(2), giveback[5][1]+=5):
    (arvo = 4, vaihto()):
    arvo == 4? change[4][1]>=1?
    (change[4][1]-=1, (left-=1).toFixed(2), giveback[4][1]+=1):
    (arvo = 3, vaihto()):
    arvo == 3? change[3][1]>=0.25?
    (change[3][1]-=0.25,(left-=0.25).toFixed(2), giveback[3][1]+=0.25):
    (arvo = 2, vaihto()):
    arvo == 2? change[2][1]>=0.1?
    (change[2][1]-=0.1, (left-=0.1).toFixed(2), giveback[2][1]+=0.1):
    (arvo = 1, vaihto()):
    arvo == 1? change[1][1]>=0.05?
    (change[1][1]-=0.05, (left-=0.05).toFixed(2), giveback[1][1]+=0.05):
    (arvo = 0, vaihto()):
    arvo == 0? change[0][1]>=0.01?
    (change[0][1]-=0.01,console.log(change[0][1]), (left-=0.01).toFixed(2), giveback[0][1]+=0.01):
    (arvo = -1, vaihto()):arvo= -1;
  }
  let i = true
  console.log(arvo)
  while (arvo>-1){
    console.log(i)
    console.log("while")
    console.log()

    check()
    console.log(arvo)
    vaihto()
    if(arvo == -1){
      i = false;
    }
  }

  let final = {status:"", change:[]}
  const thyName = () =>{
    console.log("thyname")
    console.log(left)



    giveback.forEach(e => {
      if (e[1] >0){
        final.change.unshift(e);
    }})
    if  (change.every(e => e[1]== 0) && left<1 || change.every(e => e[1]== 0 )){
        final.status = "INSUFFICIENT_FUNDS";

        final.change = []
    }
    else if (change.every(e => e[1]<0.01)){
      final.status = "CLOSED";

      final.change = change2;



    }
    else if (left <0.009) {
      final.status = "OPEN";

    }
    else {
      final.status = "INSUFFICIENT_FUNDS";

        final.change = []
    }
  }
  //vaihto()
  thyName()
  console.log(change2)
  console.log(final)
  return final;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
*/
