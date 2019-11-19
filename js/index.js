function checkName() {
    let name = document.getElementById("fullname");
    let nameText = document.getElementById("fullname").value;

    if (nameText.length < 5) {
        name.style.borderColor = "red";
    }

    else if (nameText.length >= 5) {
        name.style.borderColor = "green";
    }
}

function checkEmail() {
    let name = document.getElementById("email");
    let nameText = document.getElementById("email").value;

    if (nameText.length >= 8) {
        name.style.borderColor = "green";
    }

    else if (nameText.length < 8) {
        name.style.borderColor = "red";
    }
}

function checkPhone() {
    let name = document.getElementById("phonenumber");
    let nameText = document.getElementById("phonenumber").value;

    if(nameText.length === 10){
        name.style.borderColor = "green"
    }
    else{
        name.style.borderColor = "red"

    }
  
}

function checkCountry() {
    let canada = document.getElementById("canada");
    let us = document.getElementById("us");
    let postal= document.getElementById("pickpostal");
    let zip = document.getElementById("pickzip");

    if (canada.checked) {
        postal.style.display = "block";
        zip.style.display = "none";
    }

    else if (us.checked) {
        postal.style.display = "none";
        zip.style.display = "block";
    }

    else {
        postal.style.display = "none";
        zip.style.display = "none";
    }
}