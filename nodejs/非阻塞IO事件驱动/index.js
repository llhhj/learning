var events = require('events')

let EventEmitter = new events.EventEmitter()

EventEmitter.on('data',(r)=>{
    console.log(r);
})

EventEmitter.emit('data',1)

//on在前，emit在后