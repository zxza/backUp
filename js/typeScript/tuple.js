//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象
var xcatliu = ['Xcat Liu', 25];
//当赋值或访问一个已知索引的元素时，会得到正确的类型
var xcatliu1;
xcatliu1[0] = 'Xcat Liu';
xcatliu1[1] = 23;
//当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
xcatliu1[0].slice(1);
xcatliu1[1].toFixed(2);
//当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型
//数组的第三项满足联合类型 string | number
var xcatliu2;
xcatliu2 = ['Xcat Liu', 25, 'http://xcatliu.com/'];
var xcatliu3;
xcatliu3 = ['Xcat Liu', 25, 'http://xcatliu.com/'];
console.log(xcatliu3[2].slice(1));
