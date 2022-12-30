
// const numArray =  [1, 2, 3, 4, 5, 6];

// const evenArray = [];


// for (let i = 0; i < numArray.length; i++) {

//         if(numArray[i] % 2 == 0) {
//             evenArray.push(numArray[i]);
//         }
// }

// console.log(evenArray.toString());


// Alternate Method.


const numbers = [1, 2, 3, 4, 5, 6];

const res = numbers.filter(value => value % 2 == 0);

console.log(res.toString());