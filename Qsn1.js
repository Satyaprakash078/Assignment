function lengthOfLIS(nums) {
    if (!Array.isArray(nums)) throw new Error("Input must be an array");
    if (nums.length === 0) return 0;

    const dp = [];

    for (let num of nums) {
        let left = 0, right = dp.length;

        // Binary search to find the correct position
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (dp[mid] < num) left = mid + 1;
            else right = mid;
        }

        dp[left] = num; 
    }

    return dp.length;
}


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); 
