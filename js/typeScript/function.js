//输入和输出都考虑到
function sum(x, y) {
    return x + y;
}
sum(1, 4);
//输入多余的（或者少于要求的）参数，是不被允许的
//sum(1,2,3)
//sum(1)
var sum1 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== 1;
};
//可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
//TypeScript 会将添加了默认值的参数识别为可选参数
//此时就不受「可选参数必须接在必需参数后面」的限制
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + '' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse1(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
