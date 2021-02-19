let a = /asds/

console.dir(a)
console.log(a)

try {
    let a = a.ds 
} catch (error) {
    console.error('error')
}

console.time('loop')    

for (let i = 0; i < 100000; i++) {
    
}

console.timeEnd('loop')

console.log(global);