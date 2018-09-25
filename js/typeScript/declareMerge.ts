//接口的合并
interface Alarm{
    price: number;
}

interface Alarm{
    time: number;
}

//相当于  //合并的属性的类型必须是唯一的
interface Alarm{
    price: number;
    time: number;
}

//方法的合并
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}

//相当于
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}