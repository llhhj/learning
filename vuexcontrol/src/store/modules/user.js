import { setToken } from '@/utils/cookies'

const user = {
    state:{
        token:''
    },
    mutations:{
        SET_TOKEN(state, token){
            state.token = token
            setToken(token)
        }
    },
    actions:{
        login({commit,dispatch},userInfo){
            return new Promise((res,rej)=>{
                if (userInfo.userName == '15521413940' && userInfo.password == '888888') {
                  commit('SET_TOKEN','1sagr5ewaah6vds4rqewr8re9r5awdwa6afaw49d8')
                  res(userInfo)  //登录成功
                }else{
                  rej(userInfo)  //登录失败
                }
            })
        }
    }
}

export default user