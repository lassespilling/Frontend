// Variables
const fnameErrors = document.getElementById("full-name-errors");
const messageErrors = document.getElementById("message-errors");
const phoneErrors = document.getElementById("phone-errors");
const emailErrors = document.getElementById("email-errors");
const formSubmit = document.getElementById("form-submit")
var fname, lname, phone, email;

// RegEx to validate, phone allows whitespace
const isText = /[a-zA-Z]/;
const isPhone = /\+\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?/;
const hasAreaCode = /^(\s?\+\s?\d\s?\d\s?)/;
const hasAt = /@/;
const hasDot = /\./;
const isEmail = /[a-zA-Z0-9\_\-\.]{1,20}@[a-zA-Z0-9\_\-]{1,20}.{1}[a-zA-Z0-9\_\-]{1,20}.{0,1}[a-zA-Z0-9\_\-]{1,20}/;

formSubmit.onclick = function() {
    // Get updated values on button press
    let fname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    // Full name
    if(fname.length === 0) { // If 0 characters error
        fnameErrors.innerHTML = "<li>* No name.</li>";
    } else if(!isText.test(fname)) { // If not text error
        fnameErrors.innerHTML = "<li>* Only letters a-z.</li>";
    } else { // Reset to 0 for next button press
        fnameErrors.innerHTML = "";
    }
    // Phone number
    if(phone.length === 0) { // If 0 characters error
        phoneErrors.innerHTML = "<li>* No number.</li>";
    } else if(!hasAreaCode.test(phone)) { // If not text error
        phoneErrors.innerHTML = "<li>* Missing area code.</li>";
    } else if(!isPhone.test(phone)) { // If not text error
        phoneErrors.innerHTML = "<li>* Wrong format</li>";
    } else { // Reset to 0 for next button press
        phoneErrors.innerHTML = "";
    }
    // E-mail
    if(email.length === 0) { // If 0 characters error
        emailErrors.innerHTML = "<li>* No E-mail</li>";
    } else if(!hasAt.test(email)) { // If missing @
        phoneErrors.innerHTML = "<li>* Missing a @</li>";
    } else if(!hasDot.test(email)) { // If missing .
        phoneErrors.innerHTML = "<li>* Missing a .</li>";
    } else { // Reset to 0 for next button press
        emailErrors.innerHTML = "";
    }
    if(message.length === 0) { // If 0 characters error
        messageErrors.innerHTML = "<li>* No message you have?</li>";
    }  else { // Reset to 0 for next button press
        messageErrors.innerHTML = "";
    }
}