let log = console.log;

// creat account script
let CreatEmail = document.getElementById("email_up");
let CreatPassword = document.getElementById("Password_up");
let ConfirmPassword = document.getElementById("Password_up_confirm");
let CreatAcount = document.getElementById("CreatAccount");
let formUP = document.getElementById("form1");
let btnUP = document.getElementById("btn_SginUp");
let chekEmail = false;
let chekPassword = false;
let chekConfirm = false;
let dataBase = new Map();
let passwordValue;
let emailValue;
CreatAcount.addEventListener("click", function () {
  if (CreatEmail.value === "" || CreatEmail.value.length <= 8) {
    CreatEmail.style.border = "solid 2px red";
    CreatEmail.value = "";
    CreatEmail.setAttribute("placeholder", "Email not correct ");
  } else {
    chekEmail = true;
  }

  if (CreatPassword.value === "" || CreatPassword.value.length <= 7) {
    CreatPassword.style.border = "solid 2px red";
    CreatPassword.value = "";
    CreatPassword.setAttribute("placeholder", "The password is not secure ");
  } else {
    chekPassword = true;
  }
  if (
    ConfirmPassword.value === "" ||
    ConfirmPassword.value.length <= 7 ||
    ConfirmPassword.value !== CreatPassword.value
  ) {
    ConfirmPassword.style.border = "solid 2px red";
    ConfirmPassword.value = "";
    ConfirmPassword.setAttribute("placeholder", "Password does not match");
  } else {
    chekConfirm = true;
  }
  if (chekConfirm && chekEmail && chekPassword) {
    let done = document.createTextNode("An account has been created");
    let divText = document.getElementById("done");
    divText.className = "doneCreat";
    divText.append(done);
    ConfirmPassword.style.border = "solid 2px green";
    CreatPassword.style.border = "solid 2px green";
    CreatEmail.style.border = "solid 2px green";

    emailValue = CreatEmail.value;
    passwordValue = CreatPassword.value;
    window.localStorage.setItem("email", emailValue);
    window.localStorage.setItem("Password", passwordValue);

    dataBase.set("email", emailValue);
    dataBase.set("password", passwordValue);
    setTimeout(function () {
      btnUP.style.display = "none";
      formUP.style.display = "none";
    }, 2000);
  }
});
// signe in
let email = document.getElementById("email_in");
let password = document.getElementById("password_in");
let login = document.getElementById("login");
let emailCheck = false;
let passwordCheck = false;
login.addEventListener("click", function () {
  if (email.value === "" || email.value.length <= 8) {
    email.style.border = "solid 2px red";
    email.value = "";
    email.setAttribute("placeholder", "Email not correct ");
  } else if (emailValue === email.value) {
    emailCheck = true;
  }
  if (password.value === "" || password.value.length <= 8) {
    password.style.border = "solid 2px red";
    password.value = "";
    password.setAttribute("placeholder", "Password does not match ");
  } else if (passwordValue === password.value) {
    passwordCheck = true;
  }
  if (emailCheck && passwordCheck) {
    password.style.border = "solid 2px green";
    email.style.border = "solid 2px green";
    let userName = document.createTextNode(email.value);
    let name = document.getElementById("name");
    let userDiv = document.getElementById("User");
    name.append(userName);
    setTimeout(function () {
      let form2 = document.getElementById("form2");
      let btnSgin = document.getElementById("btn_Sign");
      form2.style.display = "none";
      btnSgin.style.display = "none";
      btnUP.style.display = "none";
      formUP.style.display = "none";
      userDiv.classList.toggle("AccountShow");
    }, 2000);
  }

  console.log("email found :" + emailCheck);
  console.log("password found :" + passwordCheck);
});
