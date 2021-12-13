const submit = document.querySelector(".submit");
const inputField = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click", (e) => {
  emailAddress = inputField.value;
  if (emailAddress === "") {
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
    inputField.style.border = "2px solid hsl(0, 93%, 68%)";
  } else if (!emailAddress.match(emailRegex)) {
    errorIcon.style.display = "block";
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Please provide a valid email";
    inputField.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
    inputField.style.border = "1px solid hsla(0, 6%, 24%, 0.2)";
    inputField.value = "";
  }
  e.preventDefault();
});
