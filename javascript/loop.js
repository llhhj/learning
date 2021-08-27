//for forEach  for...of

// const list = [1,2,3,4,5,6,7,8,,10,11,12]

// for (let i = 0; i < list.length; i++) {
//     const item = list[i];
//     if(item === 5) {
//         break; //1 2 3 4
//         continue;   //1 2 3 4 6 7 8 undefined 10 11 12
//     }
//     console.log(item)
// }

// for (const item of list) {
//     if (item === 5) {
//         break; // 1 2 3 4
//         // continue; // 1 2 3 4 6 7 8 undefined 10 11 12
//     }
//     console.log(item);
// }

// list.forEach((item,index,arr)=>{
//     if (item === 5) {
//         return;
//     }
//     console.log(item)   //1 2 3 4 6 7 8 10 11 12
// })

// 三者都是基本的由左到右遍历数组
// forEach 无法跳出循环；for 和 for ..of 可以使用 break 或者 continue 跳过或中断。
// for ...of 直接访问的是实际元素。for 遍历数组索引，forEach 回调函数参数更丰富，元素、索引、原数组都可以获取。
// for ...of 与 for 如果数组中存在空元素，同样会执行。


// some every
// const list = [
//     {name: '1',backward: false},
//     {name: '2',backward: true},
//     {name: '3',backward: false},
// ]

// const s = list.some(item => item.backward)
// const e = list.every(item => item.backward)

// console.log(s,e)

// 二者都是用来做数组条件判断的，都是返回一个布尔值
// 二者都可以被中断
// some 若某一元素满足条件，返回 true，循环中断；所有元素不满足条件，返回 false。
// every 与 some 相反，若有益元素不满足条件，返回 false，循环中断；所有元素满足条件，返回 true。

//filter、map
const list = [
    { name: '头部导航', type: 'nav', id: 1 },,
    { name: '轮播', type: 'content', id: 2 },
    { name: '页脚', type: 'nav', id: 3 },
];
    
const resultList = list.filter(item=>{
    console.log(item)
    return item.type === 'nav'
})
// resultList: [
//   { name: '头部导航', type: 'nav', id: 1 },
//   { name: '页脚', type: 'nav', id: 3 },
// ]

const newList = list.map(item => {
    console.log(item);
    return item.id;
});
// newList: [1, empty, 2, 3]

// 二者都是生成一个新数组，都不会改变原数组（不包括遍历对象数组时，在回调函数中操作元素对象）
// 二者都会跳过空元素。有兴趣的同学可以自己打印一下
// map 会将回调函数的返回值组成一个新数组，数组长度与原数组一致。
// filter 会将符合回调函数条件的元素组成一个新数组，数组长度与原数组不同。
// map 生成的新数组元素是可自定义。
// filter 生成的新数组元素不可自定义，与对应原数组元素一致。
