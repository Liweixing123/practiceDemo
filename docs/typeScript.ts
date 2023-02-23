/**
 * !TS 原始数据类型
 */
let age: number = 18;
let myName: string = '老师';
let isloading: boolean = false;

/**
 * !数组类型
 */

let number1: number[] = [1, 2, 3, 4, 5, 6, 7]
let number2: Array<string> = ['a', 'b', 'c']

/**
 * !联合类型
 */
// 数组中既有number类型，同时又有string类型  解释：`|`（竖线）在 TS 中叫做**联合类型**，即：由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种
let arr: (number | string)[] = [1, 'a', 3, 'b'];

/**
 * !类型别名
 */
// 能够使用类型别名给类型起别名
// - `类型别名（自定义类型）`：为任意类型起别名
// - 使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，**简化该类型的使用**
type Customer = (string | Number)[]

let arr1: Customer = [1, 'A']

// 解释:

// 1. 使用 `type` 关键字来创建自定义类型
// 2. 类型别名（比如，此处的 *CustomArray*）可以是任意合法的变量名称
// 3. 推荐使用大写字母开头
// 4. 创建类型别名后，直接使用该类型别名作为变量的类型注解即可

/**
 * !函数类型
 */
// - 函数的类型实际上指的是：`函数参数`和`返回值`的类型
// - 为函数指定类型的两种方式：
//   1. 单独指定参数、返回值的类型
//   2. 同时指定参数、返回值的类型
// 单独指定参数、返回值的类型：
// 函数声明
function add(num1: number, num2: number): number {
    return num1 + num2
}
// 箭头函数
const fun = (num1: number, num2: number): number => num1 + num2

// 同时指定参数、返回值的类型:
type Addfn = (num1: number, num2: number) => number

const add2: Addfn = (num1, num2) => {
    return num1 + num2
}

// - 解释：当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型
// - 注意：这种形式只适用于函数表达式

/**
 * !void 类型
 */
// 如果函数没有返回值，那么，函数返回值类型为：`void`
function greet(name: string, message: string): void {
    console.log('Hello');
}
// 如果一个函数没有返回值，此时，在 TS 的类型中，应该使用 `void` 类型

/**
 * !可选参数
 */
// - 使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到**可选参数**了
// - 比如，数组的 slice 方法，可以 `slice()` 也可以 `slice(1)` 还可以 `slice(1, 3)` 
function mySlice(state?: string, end?: string): void {
    console.log('起始索引')
}
// - 可选参数：在可传可不传的参数名称后面添加 `?`（问号）
// - 注意：**可选参数只能出现在参数列表的最后**，也就是说可选参数后面不能再出现必选参数

/**
 * !对象类型
 */
// JS 中的对象是由属性和方法构成的，而 **TS 对象的类型就是在描述对象的结构**（有什么类型的属性和方法）
// 有属性的对象
let person: { name: string } = {
    name: '同学'
}
// 既有属性又有方法的对象
// 在一行代码中指定对象的多个属性类型时，使用 `;`（分号）来分隔
let person2: { name: string; sayHi(): void } = {
    name: 'jackson',
    sayHi() { }
}
// 对象中如果有多个类型，可以换行写：
// 通过换行来分隔多个属性类型，可以去掉 `;`
let person3: {
    name: string
    sayHi(): void
}
    = {
    name: 'jackson',
    sayHi() { }
}

/**
 * !箭头函数形式的方法类型
 */

type Person = {
    greet: (name: string) => void
}

let person4: Person = {
    greet(name) {
        console.log(name);
    },
}

/**
 * !对象可选属性
 */
// - 对象的属性或方法，也可以是可选的，此时就用到**可选属性**了
// - 比如，我们在使用 `axios({ ... })` 时，如果发送 GET 请求，method 属性就可以省略
// - 可选属性的语法与函数可选参数的语法一致，都使用 `?` 来表示
type Config = {
    url: string
    method?: string
}

function myAxios(config: Config) {
    console.log(config)
}

/**
 * !使用类型别名
 */
// 当一个对象类型被多次使用时，一般会使用接口（`interface`）来描述对象的类型，达到复用的目的

// - 解释：
//   1. 使用 `interface` 关键字来声明接口
//   2. 接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 `I` 开头
//   3. 声明接口后，直接使用接口名称作为变量的类型
//   4. 因为每一行只有一个属性类型，因此，属性类型后没有 ;(分号)
interface IPerson {
    name: string
    age: number
    sayHi(): void
}


let person6: IPerson = {
    name: 'jack',
    age: 19,
    sayHi() { }
}
// - interface（接口）和 type（类型别名）的对比：
// - 相同点：都可以给对象指定类型
// - 不同点:
//   - 接口，只能为对象指定类型
//   - 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名
// - 推荐：**能使用 type 就是用 type**

/**
 * !接口继承
 */
// - 如果两个接口之间有相同的属性或方法，可以将**公共的属性或方法抽离出来，通过继承来实现复用**
// - 比如，这两个接口都有 x、y 两个属性，重复写两次，可以，但很繁琐
interface point2d { x: number, y: number }
interface point3d { x: number, y: number, z: number }

// !如果定义了两个同名的接口类型，则他们会合并为一个

interface point4d extends point3d {
    z: number
}

// 解释：

// 1. 使用`extends`(继承)关键字实现了接口 Point3D 继承 Point2D
// 2. 继承后，Point3D 就有了 Point2D 的所有属性和方法(此时，Point3D 同时有 x、y、z 三个属性)

/**
 * !元组类型
 */
// 元组类型是另一种类型的数组，它确切地知道包含多少个元素，**以及特定索引对应的类型**
let position: [number, number] = [39.5427, 116.2317]
// 1. 元组类型可以确切地标记出有多少个元素，以及每个元素的类型
// 2. 该示例中，元素有两个元素，每个元素的类型都是 number
/**
 * !字面量类型
 */
let str1 = 'Hello TS'
const str2 = 'Hello TS'
// - 通过 TS 类型推论机制，可以得到答案：
//   1. 变量 str1 的类型为：string
//   2. 变量 str2 的类型为：'Hello TS'
// - 解释:
// 1. str1 是一个变量(let)，它的值可以是任意字符串，所以类型为:string
// 2. str2 是一个常量(const)，它的值不能变化只能是 'Hello TS'，所以，它的类型为:'Hello TS'
// *使用模式和场景
// - 使用模式：**字面量类型配合联合类型一起使用**
// - 使用场景：用来表示一组明确的可选值列表
// - 比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个
// 使用自定义类型
type Direction = "left" | "right" | "up" | "down"
function changeDirection(direction: Direction) {
    console.log(direction)
}
changeDirection('up')
// - 解释：参数 direction 的值只能是 up/down/left/right 中的任意一个
// - 优势：相比于 string 类型，使用字面量类型更加精确、严谨
/**
 * !枚举类型
 */
// - 枚举的功能类似于**字面量类型+联合类型组合**的功能，也可以表示一组明确的可选值
// - 枚举：定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个
enum Directions { Up, Down, Left, Right }

// 使用枚举类型
function changeDirections(direction: Directions) {
    console.log(direction)
}
// 调用函数时，需要应该传入：枚举 Direction 成员的任意一个
// 类似于 JS 中的对象，直接通过 点（.）语法 访问枚举的成员
changeDirections(Directions.Up)
// 1. 使用 `enum` 关键字定义枚举 
// 2. 约定枚举名称以大写字母开头
// 3. 枚举中的多个值之间通过 `,`（逗号）分隔
// 4. 定义好枚举后，直接使用枚举名称作为类型注解
/**
 * !数字枚举
 */
// - 问题：我们把枚举成员作为了函数的实参，它的值是什么呢?
// - 解释：通过将鼠标移入 Direction.Up，可以看到枚举成员 Up 的值为 0
// - 注意：枚举成员是有值的，默认为：从 0 开始自增的数值
// - 我们把，枚举成员的值为数字的枚举，称为：`数字枚举`
// - 当然，也可以给枚举中的成员初始化值
enum Direction2 { Up = 10, Down, Left, Right }
/**
 * !枚举实现原理
 */
// - 枚举是 TS 为数不多的非 JavaScript 类型级扩展(不仅仅是类型)的特性之一
// - 因为：其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值(枚举成员都是有值的)
// - 也就是说，其他的类型会在编译为 JS 代码时自动移除。但是，**枚举类型会被编译为 JS 代码**
enum Direction3 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
// 会被编译为以下 JS 代码：
let Direction4;

// *此段代码在ts中会报错
// (function (Direction) {
//     Direction['Up'] = 'UP'
//     Direction['Down'] = 'DOWN'
//     Direction['Left'] = 'LEFT'
//     Direction['Right'] = 'RIGHT'
// })(Direction || Direction = {})

// - 说明：枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表
// - 一般情况下，**推荐使用字面量类型+联合类型组合的方式**，因为相比枚举，这种方式更加直观、简洁、高效
/**
 * !any 类型
 */
// - **原则:不推荐使用 any**!这会让 TypeScript 变为 “AnyScript”(失去 TS 类型保护的优势)
// - 因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示
let obj: any = { x: 0 }

obj.bar = 100
obj()
const n: number = obj
// - 解释:以上操作都不会有任何类型错误提示，即使可能存在错误
// - 尽可能的避免使用 any 类型，除非临时使用 any 来“避免”书写很长、很复杂的类型
// - 其他隐式具有 any 类型的情况
//   1. 声明变量不提供类型也不提供默认值
//   2. 函数参数不加类型
// - 注意：因为不推荐使用 any，所以，这两种情况下都应该提供类型
/**
 * !类型断言 
 */
// 有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型
const aLink = document.getElementById('link')
// - 注意：该方法返回值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含 a 标签特有的 href 等属性
// - 因此，这个**类型太宽泛(不具体)**，无法操作 href 等 a 标签特有的属性或方法
// - 解决方式：这种情况下就需要**使用类型断言指定更加具体的类型**
const aLink2 = document.getElementById('link') as HTMLAnchorElement
// 1. 使用 `as` 关键字实现类型断言
// 2. 关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
// 3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了
// 另一种语法，使用 `<>` 语法，这种语法形式不常用知道即可:
const aLink3 = <HTMLAnchorElement>document.getElementById('link')
/**
 * !TypeScript泛型
 */
// 泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用
// **泛型在保证类型安全(不丢失类型信息)的同时，可以让函数等与多种不同的类型一起工作，灵活可复用**
/**
 * !泛型-泛型函数
 */
function id<Type>(value: Type): Type { return value }

function id2<T>(value: T): T { return value }
// 在函数名称的后面添加 `<>`(尖括号)，**尖括号中添加类型变量**，比如此处的 Type
// 1. **类型变量 Type，是一种特殊类型的变量，它处理类型而不是值**
// 2. **该类型变量相当于一个类型容器**，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)
// 3. 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型
// 4. 类型变量 Type，可以是任意合法的变量名称
// 调用泛型函数
const num = id<number>(10)
const str = id<string>('a')
// 1. 语法：在函数名称的后面添加 `<>`(尖括号)，**尖括号中指定具体的类型**，比如，此处的 number
// 2. 当传入类型 number 后，这个类型就会被函数声明时指定的类型变量 Type 捕获到
// 3. 此时，Type 的类型就是 number，所以，函数 id 参数和返回值的类型也都是 number
// - 同样，如果传入类型 string，函数 id 参数和返回值的类型就都是 string
// - 这样，通过泛型就做到了让 id 函数与多种不同的类型一起工作，**实现了复用的同时保证了类型安全**
/**
 * !简化泛型函数调用
 */
let num1 = id(10)
let str5 = id('a')
// 解释:
// 1. 在调用泛型函数时，** 可以省略`<类型>` 来简化泛型函数的调用 **
// 2. 此时，TS 内部会采用一种叫做 ** 类型参数推断 ** 的机制，来根据传入的实参自动推断出类型变量 Type 的类型
// 3. 比如，传入实参 10，TS 会自动推断出变量 num 的类型 number，并作为 Type 的类型
// - 推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读
// - 说明：**当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数**
/**
 * !泛型约束
 */
// 默认情况下，泛型函数的类型变量 Type 可以代表多个类型，这导致无法访问任何属性
function id4<Type>(value: Type): Type {
    // console.log(value.length)
    return value
}
id4('a')
// - 解释：Type 可以代表任意类型，无法保证一定存在 length 属性，比如 number 类型就没有 length
// - 此时，就需要**为泛型添加约束来`收缩类型`(缩窄类型取值范围)**
// - 添加泛型约束收缩类型，主要有以下两种方式：1 指定更加具体的类型  2 添加约束
// 比如，将类型修改为 `Type[]`(Type 类型的数组)，因为只要是数组就一定存在 length 属性，因此就可以访问了
function id6<Type>(value: Type[]): Type[] {
    console.log(value.length)
    return value
}
//  * 添加约束
// 创建一个接口
interface ILength { length: number }

// Type extends ILength 添加泛型约束
// 解释：表示传入的 类型 必须满足 ILength 接口的要求才行，也就是得有一个 number 类型的 length 属性
function id7<Type extends ILength>(value: Type): Type {
    console.log(value.length)
    return value
}
// - 解释:
//   1. 创建描述约束的接口 ILength，该接口要求提供 length 属性
//   2. 通过 `extends` 关键字使用该接口，为泛型(类型变量)添加约束
//   3. 该约束表示：**传入的类型必须具有 length 属性**
// - 注意:传入的实参(比如，数组)只要有 length 属性即可（类型兼容性)
// *多个类型变量
// 泛型的类型变量可以有多个，并且**类型变量之间还可以约束**(比如，第二个类型变量受第一个类型变量约束)
// 比如，创建一个函数来获取对象中属性的值：
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
let person8 = { name: 'jack', age: 18 }
getProp(person8, 'name')
// 解释:

// 1. 添加了第二个类型变量 Key，两个类型变量之间使用 `,` 逗号分隔。
// 2. **keyof 关键字接收一个对象类型，生成其键名称(可能是字符串或数字)的联合类型**。
// 3. 本示例中 `keyof Type` 实际上获取的是 person 对象所有键的联合类型，也就是：`'name' | 'age'`
// 4. 类型变量 Key 受 Type 约束，可以理解为：Key 只能是 Type 所有键中的任意一个，或者说只能访问对象中存在的属性
// Type extends object 表示： Type 应该是一个对象类型，如果不是 对象 类型，就会报错
// 如果要用到 对象 类型，应该用 object ，而不是 Object
function getProperty<Type extends object, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
// *泛型接口
// 泛型接口：接口也可以配合泛型来使用，以增加其灵活性，增强其复用性
interface IdFunc<Type> {
    id: (value: Type) => Type
    ids: () => Type[]
}
let obj9: IdFunc<number> = {
    id(value) { return value },
    ids() { return [1, 3, 5] }
}
// 解释:
// 1. 在接口名称的后面添加 `<类型变量>`，那么，这个接口就变成了泛型接口。
// 2. 接口的类型变量，对接口中所有其他成员可见，也就是**接口中所有成员都可以使用类型变量**。
// 3. 使用泛型接口时，**需要显式指定具体的类型**(比如，此处的 IdFunc<nunber>)。
// 4. 此时，id 方法的参数和返回值类型都是 number;ids 方法的返回值类型是 number[]。

// *JS 中的泛型接口
const strs = ['a', 'b', 'c']
// 鼠标放在 forEach 上查看类型
strs.forEach

const nums = [1, 3, 5]
// 鼠标放在 forEach 上查看类型
nums.forEach
// - 解释:当我们在使用数组时，TS 会根据数组的不同类型，来自动将类型变量设置为相应的类型
// - 技巧:可以通过 Ctrl + 鼠标左键(Mac：Command + 鼠标左键)来查看具体的类型信息