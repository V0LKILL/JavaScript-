function is_array (arr) {
    return Array.isArray(arr);
  }
  
  console.log(is_array('2'));

//   ----------------------------------------

let arr1 = [7, 9, 0, -2];
let arr2 = [[], 3];
let arr3 = [7, 9, 0, -2];
let arr4 = [7, 9, 0, -2];
let arr5 = [7, 9, 0, -2];


function firstI (arr, n) {
  let res = []
  let num = n || 1
     
  for (let i =0; i<num; i++) {
    Number.isInteger(arr[i])? res.push(arr[i]):res
  }
  return res
}


console.log(firstI(arr1))
console.log(firstI(arr2, 3))
console.log(firstI(arr3, 3))
console.log(firstI(arr4, 6))
console.log(firstI(arr5, -3))

//   ----------------------------------------

const myColor = ["Red", "Green", "White", "Black"];

function join (arr) {
  return arr = arr.join(', ');

//   return arr = arr.toString(', ');
//   return arr = arr.join(' + ');

}

console.log(join(myColor));





  