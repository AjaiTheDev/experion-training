for( let i = 0; i < 5 ; i++){
    console.log('before:', i);
}
// console.log('after:', i); // The scope of variables declared by let keyword is only available within the parenthessis


const language = 'js';
// language = 'php' ; // the variable is declared by const(constant).we can't change the value.
console.log(language);


const n1 = 7;

const n2 = 5;

// if(a < b) {
//     console.log(`hehe`);
// } else {
//     console.log(`huhu`);
// }

const res1 = n1 + '+' + n2 + '=' + (n1 + n2);
const res2 = `${n1} + ${n2} = ${n1 + n2}` ;

console.log(res1);
console.log(res2);


