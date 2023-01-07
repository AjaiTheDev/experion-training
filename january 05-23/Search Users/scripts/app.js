const tbody = document.getElementById('target');

 // eslint-disable-next-line no-unused-vars
function searchItem(){
    const searchVal = document.getElementById('searching').value;
    fetch('https://reqres.in/api/users').then(response =>response.json()).then(result => { 
    const users = result.data;
    for(let i = 0; i < users.length; i++){
        const test = users[i].first_name;
        if(searchVal == test.toLowerCase()){
            console.log(users[i]); // used to chechk whether its working or not
            localStorage.setItem('userTest',JSON.stringify(users[i])); // set the user that matched the search input to the search result page
        }     
    }
    });
}


// display all the users avialable in the api to the table
fetch('https://reqres.in/api/users')
.then(response =>response.json())
.then(result => {

    const users = result.data; // users will contain objects
    users.forEach(user=>{
        const row = `
        <tr>
            <td>${user.id}</td>
            <td><img src ="${user.avatar}" height ="50px"></td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
            <td></td>
        </tr>
        `;

        tbody.innerHTML += row;
    });
});






