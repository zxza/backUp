function handleEvent(ele, event) {
    handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
    handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
}
//我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种
//类型别名与字符串字面量类型都是使用 type 进行定义
