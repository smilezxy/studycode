/*
    变量的解构赋值
*/
// var a = 1
// var b = 2
// var c = 3
// var a = 1,b = 2, c= 3


// 数组的解构赋值
// let [a,b,c] = [1,2,3]
// console.log(a,b,c) // 1 2 3
// let [a,b,c] = [,2,]
// console.log(a,b,c) // undefined 2 undefined
//  let [a=1,b,c] = [,2,]
//  console.lof(a,b,c)  // 1 2 undefined   (1是默认值)


// 对象的解构赋值‘
// let {foo,bar} = {foo: 'hello', bar: 'hi'}
// console.log(foo,bar) // hello hi
// // 对象属性别名(如果有了别名，原来的名字就无效了)
// let {foo:abc,bar} = {foo: 'hello', bar: 'hi'}
// console.log(foo,bar) // 报错  foo未定义
// console.log(abc,bar) // hello hi 
// 对象的结构赋值  指定默认值
let {foo:abc='helo',bar} = { bar: 'hi'}
console.log(abc,bar)  // hello hi 


// let {cos,sin,random} = Math  // 相当于let cos = Math.cos()
// console.log(typeof(cos)) // function


// 字符串的解构赋值u
//console.log(a,b,c,d,e) // h e l l o

let {length} = "hi"
console.log(length) // 2





