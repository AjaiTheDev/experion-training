const student = {
    fullName: 'ajai',
    mark1: 30
};

// const {fullName, mark1} = student;

// console.log(fullName, mark1);

const keys = Object.keys(student); // returns all the keys in the 'student' object

keys.forEach(key => {
    console.log(key);  // key is a variable here
});

const values = Object.values(student); // returns all the values in the 'student' object

values.forEach(value => {
    console.log(value); 
});

