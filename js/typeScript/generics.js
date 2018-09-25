//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
//泛型
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
//接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
//多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
//泛型约束
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//多个类型参数之间也可以互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
var createArray;
createArray = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray(3, 'x'); // ['x', 'x', 'x']
var createArray;
createArray = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray(3, 'x'); // ['x', 'x', 'x']
//泛型类
//与泛型接口类似，泛型也可以用于类的类型定义中
