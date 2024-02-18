const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    if(email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    }
    const dataForm = {
        email,
        password,
    };
    console.log(dataForm);
    form.reset();
});
