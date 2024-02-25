import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./assets/js/firebase.js";

// Lấy ra thẻ form
const registerForm = document.getElementById("register-form");

/*
Các sự kiện có thể lắng nghe được trong form: click, submit, change, 
*/

// bắt sự kiện submit
registerForm.addEventListener("submit", (event) => {
  // Ngăn sự kiện submit reload lại trang web
  event.preventDefault();
console.log("đã vào")
  const data = {
    firstName: registerForm.firstName.value.trim(),
    lastName: registerForm.lastName.value.trim(),
    email: registerForm.email.value.trim(),
    password: registerForm.password.value.trim(),
    confirmPassword: registerForm.confirmPassword.value.trim(),
  }

  console.log(data);
  // Gửi dữ liệu data người dùng nhập tới controller để check lỗi.
  let dataClean = controller.register(data); //// kết quả cuôi cùng trả về là data sạch

  createUserWithEmailAndPassword(auth, dataClean.email, dataClean.password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user); // Xem user đã có hay chưa

      await sendEmailVerification(user); /// Hàm gửi email xác thực người dùng tới email cá nhân đăng ký tk

      // chạy hàm updateProfile ở đây.

      await signOut(auth);

      alert("Please verify your email");

      location.href = './login.html'
    })
    .catch((error) => {
      console.log(error); /// Biết nó in ra gì?
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode);
    })
});