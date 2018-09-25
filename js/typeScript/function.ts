//输入和输出都考虑到
function sum(x: number, y: number): number {
    return x + y;
}

sum(1, 4)

//输入多余的（或者少于要求的）参数，是不被允许的
//sum(1,2,3)
//sum(1)

let sum1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

//用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== 1;
}

//可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}


//TypeScript 会将添加了默认值的参数识别为可选参数
//此时就不受「可选参数必须接在必需参数后面」的限制
function buildName1(firstName: string, lastName: string = 'cat') {
    return firstName + '' + lastName;
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');


function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    })
}

let a = [];
push(a, 1, 2, 3);

//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse1(x: number | string): number | string{
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}

//可以使用重载定义多个 reverse 的函数类型
//TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
