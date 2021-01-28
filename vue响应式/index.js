// Object.defineProperty(obj,prop,descriptor)

const TestObject = {
    name: '',
    age: 10
}

function ProxyObj(obj){
    Object.keys(obj).forEach(key=>{
        defineProperty(obj,key,obj[key])
    })
}

function defineProperty(obj,key,value){
    Object.defineProperty(obj,key,{
        get(){
            console.log('get');
            return value
        },
        set(newValue){
            console.log(newValue);// doSomeThing  like ChangeDom
            value = newValue
        }
    })
}

ProxyObj(TestObject)

TestObject.age = 15

console.log(TestObject.age);