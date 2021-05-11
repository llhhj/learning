let list = [3,2,4],
target = 6

let twoSum = function(nums,target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target-num
        for (let j = i; j < nums.length; j++) {
            const result = nums[j];
            if (diff == result) {
                if (i != j) {
                    return [i,j]  
                }
            }
        }    
    }
}