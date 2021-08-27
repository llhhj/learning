//手写call、bind、apply

Function.prototype.MyCall = function(){
    // let arg = [].slice.call(arguments)
    let obj = arguments[0]
    let arr = [...arguments]
    if( typeof obj !== "object" ){
        console.log('The first arguments is not a object!')
        return
    }
    // console.log(obj)
    arr.shift()
    obj.fn = this
    let result = obj.fn(...arr)
    delete obj.fn
    return result
}

let obj = {
    name: 'a',
    age: '12'
}

function text(name,age){
    this.name = name
    this.age = age
    console.log(this)
}

text.MyCall(obj,'b',13)

console.log(obj,'obj')

Function.prototype.MyApply = function(){
    
}
