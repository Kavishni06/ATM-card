/*function validation() {
    const cardholdername = document.getElementById("cardholdername").value;
    const cardnumber = document.getElementById("cardnumber").value;
    const cvv = document.getElementById("cvv").value;
    const year = document.getElementById("year").value;
    const month=document.getElementById("Month").value;


    // Regular expressions for validation
    const namePattern = /^[A-Za-z\s]+$/;
    const cardNumberPattern = /^\d{4}(?:\s\d{4}){3}$/; // Matches 16 digits separated by spaces
    const cvvPattern = /^[0-9]{3}$/;
    const yearPattern =  /^[0-9]{4}$/;
    const monthPattern= /^[A-Za-z\s]+$/;

    if (!namePattern.test(cardholdername)) {
        alert("Cardholder Name should contain only letters and spaces.");
        return false;
    }

    if (!cardNumberPattern.test(cardnumber)) {
        alert("Card Number should be 16 digits with spaces and with no special characters.");
        return false;
    }
    if (!monthPattern.test(month)) {
        alert("Month Name should contain only letters.");
        return false;
    }
    if (!yearPattern.test(year)) {
        alert("Year should be 4 digits with no special characters.");
        return false;
    }
    if (!cvvPattern.test(cvv)) {
        alert("CVV should be 3 digits with no special characters.");
        return false;
    }

    return true;
}*/

function validation() {
    const cardholdername = document.getElementById("cardholdername").value;
    const cardnumber = document.getElementById("cardnumber").value;
    const cvv = document.getElementById("cvv").value;
    const year = document.getElementById("year").value;
    const month = document.getElementById("Month").value;

    // Regular expressions for validation
    const namePattern = /^[A-Za-z\s]+$/;
    const cardNumberPattern = /^\d{4}(?:\s\d{4}){3}$/; 
    const cvvPattern = /^[0-9]{3}$/;
    const yearPattern = /^[0-9]{4}$/;
    const monthPattern =/^[0-9]{2}$/;;

    const nameError = document.getElementById("nameError");
    const cardNumberError = document.getElementById("cardNumberError");
    const cvvError = document.getElementById("cvvError");
    const yearError = document.getElementById("yearError");
    const monthError = document.getElementById("monthError");

    nameError.textContent = "";
    cardNumberError.textContent = "";
    cvvError.textContent = "";
    yearError.textContent = "";
    monthError.textContent = "";

    let isValid = true;

    if (!namePattern.test(cardholdername)) {
        nameError.textContent = "Name should be in words.";
        isValid = false;
    }

    if (!cardNumberPattern.test(cardnumber)) {
        cardNumberError.textContent = "Wrong format. Numbers only.";
        isValid = false;
    }

    if (!monthPattern.test(month)) {
        monthError.textContent = "Numbers only.";
        isValid = false;
    }

    if (!yearPattern.test(year)) {
        yearError.textContent = "can't be blank.";
        isValid = false;
    }

    if (!cvvPattern.test(cvv)) {
        cvvError.textContent = "CVV should be 3 digits Numbers only.";
        isValid = false;
    }

    return isValid;
}