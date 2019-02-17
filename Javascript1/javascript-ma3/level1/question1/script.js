// Variables
var fne = document.getElementById("first-name-errors");
var lne = document.getElementById("last-name-errors");
var pe = document.getElementById("phone-errors");
var ee = document.getElementById("email-errors");
var li = document.getElementsByTagName("li");
var fname;
var lname;

// RegEx to validate, phone allows whitespace
var isText = /[a-zA-Z]/;
var isPhone = /\+\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?\d\s*?/;
var hasAreaCode = /^(\s?\+\s?\d\s?\d\s?)/;
var hasAt = /@/;
var hasDot = /\./;
var isEmail = /[a-zA-Z0-9\_\-\.]@[a-zA-Z0-9\_\-\.]\.[a-zA-Z0-9]/;

function validate() {
    // Get updated values on button press
    var fname = document.getElementById("first").value;
    var lname = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    // First name
    if(fname.length === 0) { // If 0 characters error
        fne.innerHTML = "<li>First name is missing</li>";
    } else if(!isText.test(fname)) { // If not text error
        fne.innerHTML = "<li>First name can only be letters a-z.</li>";
    } else { // Reset to 0 for next button press
        fne.innerHTML = "";
    }
    // Last name
    if(lname.length === 0) { // If 0 characters error
        lne.innerHTML = "<li>Last name is missing</li>";
    } else if(!isText.test(lname)) { // If not text error
        lne.innerHTML = "<li>Last name can only contain letters from a-z.</li>";
    } else { // Reset to 0 for next button press
        lne.innerHTML = "";
    }
    // Phone number
    if(phone.length === 0) { // If 0 characters error
        pe.innerHTML = "<li>Phone number is missing.</li>";
    } else if(!hasAreaCode.test(phone)) { // If not text error
        pe.innerHTML = "<li>Phone number is missing area code.</li>";
    } else if(!isPhone.test(phone)) { // If not text error
        pe.innerHTML = "<li>Phone number is flawed.</li>";
    } else { // Reset to 0 for next button press
        pe.innerHTML = "";
    }
    // E-mail
    if(email.length === 0) { // If 0 characters error
        ee.innerHTML = "<li>E-mail is missing.</li>";
    } else if(!hasAt.test(email)) { // If missing @
        pe.innerHTML = "<li>Email is missing a @</li>";
    } else if(!hasDot.test(email)) { // If missing .
        pe.innerHTML = "<li>Email is missing a .</li>";
    } else { // Reset to 0 for next button press
        ee.innerHTML = "";
    }
}