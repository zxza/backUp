//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象
let xcatliu: [string, number] = ['Xcat Liu', 25];

//当赋值或访问一个已知索引的元素时，会得到正确的类型
let xcatliu1: [string, number];
xcatliu1[0] = 'Xcat Liu';
xcatliu1[1] = 23;

//当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
xcatliu1[0].slice(1);
xcatliu1[1].toFixed(2);


//当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型
//数组的第三项满足联合类型 string | number
let xcatliu2: [string. number];
xcatliu2 = ['Xcat Liu', 25, 'http://xcatliu.com/'];


//当访问一个越界的元素，也会识别为元组中每个类型的联合类型
//如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的属性或方法
let xcatliu3: [string, number];
xcatliu3 = ['Xcat Liu', 25, 'http://xcatliu.com/'];

console.log(xcatliu3[2].slice(1));