const inputArray = [];
let sortedArray = [];

// form submission and taking values from input field and inject into html page
function handleSubmit(event) {
    event.preventDefault();

    const fname = document.getElementById('fnames').value;
    inputArray.push(fname); // push names to input array

    const odList = document.querySelector('#ordered-list');
    const listItem = `<li>${fname}</li>`;

    odList.innerHTML += listItem; // add an item to the ol

    document.getElementById('fnames').value = '';


    // function to sort the elements of an array using for loop
    for (let i = 0; i < inputArray.length; i++) {

        for (let j = i + 1; j < inputArray.length; j++) {
            // console.log(typeof arrayCopy[i]);
            if ((inputArray[j].toLowerCase()) < (inputArray[i].toLowerCase())) {

                temp = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp;

            }

        }
    }
    sortedArray = inputArray;

}


// function to find the length of the name of each users in the arrray
function lengthElements() {
    for (let i = 0; i < inputArray.length; i++) {
        const elementLength = inputArray[i].length; // take the length of each user name

        const elementLengthList = document.getElementById('element-length');

        const elementLengthListItem = `<li> ${inputArray[i]} : ${elementLength}</li>` // injecting item to the ol list

        elementLengthList.innerHTML += elementLengthListItem;


    }
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

// inject each element inside the reverse sorted array to the sorted-reversed list
function sortItRev() {


    for (let i = sortedArray.length - 1; i >= 0; i--) {


        const sortedList = document.querySelector('#rev-sorted-list');

        const sortedListItem = `<li>${sortedArray[i]}</li>`;

        sortedList.innerHTML += sortedListItem;

    }
}

// find duplicate elements and print it
function dupElements() {

    const duplicateOList = document.querySelector('#duplicate-entries');
    for (let i = 0; i < inputArray.length; i++) {

        for (let j = i + 1; j < inputArray.length; j++) {

            if (inputArray[i] == inputArray[j]) {

                const duplicateListItem = `<li>${inputArray[i]} and ${inputArray[j]}</li>`;

                duplicateOList.innerHTML += duplicateListItem;
            }
        }
    }
}
