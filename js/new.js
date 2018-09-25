function Dog(name, sex){
  this.name = name;
  this.sex = sex;
}

Dog.prototype.speak = function(){
  console.log(111);
}

var dog = {};
dog.__proto__ = Dog.prototype;
Dog.call(dog,'zm','nv')
