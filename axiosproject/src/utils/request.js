import axios from 'axios'

const server = axios.create({
    baseURL:'',
    timeout:6000,
    headers:''
})

server.interceptors.request.use(config=>{
    //config操作 如添加token等操作
    console.log(config);

    return config
},err=>{
    console.log(err);
})

server.interceptors.response.use(res=>{
    //res的操作 根据返回的code验证token等操作
    console.log(res);

    return res
},err=>{
    console.log(err);
})