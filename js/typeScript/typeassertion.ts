//确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
function getLength(something: string | number): number{
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
} 

//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function toBoolean(something: string | number): number {
    return <boolean>something;
}