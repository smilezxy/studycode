/* 
    声明变量let和const
*/
// let声明的变量不存在预解析
//console.log(flag)  // undefined  报错
//var flag = 123// 有预解析
//let flag = 456

// var flag = 123;
// var flag = 456;
// console.log(flag)  //  456


// let声明的变量不允许重复（在同一个作用域内）
// let flag = 123;
// let flag = 456;
// console.log(flag)

//es6引入了块极作用域
//块内部定义的变量在外部是不能访问的 
// if (true) {
//     var flag = 123;
// }
// console.log(flag) // 123
// if (true) {
//     let flag = 123;
// }
// console.log(flag) // 报错  flag is not defined


// {
//     // 这里是块级作用域
//     let flag = 123
//     console.log(flag) // 123
// }
// console.log(flag) // 报错  flag is not defined


// 在块级作用域内部  变量只能先声明再使用
// if(true) {
//     console.log(flag)// 报错  flag is not defined
//     let flag = 123 
// }

// const的作用用来声明常量（值是不能改变的）
// const声明的常量是不允许重新赋值的
// const n = 1
// n = 2// 会报错

// const声明的常量必须初始化 
// 上面let的特性  const都有


