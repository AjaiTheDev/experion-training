// eslint-disable-next-line no-unused-vars
function handleSubmitEvent(event){
    event.preventDefault();

    const fname = document.forms.login.fname;
    const email = document.forms.login.email;
    const password = document.forms.login.password;
    


    
    const emailValue = email.value;
    const passwordValue = password.value;
    const fnameValue = fname.value;

    const passwordErrorDisplay =  password.nextElementSibling;
    const fnameErrorDisplay = fname.nextElementSibling;
    const emailErrorDisplay = email.nextElementSibling;

    if(fnameValue == null || fnameValue == ""){
        console.log('this is required');
        fnameErrorDisplay.innerHTML += '<li>This field is required</li>'
    }
    if(fnameValue.length <=3){
        fname.style.border = '1px solid red';
        fnameErrorDisplay.innerHTML += '<li>invalid name</li>';
    }
    if(passwordValue == ''){
        
        password.style.border = '1px solid red';
    }
    else if(passwordValue.length < 6){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must be atleast 6 characters</li>' ;
    }

    if(passwordValue.includes(' ')){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must not include spaces</li>' ;
    }
    if(emailValue == ''){
        emailErrorDisplay.classList.remove('d-none');
        emailErrorDisplay.innerHTML += '<li>this field is required</li>' ;   
    }

}

