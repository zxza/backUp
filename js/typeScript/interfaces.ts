//赋值的时候，变量的形状必须和接口的形状保持一致
interface Person{
    name: String;
    age: number
}

let tom:Person = {
    name: 'Tom',
    age: 40
}

//定义的变量比接口少了一些属性是不允许的
// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom'
// };


//多一些属性也是不允许的
// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

//可选属性
//可选属性的含义是该属性可以不存在
//仍然不允许添加未定义的属性
interface Person1{
    name: string;
    age?: number
}

let zxza: Person1 = {
    name : 'zxza'
}


//任意属性
interface Person2{
    name: string;
    age?: number;
    [propName: string]: any; 
}

let zxza1: Person2 = {
    name: 'Tom',
    genger: 'male'
}

//只读属性
interface Person3{
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

//只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
let zxza2: Person3 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
}