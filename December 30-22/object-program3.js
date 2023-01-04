const student = {
    name: 'student 1',

};

const marks = {
    mark1: 40,
    mark2: 60
};



const copy = Object.assign({}, student, marks); // copying everything on the student and marks to  new object COPY

console.log(copy);





