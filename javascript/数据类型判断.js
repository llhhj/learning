function typeOf(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}

// console.log(typeOf({}))
// console.log(typeOf([]))
// console.log(typeOf(undefined))
// console.log(typeOf(true))

let str = '123456789'

//slice()
// console.log(str.slice(1))
// console.log(str.slice(1,2))
// console.log(str.slice(1,3))
// console.log(str.slice(7,-1))
// console.log(str.slice(0,-2))
// console.log(str.slice(0))
// console.log(str.slice(-1))
// console.log(str.slice(-2))
console.log(str.slice(-1))
