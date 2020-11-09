import { setToken } from '@/utils/cookies'

const user = {
    state:{
        token:''
    },
    mutation:{
        SET_TOKEN(state, token){
            state.token = token
            setToken(token)
        }
    },
    action:{
        login({commit,dispatch},userInfo){
            return Promise((res,rej)=>{
                let a = 1
                res(a)  //异步传参用
            })
        }
    }
}

export default user