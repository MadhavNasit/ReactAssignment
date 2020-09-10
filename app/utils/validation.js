const validateName = (name) => {
  var regName = /^[a-zA-Z ]{2,40}$/;

  if (name.length == 0) {
    return "Please Enter User Name";
  }
  else if (!regName.test(name)) {
    return "Please Enter Valid User Name";
  }
  else {
    return "";
  }
}

const validateEmail = (email) => {
  var regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([a-zA-Z]{2,5}|[a-zA-z]{2,5}\.[a-zA-Z]{2,5})$/;
  if (email.length == 0) {
    return "Please Enter Email";
  }
  else if (!regEmail.test(email)) {
    return "Please Enter Valid Email";
  }
  else {
    return "";
  }

}

const validatePassword = (password) => {
  var regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (password.length == 0) {
    return "Please Enter Password";
  }
  else if (!regPassword.test(password)) {
    return "Minimum eight, at least one uppercase letter, one lowercase letter, one number and one special character";
  }
  else {
    return "";
  }
}

const validateSelect = (value) => {
  if (value.length == 0) {
    return "Please select option";
  }
  else {
    return "";
  }
}

const validateDate = (date) => {
  if (date.length == 0) {
    return "Please select date";
  }
  else {
    return "";
  }
}


export { validateName, validateEmail, validatePassword, validateSelect, validateDate };