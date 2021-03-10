let arr = [12,56,654,3,7,384,6518,46,11,1,56,151,489,65,1351,53,616,156,6,651,651,51]

// arr.sort((a,b)=>{
//     return Math.random() > 0.5? 1 : -1
// })



function randomArr(arr){
    let result = []
    while(arr.length == 0){
        let rIndex = Math.floor(Math.random()*arr.length)

        result.push(arr[rIndex])
        arr.splice(rIndex,1)
    }
}

randomArr(arr)

console.log(arr);