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
            
        }
    }
}

export default user