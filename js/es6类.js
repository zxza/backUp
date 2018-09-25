//es5的构造函数的方法
function Point (x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ',' + this.y + ')';
}

var p = new Point(1,2);

//es6构造函数类的方法
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}

//ES6的类，完全可以看做构造函数的另一种写法
//类的数据类型就是函数，类本身就指向构造函数
class Point {

}

typeof Point; //"function"
Point === Point.prototype.constructor //true


//使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致
class Bar {
  doStuff () {
    console.log('stuff');
  }
}

var b = new Bar();
b.doStuff();  //"stuff"


//由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。
//Object.assign方法可以很方便地一次向类添加多个方法
class Point {
  constructor() {

  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});

//prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的
Point.prototype.constructor === Point;

//ES6类的内部所有定义的方法，都是不可枚举的（non-enumerable）
Object.keys(Point.prototype)   //[]
Object.getOwnPropertyNames(Point.prototype);

//ES5类的内部定义的方法可以枚举
Object.keys(Point.prototype)  //['toString']
Object.getOwnPropertyNames(Point.prototype);

//严格模式
//类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。
//考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。

//3.constructor方法
class Point {

}
//等同于
class Point {
  constructor() {}
};

//类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行
class Foo {
  constructor() {

  }
}

Foo();  // TypeError: Class constructor Foo cannot be invoked without 'new'

//与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}

var point = new Point(2, 3);

point.toString();
point.hasOwnProperty('x') //true
point.hasOwnProperty('y') //true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true

//与 ES5 一样，类的所有实例共享一个原型对象
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__ //true

//5class表达式
//上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类
const MyClass = class Me {
  getClassName () {
    return Me.name;
  }
}

//如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式
const MyClass = class { /*....*/ }

let init = new MyClass();
init.getClassName(); //Me

//6.不存在变量提升

//7.私有方法和私有属性
//方法1：将私有方法移出模块，因为模块内部的所有方法都是对外可见的

class Widget {
  foo (baz) {
    bar.call(this,baz)
  }
}

//私有方法
function bar (baz) {
  return this.snaf = baz;
}

//方法2：利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
