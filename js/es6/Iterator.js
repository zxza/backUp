// var it = idMaker();
//
// function idMaker() {
//   var index = 0;
//   return {
//     next : function () {
//       return {value : index++, done : false}
//     }
//   }
// }
//
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
//
//
// var arr = [1,2,3];
// var iter = arr[Symbol.iterator]();
//
// console.log(iter.next());


//一个对象如果要具备可被for...of循环调用的 Iterator 接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）
class RangeIterator {
  constructor(start, end) {
    this.value = start;
    this.end = end;
  }

  [Symbol.iterator]() {return this};

  next() {
    var value = this.value;
    if (value < this.end) {
      this.value++;
      return {value : value, done : false}
    }
    return {value : undefined, done : true}
  }
}

function range(start, end) {
  return new RangeIterator(start, end)
}

for (var value of range(0,3)) {
  console.log(value)
}
