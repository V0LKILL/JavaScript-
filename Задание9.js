let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3];

function unique(nums1, nums2) {
    let result = [];
    let nums3 = [].concat(nums1, nums2)
    let map = nums3.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[1] + 1 : 1;
        return acc
    }, [])
    
    for (let i = 0; i < nums3.length; i++ ) {
        const current = nums3[i]; // текущий элемент
        let count = map[current];
      
        if (count == 1) {
        result.push(current)
        }
    }
    return result
}

console.log(unique(arr1, arr2))

