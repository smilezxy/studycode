/*
箭头函数
*/ 
// function foo () {
//     console.log('hello')
// }

// let foo = () => console.log('hello')
// foo()  // hello



// function foo (v) {
//     return v
// }
// let foo = v => v
// console.log(foo(111))
// 多个参数必须用小括号包住
// let foo = (a,b) => {
//     let c = 1;
//     console.log(a+b+c)
// }
// foo(1,2) //4
let arr = [1,2,3]
// arr.forEach(function (item,index) {
//     console.log(item,index)   // 1  0  2  1  3  2
// })
// arr.forEach((item,index) => {
//     console.log(item,index) // 1  0  2  1  3  2
// })


//箭头函数的注意事项
//1、箭头函数中this取决于函数的定义   而不是调用
// function foo () {
//     //使用call调用foo时，这里的this其实就是call的第一个参数
//     setTimeout(() => {
//         console.log(this.num)  1
//     },100);
// }
// foo.call({num:1})

//----------------------
//2、箭头函数不可以new
//------------
//3、箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替
// let  foo = (a,b) => {
//     console.log(a,b)  //123,456
//     console.log(arguments) //这种是不合理的
// }
// foo(123,456)
let foo = (...param) => {
    console.log(param)
}
foo(123,456) //[123,456]