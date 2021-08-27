//假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？（给定 n 是一个正整数）

//dp(i)=dp(i-1)+dp(i-2) (一次只能爬 1 或 2 个台阶，所以第 i 阶台阶只可能从第 i-1 或 i-2 个台阶爬上来的，所以第 i 个台阶的爬法就是 i-1 与 i-2 总爬法之和)
//dp(2)=2
//dp(1)=1

let cache = []//设置缓存，减少重复计算

function dp(i){
    switch(i){
        case 1:
           cache[i]=1;
           break
        case 2:
           cache[i]=2;
           break
        default:
           cache[i] = cache[i-1]+cache[i-2] 
    }

    return cache[i]  
}

for (let i = 1; i <= 100; i++) {
    dp(i);
}

console.log(dp(11))