// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

// let arr1 = ["Sumt", "Ankit", "Shivam", "Shivaji"];
// console.log(arr1);

// //  add element in array
// arr1.push(11);
// console.log(arr1);
// // delete element in array

// arr1.pop();

// console.log(arr1);

// console.log(arr1.length);
// // how to add at start of array

// arr1.shift();
// console.log(arr1);

// arr1.unshift("Rahul");
// console.log(arr1);

// //  at particular index add or delete

// arr1.splice(2, 0, "Priyansh");
// console.log(arr1);

// arr1.splice(3, 1); // remove element at index 3
// console.log(arr1);

// arr1.splice(2, 0, "Shriyansh", "Vilas ");
// console.log(arr1);

// arr1.splice(2, 1);
// console.log(arr1);

// arr1.splice(3);
// console.log(arr1);

// given an array of numbers calculate sum of all elements in array
// write a function which will accept numbers array as an input and will return sum of all elements of an array

// let a = parseInt(prompt("enter size of array"));
// alert("Size of array is: " + a);
// let array1 = new Array(a);
// for (let i = 0; i < array1.length; i++) {
//   array1[i] = parseInt(prompt("enter " + i + " element of array"));
// }
// alert("Array elements are: [" + array1 + "]");

// function calulateSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// let sum = calulateSum(array1);
// alert("Sum of all elements in array is: " + sum);

// write a function which a accept array as a input and return max number form array
function findmax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const max = findmax([10, 20, 30, 40, 50, 10, 100]);
console.log("Max number in array is: " + max);

// min Number in Array
function findmin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
const min = findmin([10, 20, 30, 40, 50, 0, -1, 100]);
console.log("Min number in array is: " + min);



// Sorting of an array
function sortarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (temp > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}
let arr = [10, 5, 8, 1, 4];
sortarray(arr);
console.log("Sorted array is: [" + arr + "]");


