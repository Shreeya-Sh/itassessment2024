var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstname = document.getElementById('firstname');
    fields.surname = document.getElementById('surname');
    fields.country = document.getElementById('country');
    fields.number = document.getElementById('number');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.message = document.getElementById('message');
});

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isNumber(number) {
    return (number.length > 0) && !isNaN(number);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction, errorMessage) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value);
    let errorSpan = field.nextElementSibling;
    if (!isFieldValid) {
        field.className = 'placeholderRed';
        errorSpan.innerHTML = errorMessage;
    } else {
        field.className = '';
        errorSpan.innerHTML = '';
    }

    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstname, isNotEmpty, "First name is required.");
    valid &= fieldValidation(fields.surname, isNotEmpty, "Surname is required.");
            valid &= fieldValidation(fields.country, function(value) {
                return (value !== "");
            }, "Please select a country.");
    valid &= fieldValidation(fields.number, isNumber, "Number must be a valid number.");
    valid &= fieldValidation(fields.address, isNotEmpty, "Address is required.");
    valid &= fieldValidation(fields.email, isEmail, "Email must be a valid email address.");
    valid &= fieldValidation(fields.message, isNotEmpty, "Message is required.");

    return valid;
}

function sendContact() {
    if (isValid()) {
        alert("Form submitted successfully.We will get back to you soon.");
    } else {
        alert("Please check for errors.");
    }
}


function resetForm() {
    document.getElementById('contact-form').reset();
}