//call fun.call(thisArg,param1,param2, ...) 返回： fun执行的结果
//apply fun.call(thisArg,[param1,param2, ...])  返回： fun执行的结果
//bind  fun.bind(thisArg,param1,param2, ...)    返回： fun的拷贝，并拥有指定的this值和初始参数
// console.log = function(){}
var a = {
    user: '123',
    fn: function(){
        // console.log(this.user)
    }
}

user = 1
var b = a.fn

b()// 1
b.call(a) //123
b.apply(a) //123
// console.log(b.bind(a)) //function(){ native code }
b.bind(a)()  //123

function Product(name, price){
    console.log(this)
    this.name = name
    this.price = price
}

// Product('11','22')

function Food(name, price){
    this.categery = "food"
    Product.call(this,name,price)
}

function Tool(name,price){
    this.categery = "tool"
    Product.apply(this,arguments)
}

function CategeryCar(type,name,price){
    this.categery = type
    // Product.call(this,name,price)
    var args = [].slice.call(arguments)
    args.shift()
    // console.log(args,'args')
    Product.apply(this,args)
    // console.log(args)
}

function bindList(){
    return [].slice.call(arguments)
}

function sum(f,s){
    return f+s
}

bindList(1,2,3)
newbindList = bindList.bind(null,37)

sum(1,2)
newSum = sum.bind(null,37)

// console.log(newbindList())
// console.log(newbindList(1,2,3))
// 
// console.log(newSum(1))
// console.log(newSum(1,2))


// Food("苹果","$12").name
// const banana = new Food("香蕉","21");

const knife = new Tool("刀","21");
const name = new CategeryCar('text','l','224');

console.log(knife)
console.log(name)

