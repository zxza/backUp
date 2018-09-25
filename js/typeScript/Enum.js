//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等
//枚举使用 enum 关键字来定义
//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
//手动赋值
//未手动赋值的枚举项会接着上一个枚举项递增
var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 7] = "Sun";
    Days1[Days1["Mon"] = 1] = "Mon";
    Days1[Days1["Tue"] = 2] = "Tue";
    Days1[Days1["Wed"] = 3] = "Wed";
    Days1[Days1["Thu"] = 4] = "Thu";
    Days1[Days1["Fri"] = 5] = "Fri";
    Days1[Days1["Sat"] = 6] = "Sat";
})(Days1 || (Days1 = {}));
;
console.log(Days1["Sun"] === 7); // true
console.log(Days1["Mon"] === 1); // true
console.log(Days1["Tue"] === 2); // true
console.log(Days1["Sat"] === 6); // true
//如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 3] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = 2] = "Tue";
    Days2[Days2["Wed"] = 3] = "Wed";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
;
console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // true
//手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查 
var Days3;
(function (Days3) {
    Days3[Days3["Sun"] = 7] = "Sun";
    Days3[Days3["Mon"] = 8] = "Mon";
    Days3[Days3["Tue"] = 9] = "Tue";
    Days3[Days3["Wed"] = 10] = "Wed";
    Days3[Days3["Thu"] = 11] = "Thu";
    Days3[Days3["Fri"] = 12] = "Fri";
    Days3[Days3["Sat"] = "S"] = "Sat";
})(Days3 || (Days3 = {}));
;
//手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
var Days4;
(function (Days4) {
    Days4[Days4["Sun"] = 7] = "Sun";
    Days4[Days4["Mon"] = 1.5] = "Mon";
    Days4[Days4["Tue"] = 2.5] = "Tue";
    Days4[Days4["Wed"] = 3.5] = "Wed";
    Days4[Days4["Thu"] = 4.5] = "Thu";
    Days4[Days4["Fri"] = 5.5] = "Fri";
    Days4[Days4["Sat"] = 6.5] = "Sat";
})(Days4 || (Days4 = {}));
;
console.log(Days4["Sun"] === 7); // true
console.log(Days4["Mon"] === 1.5); // true
console.log(Days4["Tue"] === 2.5); // true
console.log(Days4["Sat"] === 6.5); // true
//常数项和计算所得项
//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
;
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除
//上例的编译结果是
//var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
