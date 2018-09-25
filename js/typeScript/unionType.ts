//这里的 let myFavoriteNumber: string | number 的含义是
//允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// let myFavoriteNumber: string | number;
// myFavoriteNumber = true;

//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候,我们只能
//!!!访问此联合类型的所有类型里共有的属性或方法
// function getLength(something: string | number): number {
//     return something.length;
// }
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.


function getString(something: string | number): string {
    return something.toString();
}