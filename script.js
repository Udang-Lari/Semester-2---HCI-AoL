console.log("test");

function validForm() {
    var name = document.querySelector('input[name="name"]');
    var email = document.querySelector('input[name="email"]');
    var phone = document.querySelector('input[name="phone"]');
    var subject = document.querySelector('select[name="subject"]');
    var message = document.querySelector('textarea[name="message"]');
    var conditions = document.querySelector('input[name="conditions"]');

    var isValid = true;

    if (name.value == "") {
    name.style.border = "1px solid #f00";
    name.nextElementSibling.style.display = "block";
    isValid = false;
    } else {
    name.style.border = "1px solid transparent";
    name.nextElementSibling.style.display = "none";
    }

    if (email.value == "") {
    email.style.border = "1px solid #f00";
    email.nextElementSibling.style.display = "block";
    isValid = false;
    } else {
    email.style.border = "1px solid transparent";
    email.nextElementSibling.style.display = "none";
    }

    if (phone.value == "") {
    phone.style.border = "1px solid #f00";
    phone.nextElementSibling.style.display = "block";
    isValid = false;
    } else {
    phone.style.border = "1px solid transparent";
    phone.nextElementSibling.style.display = "none";
    }

    if (subject.value == "") {
    subject.style.border = "1px solid #f00";
    subject.nextElementSibling.style.display = "block";
    isValid = false;
    } else {
    subject.style.border = "1px solid transparent";
    subject.nextElementSibling.style.display = "none";
    }

    if (message.value == "") {
    message.style.border = "1px solid #f00";
    message.nextElementSibling.style.display = "block";
    isValid = false;
    } else {
    message.style.border = "1px solid transparent";
    message.nextElementSibling.style.display = "none";
    }

    if (!conditions.checked) {
    conditions.style.border = "1px solid #f00";
    conditions.nextElementSibling.style.display = "block";
    isValid = false;
    } else {
    conditions.style.border = "1px solid transparent";
    conditions.nextElementSibling.style.display = "none";
    }

    if (!isValid) {
    return false;
    } else {
    return true;
    }
}