function getOnlinePerson(callback){
    //模拟实现
    var onlinePerson = Math.ceil(Math.random()*1000)
    setTimeout(function(){
        callback(onlinePerson)
    },Math.random()*1000)
}

//异步接口2：返回当天总注册用户数
function getRegPerson(callback){
    //模拟实现
    var RegPerson = Math.ceil(Math.random()*1000)+1000
    setTimeout(function(){
        callback(RegPerson)
    },Math.random()*1000)
}

//异步接口，返回当天在线人数比，需要前两个接口的数据
function calOnlinePercent(onlinePerson,RegPerson,callback){
    //模拟实现
    var percent = Math.ceil(onlinePerson/RegPerson*100)
    setTimeout(function(){
        callback(percent)
    },Math.random()*1000)
}

getOnlinePerson(function(onlinePerson){
    getRegPerson(function(RegPerson){

    })
})

