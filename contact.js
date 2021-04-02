function feedback() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let radiobutton = document.getElementsByClassName("radio");


    if (name && email && message !== "") {

        alert("Your response has been received. Thank you for your feedback. We'll be in touch with you using " + email)

    } else {
        alert("Kindly provide all details.")
    }

}

