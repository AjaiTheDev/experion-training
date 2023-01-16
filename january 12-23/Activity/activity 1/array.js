const inputArray = [];

// form submission and taking values from input field and inject into html page
function handleSubmit(event) {
    event.preventDefault();

    const fname = document.getElementById('fnames').value;
    inputArray.push(fname); // push names to input array

    const odList = document.querySelector('#ordered-list');
    const listItem = `<li>${fname}</li>`;  

    odList.innerHTML += listItem; // add an item to the ol
    
    document.getElementById('fnames').value = '';
}

// sort the array and display on the body under sorted list
function sortIt() {
    const arrayCopy = inputArray;
    console.log(arrayCopy);

    arrayCopy.sort();

    for (let i = 0; i < inputArray.length; i++) {

        console.log(arrayCopy[i]);
        const sortedList = document.querySelector('#sorted-list');

        const sortedListItem = `<li>${arrayCopy[i]}</li>`;

        sortedList.innerHTML += sortedListItem;

    }
}

// reverse sort function and display on the body under reverse ordered list
function sortItRev() {
    const arrayCopy = inputArray;

    arrayCopy.sort();

    for (let i = arrayCopy.length - 1; i >= 0; i--) {


        const sortedList = document.querySelector('#rev-sorted-list');

        const sortedListItem = `<li>${arrayCopy[i]}</li>`;

        sortedList.innerHTML += sortedListItem;

    }
}






