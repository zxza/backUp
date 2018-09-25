let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

let anyString: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
// let something;
// something = 'seven';
// something = 7;

// something.setName('Tom');

let something: any;
something = 'seven';
something = 7;

something.setName('Tom');


