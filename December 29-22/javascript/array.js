const numbers =  [1, 2, 3, 'four'];
numbers.push(5);    
// console.log(numbers);



const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// firstArray.push(...secondArray); // spread operator iss used to select each element from the second array
// console.log(firstArray);


const thirdArray = firstArray.concat(secondArray);

console.log(thirdArray);


