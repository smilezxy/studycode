/*
    字符串相关扩展
    includes()  判断字符串中是否包含指定的字符串   返回true  false
                参数一：匹配的字符串  参数二：从第几个字符开始匹配
    startsWith()  判断字符串是否以特定的字符串开始
    endsWith()  判断字符串是否以特定的字符串结束
*/
console.log('hello world'.includes('world'))   // true
console.log('hello world'.includes('world',7)) // false
let url = 'admin/login'
console.log(url.startsWith('admin'))  // true
console.log(url.endsWith('php'))

//------------------------------------

/* 模板字符串 */
let obj = {
    username:'zxy',
    age:'24'
}
let tag = '<div><span>'+ obj.username +'</span></div>'

// 反引号表示模板  模板中的内容可以有格式   通过${}方式填充数据
let tpl = `
    <div>
        <span>${obj.username}</span>
        <span>${1+1}</span>
    </div>
`
console.log(tpl)