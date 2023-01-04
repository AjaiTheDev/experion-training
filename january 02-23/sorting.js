let array = [1, 7, 5, 3, 9];

let temp = 0;

console.log('before sorting:', array);

for(let i = 0; i < array.length; i++) {

    for(let j = i + 1 ; j < array.length; j++ ){

        if(array[j] < array[i]){

            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

    }
}

console.log('after sorting:', array);