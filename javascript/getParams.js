function getParams(obj){
    let str = '?',arr=[]
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            arr.push(`${key}=${element}`)
            // str += `${key}=${element}`
        }
    }
    str = str+arr.join('&')
    return str
}

console.log(getParams({userName: 'lhj',
psd: '123'}))