function callLike(obj) {
    if (typeof this != "function") {
        console.error('error！');
    }

    let args = [...arguments].slice(1),
        result = null

    obj = obj || window

    obj.fn = this
    result = obj.fn(...args)

    delete obj.fn
    return result
}

function applyLike(obj, args) {
    if (typeof this !== "function") {
        console.error('error!');
    }

    let result = null

    obj = obj || window
    obj.fn = this

    result = obj.fn(...args)

    delete obj.fn
    return result

}

function bindLike(obj) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数
    var args = [...arguments].slice(1),
        fn = this;

    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        );
    };
}