/**
 * TS 原始数据类型
 */
let age: number = 18;
let myName: string = '老师';
let isloading: boolean = false;

/**
 * 数组类型
 */

let number1: number[] = [1, 2, 3, 4, 5, 6, 7]
let number2: Array<string> = ['a', 'b', 'c']

/**
 * 联合类型
 */
// 数组中既有number类型，同时又有string类型  解释：`|`（竖线）在 TS 中叫做**联合类型**，即：由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种
let arr: (number | string)[] = [1, 'a', 3, 'b'];
