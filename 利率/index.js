const arrList = [3.13,1.21,0.92,1.26,-0.02,1.22,2.07,2.24,0.49,-2.24,-1.56,-2.58,5.05,1.12,1.41,1.86,0.53,1.09,-0.55,-0.04
]

let sum = 10000
let porfit = 0

for (let i = 0; i < arrList.length; i++) {
    const p = arrList[i]*0.01;
    sum = sum + (sum*p)
    // porfit = porfit + sum*p
    console.log(i+1,'sum',sum,'per',sum*p);
    // console.log(i+1,'profit',porfit);
}