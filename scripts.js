/* Add your JavaScript to this file */
window.addEventListener("load",()=>{
    let subscribe = document.querySelector("section.newsletter form button.btn");
    let email = document.getElementById("email");
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let message = document.querySelector(".newsletter .message");

    subscribe.onclick= (event)=>{
        event.preventDefault();
        if (email.value.length !== 0 && emailFormat.test(email.value.toLowerCase())) {
        message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        }
        else {
        message.innerHTML = "Please enter a valid email address";
        }
    }
}
)