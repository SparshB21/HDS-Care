var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var dateError = document.getElementById('date-error');
var submitError = document.getElementById('submit-error');
// var fieldname = document.getElementsByClassName('field-name');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML = 'Name is required';
        nameError.style.color = 'red';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        nameError.style.color = 'red';
        return false;
    }

    nameError.innerHTML = '✔';
    nameError.style.color = '#16a085';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML = 'Phone no. is required';
        phoneError.style.color = 'red';
        // phoneError.style.borderColor = 'red'; // PROBLEM: Want bordercolor to be red when error arise.
        return false;
}

    if(phone.length!=10){
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        phoneError.style.color = 'red';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '✔';
    phoneError.style.color = '#16a085';

    return true;

}

// function validateField(){
//     var field = document.getElementsByClassName('field-name').value;

//     if( field == null || field == "Select")
//     {
//         fieldError.innerHTML = "Please fill it";
//         fieldError.style.color = "red";
//         return false;
//     }

//     fieldError.innerHTML = "✔";
//     fieldError.style.color = "#16a085";
//     return true;
    
// }

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        emailError.style.color = 'red';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[/.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        emailError.style.color = 'red';
        return false;
    }

    emailError.innerHTML = '✔';
    emailError.style.color = '#16a085';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' more characters required';
        messageError.style.color = 'red';
        return false;
    }

    messageError.innerHTML = '✔';
    messageError.style.color = '#16a085';
    return true;

}

function validateDate(){
    
    var today;
    var dd = today.getDate();
    var mm = today.getMonth() + 1;   //January is 0!
    var yyyy = today.getFullYear();
        
    if (dd < 10) {
      dd = '0' + dd
    }
    
    if (mm < 10) {
      mm = '0' + mm
    }
    
    today = dd + '-' + mm + '-' + yyyy;
    // today = yyyy + '-' + mm + '-' + dd;
    // date.split("-").reverse().join("-");
    document.getElementById('contact-date').setAttribute("min", today);
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validateDate()){
        submitError.style.display ='block';
        submitError.style.color = 'red';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        // alert("Fill properly");
        return false;
    }
    else{
        var name = document.getElementById('contact-name').value;
        alert("Hello, " + name + " 🖐");
    } 
}