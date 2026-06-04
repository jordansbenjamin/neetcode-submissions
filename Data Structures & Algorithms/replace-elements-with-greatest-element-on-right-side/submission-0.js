class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            const maxVal = Math.max(...arr.slice(i+1));
            arr[i] = maxVal;

            if (i === arr.length-1) {
                arr[i] = -1;
            }
        }
        return arr;
    }
}
