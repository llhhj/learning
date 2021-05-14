/*
快速排序
两边同时排序
*/

function quickSort(nums){
    if (nums.length < 2) {
        return nums
    }

    let left = [], right = [], baseIndex = Math.floor(nums.length/2)
    let base = nums.splice(baseIndex,1)[0]
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < base){
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    let leftArr = quickSort(left)
    let rightArr = quickSort(right)

    let sortArr = leftArr.concat([base],rightArr)

    return sortArr    
}
// quickSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3])
// console.log(quickSort([1, 34, 5, 76, 8, 6, 9, 7, 6, 3]));


/* 
冒泡排序
大的往后
*/ 

function bubble(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = 0; j < nums.length-1-i; j++) {
            if (nums[j] > nums[i]) {
                let tmp = nums[j]
                nums[j] = nums[i]
                nums[i] = tmp
            }
        }
        console.log(nums) 

    }
    return nums
}

// console.log(bubble([5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]));

/*
选择排序
*/