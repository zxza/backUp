//代码虽然没有指定类型，但是会在编译的时候报错
var myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
//等价于
var myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
var myFavoriteNumber3;
myFavoriteNumber3 = 'seven';
myFavoriteNumber3 = 7;
