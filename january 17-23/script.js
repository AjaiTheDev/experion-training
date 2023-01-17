
let userDobArray = [];

function onSubmitHandler(event) {
    event.preventDefault();

    const dobUsersInp = document.getElementById('dob'); // take date input value from the input
    const dobUsers = dobUsersInp.value; // take valur from the input
    const userDobDiv = document.getElementById('user-dob');



    userDobArray.push(dobUsers); // push user input to arrays
    dobUsersInp.value = ''; // clear input value after submitting

    const userDob = new Date(dobUsers); // convert to standard date format from user input 
  
    const dateNow = Date.now(); // today's date


    const usersAge = parseInt(dateNow - userDob);

    console.log(usersAge);


    // hour
    const dobInHour = parseInt(usersAge/(60*60*1000));
    console.log("Hour",dobInHour);

    // day
    const dobInDay = parseInt(dobInHour/24);
    console.log("day",dobInDay);

    // week
    const  dobInWeek = parseInt(dobInDay/7);
    console.log("week",dobInWeek);

    //month
    const dobInMonth = parseInt(dobInWeek/4.345);
    console.log("month",dobInMonth);
   
    //year
    const dobInYear = parseInt(dobInMonth/12);
    console.log("year",dobInYear);


    // leap year
    if((userDob.getFullYear()) % 4 == 0){
        console.log((userDob.getFullYear())+" is a leap year")
    }
    else{
        console.log("not a leap year");
    }
}

// function userDobFun(dobUsers){


// }


