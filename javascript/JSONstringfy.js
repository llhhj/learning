// console.log(JSON.stringify({ x: 5, y: 6 }));
// // expected output: "{"x":5,"y":6}"

// console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// // expected output: "[3,"false",false]"

// console.log(JSON.stringify({ x: [10, undefined, function () { }, Symbol('')] }));
// // expected output: "{"x":[10,null,null,null]}"

// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// // expected output: ""2006-01-02T15:04:05.000Z""


// JSON.parse(
//     JSON.stringify({ x: 5, y: 6, z: { a: 1 ,c: { k:4 }, b: 2} })
//     , (k, v) => {
//         // console.log(this)
//         console.log(`${k}:${v}`)
//     })


console.log(JSON.parse(
    JSON.stringify({
        a: 1,
    })
))

JSON.parse('{"foo" : 1, }');