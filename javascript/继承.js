//原型链继承

function Parent(){
    this.name = "父"
    this.arr = [1,2]
    // this.getName = function(){
    //     console.log(this.name)
    // }
}

Parent.prototype.getName = function(){
    return this.name
}

Parent.prototype.getArr = function(){
    return this.arr
}

function Children(){
}

Children.prototype = new Parent()

const c1 = new Children();
c1.name = 1
c1.arr.push(3)
const c2 = new Children();

console.log(c1.getArr())
console.log(c2.getArr())


