import Mock from 'mockjs'

// 返回的是一个字符串
let id = Mock.mock('@id')

let obj1 = Mock.mock({
    id: '@id', // 得到随机的id
    username: '@cname()', // 随机生成中文名字
    date: '@date',
    avatar: '@image()',
    description: '@paragraph()',
    ip: '@ip()',
    email: '@email()',
})


export default obj1