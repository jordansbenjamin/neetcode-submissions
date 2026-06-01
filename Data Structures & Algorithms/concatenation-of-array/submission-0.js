class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const doubledLength = nums.length*2;
        const ans = new Array(doubledLength);

        for (let i = 0; i < doubledLength; i++) {
            let idx = i;

            if (i >= nums.length) {
                idx -= nums.length;
            }
            ans[i] = nums[idx]
        }
        return ans;
    }
}
