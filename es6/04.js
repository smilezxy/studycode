/* 
    函数扩展 
    1、函数默认值
    2、参数解构赋值
    3、rest 参数
    4、...扩展运算符

*/


// 参数默认值
function foo(param) {
    let p = param || 'hello'
    console.log(p)
}
foo() // hello
foo('hi') // hi

function foo1 (param = 'nihao') {
    console.log(param)
}
foo1('hello kitty')  // hello kitty


//-------------------------------
function foo2 (umane='lisi',age='12') {
    console.log(umane,age)
}
// 参数解构赋值
function foo3 ({uname,age} = {}) {
    console.log(uname,age)
}
foo3()  // undefined  undefined
foo3({uname:'zhangsan',age:'12'})  // zhangsan  12

//-----------------------
// rest参数（剩余参数 ) 多个参数转换成数组
function foo4 (a,...param) {
    console.log(a)
    console.log(param)
}
foo4(1,2,3)// 1 [2,3]

//扩展运算符  把数组转换成多个分散的参数 
function foo5 (a,b,c,d) {
    console.log(a+b+c+d)
}
let arr = [1,2,3,4]
foo5.apply(null,arr) // 10
foo5(...arr) // 10

// 合并数组
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1,...arr2]
console.log(arr3)// [1,2,3,4,5,6]




