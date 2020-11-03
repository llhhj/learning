import axios from 'axios'

const server = axios.create({
    baseURL:'',
    timeout:6000,
    headers:''
})

server.interceptors.request.use(config=>{
    //config操作 如添加token等操作
    console.log(config);
    config.headers['Token'] = 'token';
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'

    return config
},err=>{
    console.log(err);
})

server.interceptors.response.use(res=>{
    //res的操作 根据返回的code验证token等操作
    console.log(res);
    switch (res.data.status){
        case 404:
            alert('页面不存在');
            break;
        case 401:
            alert('帐号无权限');
            break;
        case 500:
            alert('服务器中断');
            break;
    }

    return res
},err=>{
    console.log(err);
})