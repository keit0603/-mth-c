let lowerCaseLetter = /[a-z]/g;
let upperCaseLetter = /[A-Z]/g;
let numbers = /[0-9]/g;



const controller = {}

controller.register = (data) => {
  if (data.firstName === "") {
    // alert("*Please input your first name");
    document.getElementById("first-name-error").innerText = "*Please input your first name";
  }
  else {
    document.getElementById("first-name-error").innerText = "";
  }

  if (data.lastName === "") {
    // alert("*Please input your first name");
    document.getElementById("last-name-error").innerText = "*Please input your last name";
  }
  else {
    document.getElementById("last-name-error").innerText = "";
  }

  if (data.email === "") {
    // alert("*Please input your first name");
    document.getElementById("email-error").innerText = "*Please input your email";
  }
  else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password === "") {
    // alert("*Please input your first name");
    document.getElementById("password-error").innerText = "*Please input your password";
  }
  else {
    document.getElementById("password-error").innerText = "";
  }

  if (data.confirmPassword === "") {
    // alert("*Please input your first name");
    document.getElementById("confirm-password-error").innerText = "*Please input your confirm password";
  }
  else {
    document.getElementById("confirm-password-error").innerText = "";
  }

  ///// Xử lý confirmPassword
  data.password != data.confirmPassword ?
    document.getElementById("confirm-password-error").innerText = "Confirm Password is erorr" :
    document.getElementById("confirm-password-error").innerText = "";


  ////// Xử lý Password
  if (data.password.length < 6) {
    document.getElementById("password-error").innerText = "*Your password must be at least 6 characters";
  }
  else if (!data.password.match(lowerCaseLetter)) {
    document.getElementById("password-error").innerText = "*Your password must contain a lowerCaseLetter";
  }
  else if (!data.password.match(upperCaseLetter)) {
    document.getElementById("password-error").innerText = "*Your password must contain a upperCaseLetter";
  }
  else if (!data.password.match(numbers)) {
    document.getElementById("password-error").innerText = "*Your password must number or special character";
  }
  else {
    // Tạo user
    if (data.firstName !== "" && data.lastName !== "" &&
      data.email !== "" &&
      data.password !== "" &&
      data.confirmPassword !== "" &&
      data.password === data.confirmPassword) {
      return data; // Trả về data sạch
    }
  }

}