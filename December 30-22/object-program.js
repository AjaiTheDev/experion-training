const student = {
    name: 'student 1',
    mark1: 40,
    mark2: 60,
    total: function() {
        const ceMark = 20;
        console.log(this.mark1 + this.mark2 + ceMark );
    }
};

student.total();

const copy = Object.assign({}, student); // copying everything on the student to  new object COPY

copy.name = 'ajai'; // changes made on the obj 'COPY' won't affect the original obj 'STUDENT'

console.log(student);
console.log(copy);



