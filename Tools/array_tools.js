

const kuvat =
[
  { imgSrc: './images/aasi.jpg', name: 'aasi.' },
{ imgSrc: './images/apina.jpg', name: 'apina' },
{ imgSrc: './images/haukka.jpg', name: 'haukk' },
{ imgSrc: './images/janis.jpg', name: 'janis' },
{ imgSrc: './images/kauris.jpg', name: 'kauri' },
{ imgSrc: './images/kettu.jpg', name: 'kettu' },
{ imgSrc: './images/kili.jpg', name: 'kili.' },
{ imgSrc: './images/kirahvi.jpg', name: 'kirah' },
{ imgSrc: './images/kissa.jpg', name: 'kissa' },
{ imgSrc: './images/koira.jpg', name: 'koira' },
{ imgSrc: './images/kultapanda.jpg', name: 'kulta' },
{ imgSrc: './images/lammas.jpg', name: 'lamma' },
{ imgSrc: './images/leppakerttu.jpg', name: 'leppa' },
{ imgSrc: './images/lintu.jpg', name: 'lintu' },
{ imgSrc: './images/norsu.jpg', name: 'norsu' },
{ imgSrc: './images/seepra.jpg', name: 'seepr' },
{ imgSrc: './images/tiikeri.jpg', name: 'tiike' },
{ imgSrc: './images/villisika.jpg', name: 'villi' },
{ imgSrc: './images/aasi.jpg', name: 'aasi.' },
  { imgSrc: './images/apina.jpg', name: 'apina' },
  { imgSrc: './images/haukka.jpg', name: 'haukk' },
  { imgSrc: './images/janis.jpg', name: 'janis' },
  { imgSrc: './images/kauris.jpg', name: 'kauri' },
  { imgSrc: './images/kettu.jpg', name: 'kettu' },
  { imgSrc: './images/kili.jpg', name: 'kili.' },
  { imgSrc: './images/kirahvi.jpg', name: 'kirah' },
  { imgSrc: './images/kissa.jpg', name: 'kissa' },
  { imgSrc: './images/koira.jpg', name: 'koira' },
  { imgSrc: './images/kultapanda.jpg', name: 'kulta' },
  { imgSrc: './images/lammas.jpg', name: 'lamma' },
  { imgSrc: './images/leppakerttu.jpg', name: 'leppa' },
  { imgSrc: './images/lintu.jpg', name: 'lintu' },
  { imgSrc: './images/norsu.jpg', name: 'norsu' },
  { imgSrc: './images/seepra.jpg', name: 'seepr' },
  { imgSrc: './images/tiikeri.jpg', name: 'tiike' },
  { imgSrc: './images/villisika.jpg', name: 'villi' }
];

console.log(kuvat[0].imgSrc);

let arr = []
arr.push(kuvat.map(e => e.imgSrc))

console.log(arr.flat());
