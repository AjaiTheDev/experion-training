const person = {
    name: 'John Doe',
    age: 15,
    email:null // always add the property you want to use later.
};

person.name = 'John Don';


person.email = 'hello@gmail.com'; // pushing an element to the object even if its not there in the object declaration.

// console.log(person); // this is an object and not like the object of oop



// multiple objects



const person1 = {

    name: 'john baskar',
    age:20,
    experience: [
        {
            company: 'ABC',
            years: 17
        },
        {
            company: 'EFG',
            years: 18
        }
    ]
};

        // console.log(person1.experience[0].company); // parsing through

        person1.experience.forEach(element => console.log(element.company));