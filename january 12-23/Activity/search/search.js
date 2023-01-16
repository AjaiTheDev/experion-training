

// function to search an element from an array
function searchFun(event) {
    event.preventDefault();

    const array = ['ajai', 'amal', 'arun', 'athul'];
    const inputValue = document.getElementById('search').value;
    const divId = document.getElementById('search-result');
    let found = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i].toLowerCase() == inputValue.toLowerCase()) {
            found++;
        }
    }

    if (found > 0) {
        document.getElementById('search').value = '';
        divId.innerHTML = `<h1>${inputValue} is found</h1>`; // work if found   
    }
    else {
        divId.innerHTML = `<h1>${inputValue} is not found</h1>`;   // not found code      
    }
}


