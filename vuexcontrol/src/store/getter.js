const getters = {
    token: state => state.user.token,
    userName: function (state, getters) {
        return getters.token?getters.token.subString(1, 4):''
    }
}

export default getters