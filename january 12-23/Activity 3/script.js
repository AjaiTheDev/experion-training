   
const inputArray = [];
let sortedArray = [];
function onSubmitHandler(event) { 
    
    event.preventDefault();

    const fare = parseFloat(document.getElementById('fare').value);
    inputArray.push(fare); // push names to input array

    const odList = document.querySelector('#ordered-list');
    const listItem = `<li>${fare}</li>`;

    odList.innerHTML += listItem; // add an item to the ol

    document.getElementById('fare').value = '';

    for (let i = 0; i < inputArray.length; i++) {

        for (let j = i + 1; j <= inputArray.length; j++) {
            // console.log(typeof arrayCopy[i]);
            if (inputArray[j] < inputArray[i]) {

                temp = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp;

            }

        }
        
    }
    sortedArray = inputArray; // copy the sorted array to another array named 'sortedArray' 
}



 // inject each element inside the sorted array to the sorted list
function sortIt() {
   
   
    for (let i = 0; i < sortedArray.length; i++) {

        console.log(sortedArray[i]);
        const sortedList = document.querySelector('#sorted-list');

        const sortedListItem = `<li>${sortedArray[i]}</li>`;

        sortedList.innerHTML += sortedListItem;

    }
}

  // injecting elements to the rev ordered list
function sortItRev() {

  
    for (let i = sortedArray.length - 1; i >= 0; i--) {


        const sortedList = document.querySelector('#rev-sorted-list');

        const sortedListItem = `<li>${sortedArray[i]}</li>`;

        sortedList.innerHTML += sortedListItem;

    }
}

// function to search an element from the users input
function search(){
    const searchVal = document.getElementById('search').value;
    const searchResDiv = document.getElementById('search-result');
    let found = 0;

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] == searchVal) {
            found++;
        }
    }

    if (found > 0) {
        document.getElementById('search').value = '';
        searchResDiv.innerHTML = `<h1>${searchVal} is found</h1>`; // work if found   
    }
    else {
        searchResDiv.innerHTML = `<h1>${searchVal} is not found</h1>`;   // not found code      
    }

}


// function to find the minimum value from the array
function minFare(){
    const minValDiv = document.getElementById('min-val-div');

    minValDiv.innerHTML += `<li>minimum value = ${sortedArray[0]}</li>`;
}

// function to find the maximum value from the array
function maxFare(){
    const maxValDiv = document.getElementById('max-val-div');
    const maxLength = sortedArray.length - 1;
    maxValDiv.innerHTML +=  `<li>maximum value = ${sortedArray[maxLength]}</li>`;

}