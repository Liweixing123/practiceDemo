import obj1 from './userInfo'

const userInfo = {
  url: '/user/userinfo',//这里的api相当于公共请求头，根据自己的需要修改
  method: 'get',
  response: ({ query }) => {
    return {
      code: 0,
      data: {
        name: obj1,
      },
    }
  },
}

const exportArr = userInfo
export default exportArr
