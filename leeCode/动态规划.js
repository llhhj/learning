// 在 一 个 m*n 的 棋 盘 的 每 一 格 都 放 有 一 个 礼 物 ， 
// 每 个 礼 物 都 有 一 定 的 价 值 （ 价 值 大 于 0）。
// 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、
// 直到 到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值 的礼物？

// 输入：[
//        [ 1, 3, 1 ] ,
//        [ 1 ,5, 1 ] , 
//        [ 4 ,2, 1 ]
//       ]
// 输出: 1 2 
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

((arr) => {
    let m = arr.length,n = arr[0].length
    let step = m + n -1 //步数
    let dp = Array(m).fill(null).map(x=>Array(n).fill(null)) //m*n的null数组
    dp[0][0] = arr[0][0]
    let end = dp[m-1][n-1]
    //最左与最上的处理，各位置为其前面数据的累加
    for( let i = 1; i < n; i++ ) { 
        dp[0][i] = dp[0][i-1] + arr[0][i]
    }
    for(let i = 1; i < m; i++ ) {
        dp[i][0] = dp[i-1][0] + arr[i][0];
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])+arr[i][j]
        }
    }
    console.log(dp[m-1][n-1])
})([[ 1, 3, 1 ] , [ 1 ,5, 1 ] , [ 4 ,2, 1]])