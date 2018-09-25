let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occcured');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click',function(e: MouseEvent) {

})
//当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了
Math.pow(10,2);

//用 TypeScript 写 Node.js
//Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件
npm install @types/node --save-dev