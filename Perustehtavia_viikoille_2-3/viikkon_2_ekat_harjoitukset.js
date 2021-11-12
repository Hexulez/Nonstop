function jarjesta() {
  let jono = [];
  jono.push(document.getElementById("eka").value)
  jono.push(document.getElementById("toka").value)
  jono.push(document.getElementById("kolmas").value)
  return jono.sort((a, b) => a - b);
}
