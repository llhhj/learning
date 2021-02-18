let obj = new Proxy({}, {
    get(target, key, receiver) {
        console.log('get', key, receiver);
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log('set', key, receiver);
        return Reflect.set(target, key, value, receiver);
    },
    deleteProperty(target, key) {
        console.log('delete', key);
    }
})

obj.count = 1

++obj.count