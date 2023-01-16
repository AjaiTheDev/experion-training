
let userDobArray = [];

function onSubmitHandler(event) {
    event.preventDefault();

    const dobUsersInp = document.getElementById('dob'); // take date input value from the input
    const dobUsers = dobUsersInp.value; // take valur from the input
    const userDobDiv = document.getElementById('user-dob');


    userDobDiv.innerHTML += `<li><span>${dobUsers} - ${userDobFun(dobUsers)} </span></li>`

    userDobArray.push(dobUsers); // push user input to arrays
    dobUsersInp.value = ''; // clear input value after submitting
   
}

function userDobFun(dobUsers){
    const userDob = new Date(dobUsers); // convert to standard date format from user input 
  
    const dateNow = Date.now(); // today's date

    const usersAge = parseInt(((dateNow - userDob) / (31557600000))); // calculate age in years

    // console.log(usersAge); // age in years


    // return age and old/youth/adult based on the age
    if(usersAge <= 10){
        return (usersAge + " years old - kid");
    }else if(usersAge > 10 & usersAge < 30){
        return (usersAge + " years old - youth");
    }else if(usersAge > 30 & usersAge < 60){
        return (usersAge + " years old - Adult");
    }else{
        return (usersAge + " years old - old");
    }

}


