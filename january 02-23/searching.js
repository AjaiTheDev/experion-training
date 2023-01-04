let array = [1, 4, 6, 5, 9];

let pos = 0;

const readLine = require('readline-sync');

let searchNumber = readLine.question('enter the number you want to search: ');

for(let i = 0; i < array.length; i++){

if(searchNumber == array[i]){
    pos = i + 1;
    count ++;
}
}

if(count > 0){

    console.log('The searched element is found at position' , pos);
}else{
    console.log('element not found');
}




