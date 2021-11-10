var x = ["1","2","3"];
var y = "0";
var total = [];
total.push(parseInt(x[y] * 3, 10));


let luku = 0;
for (let y = 0 ; y < x.length; y++) {
luku += parseInt(x[y] * 3, 10);
console.log(luku);
}


function testi(jono)
{
let teksti = ""
let taulukko = Array.from(jono);
for(let i = 0; i < jono.length; i++)
{
switch(taulukko[i])
{
case "a":
taulukko[i] = 4;
break;
case "e":
taulukko[i] = 3;
break;
case "i":
taulukko[i] = 1;
break;
case "o":
taulukko[i] = 0;
break;
case "s":
taulukko[i] = 5;
break;
}
}
teksti = taulukko.toString().replace(/,/g,'');
console.log(teksti);
}
testi("minä olen paras");
