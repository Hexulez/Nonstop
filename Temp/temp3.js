function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in Dog){
  if(Dog.hasOwnProperty(prop)){
    ownProps.push(prop);
  }
  else {
    prototypeProps.push(prop);
  }
}
console.log(ownProps)
// Only change code below this line
