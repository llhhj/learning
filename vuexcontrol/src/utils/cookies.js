import Cookies from 'js-cookie'

export function setToken(token) {
    return Cookies.set('Token',token)
}

