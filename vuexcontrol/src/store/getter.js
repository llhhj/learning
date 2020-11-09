const getter = {
    token: status => status.user.token,
    userName: function (status, getter) {
        return getter.token.subString(1, 4)
    }
}

export default getter