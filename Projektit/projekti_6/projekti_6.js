/*
$(document).ready(function() {
  console.log("toimii");
const getData = () =>{
  console.log("testi");
  let data =  $("form").serializeArray()
  testi= JSON.stringify(data);
  console.log(data);
  console.log(testi);
}
  getData()
});
*/
//onload


//Constructor to make Object from all form data
function Customer(fname, lname, street, zip, city, phone, email) {
  this.firstName = fname;
  this.lastName = lname;
  this.street = street;
  this.zip = zip;
  this.city = city;
  this.phone = phone;
  this.email = email;
}
//read data
const readData = () =>{
  let testi =  document.getElementById("firstName").value
  let datalength = document.getElementById("customer").elements.length;
  let data = [];
  for (let i = 1; i< datalength-1; i++){
    data.push(document.getElementById("customer").elements[i].value);
  }
  console.log(data);
  console.log(typeof data);
  return data;
}

//save data

let custNumb = 1
const saveData =(custNumb,named) => localStorage.setItem(custNumb, named);


//Main thing control saving data
const ruleItAll = ()=>{
  if (regex() == true){
    console.log(readData());
    custNumb = document.getElementById("number").value
    customer = new Customer(...readData())
    console.log(typeof customer)
    saveData(custNumb, JSON.stringify(customer))
    let list = Object.entries(localStorage);
    document.getElementById("allData").innerHTML = list
  }
}

//fetch data
const fetchData = () => {
  console.log("toimii")
  let info = customerInfo(document.getElementById("tiedot").value);
  let infoData =[];
  console.log(info);
  info == null?
    alert("Haettua tietoa ei löydy"):
    document.getElementById("information").innerHTML = clean(info);


}
//clean info
const clean = (str) => {
  let arr = str.split("")
  let fixedArr = []
  arr.map(e => e!="{"?
    e!='"'?
    e!="}"?
    fixedArr.push(e):
    console.log("testi1"):
    console.log("testi2"):
    console.log("testi3"))
    return fixedArr.join("")
}




const deleteData =() =>{
  console.log("toimii2");
erase(document.getElementById("poista").value)
}

//poistaa halutun elementin
const erase = (customerID) => localStorage.removeItem(customerID);
//noutaa halutun elementin
const customerInfo = (customerID) => localStorage.getItem(customerID);


/*
const test = () =>{
  console.log(Object.entries(localStorage));
  for (let key in localStorage)
    console.log(key)

}
*/

//regex

const regex = () => {
  const regCumstomer = /[0-9]+/g
  const regName = /[a-ö][a-ö]+[^\W]/gi;
  const regName2 = /[a-ö][a-ö]+[^\W]/gi;
  const regcity = /[a-ö][a-ö]+[^\W]/gi;
  const regStreet =/\w\w+\s*\d*\w*\s*\w*\d*\s*\d*\w*[^\W]/ig
  const regzip = /\b[0-9]{4}[0-9]\b/;
  const regphone = /(\+[0-9]{3})?\s?[0-9]{2,4}\s?\-?[0-9]{6,7}/
  const regemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  console.log(document.getElementById("customer").elements[1].getAttribute("id"));
  let x = document.getElementById("customer").elements.length;
  for (let i = 0;i<x-1;i++){
    let elem = document.getElementById("customer").elements[i].getAttribute("id");
    let elemValue = document.getElementById("customer").elements[i].value;
    let tester =false;
    elem == "number"?
      tester = regCumstomer.test(elemValue):
    elem == "firstName"?
      tester = regName.test(elemValue):
    elem == "lastName"?
      tester = regName2.test(elemValue):
    elem == "street"?
      tester = regStreet.test(elemValue):
    elem == "zip"?
      tester = regzip.test(elemValue):
    elem == "city"?
      tester = regcity.test(elemValue):
    elem == "phone"?
      tester = regphone.test(elemValue):
    elem == "email"?
      tester = regemail.test(elemValue):
      tester = false;

    if (tester == false){
      console.log(elem);
      alert("check " + elem);
      return false
    }


  }
  return true;
}


const iRule = () =>{
  console.log("eka");
  document.getElementById("save").addEventListener("click",ruleItAll )
  console.log("toka");
  document.getElementById("remove").addEventListener("click", deleteData)
  console.log("kolmas");
  document.getElementById("fetch").addEventListener("click", fetchData);
}
