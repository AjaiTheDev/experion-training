const student = {
    name: 'lex luthor',
    age: 18,
    mark1: 10,
    mark2: 8
};


const data = JSON.stringify(student, null, 4); // method 1
const data1 = JSON.parse(data);

console.log(data);
console.log(data1);





