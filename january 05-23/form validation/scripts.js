function handleSubmitEvent(event){
    event.preventDefault();

    const fname = document.forms.login.fname;
    const email = document.forms.login.email;
    const password = document.forms.login.password;


    
    // const emailValue = email.value;
    const passwordValue = password.value;
    const fnameValue = fname.value;

    const passwordErrorDisplay =  password.nextElementSibling;

    if(fnameValue.length <=3){
        fname.style.border = '1px solid red';
        
    }
    if(passwordValue.length < 6){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must be atleast 6 characters</>'
    }
    if(passwordValue.includes(' ')){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must not include spaces</>'
    }




}

