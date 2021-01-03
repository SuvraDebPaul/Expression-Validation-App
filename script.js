resetButton();

document.querySelector(".btn-phone").addEventListener("click", phoneValidator);
document.querySelector(".btn-email").addEventListener("click", emailValidator);
document.querySelector(".btn-post").addEventListener("click", postValidator);

function phoneValidator(e) {
  let phoneBtnPressed = e.target;
  let phoneNumberExp = /^(\+)?(88)?01([0-9]){9}$/;
  let validetionResult = "false";
  if (phoneBtnPressed) {
    resetPrevious();
    let userInput = prompt("Please Enter Your Phone Number");
    validetionResult = phoneNumberExp.test(userInput);
  }
  if (validetionResult) {
    document.querySelector(".phone-number").style.display = "block";
  } else {
    document.querySelector(".phone-number-invalid").style.display = "block";
  }
}

function emailValidator(e) {
  let emailBtnPressed = e.target;
  let emailExp = /^([A-Za-z0-9]\.?_?)+[^\.]@([A-Za-z0-9]\.?)+[^\.]$/;
  let emailValidetionResult = "flase";
  if (emailBtnPressed) {
    resetPrevious();
    let useremail = prompt("Please Enter Your Email Address");
    emailValidetionResult = emailExp.test(useremail);
  }
  if (emailValidetionResult) {
    document.querySelector(".email").style.display = "block";
  } else {
    document.querySelector(".email-invalid").style.display = "block";
  }
}

function postValidator(e) {
  let postBtnPressed = e.target;
  let postExp = /^([0-9]{4})$/;
  postValidetionResult = "flase";
  if (postBtnPressed) {
    resetPrevious();
    let userPost = prompt("Please Enter The Post Code");
    postValidetionResult = postExp.test(userPost);
  }
  if (postValidetionResult) {
    document.querySelector(".post-code").style.display = "block";
  } else {
    document.querySelector(".post-code-invalid").style.display = "block";
  }
}

function resetPrevious() {
  document.querySelector(".phone-number").style.display = "none";
  document.querySelector(".phone-number-invalid").style.display = "none";
  document.querySelector(".email").style.display = "none";
  document.querySelector(".email-invalid").style.display = "none";
  document.querySelector(".post-code").style.display = "none";
  document.querySelector(".post-code-invalid").style.display = "none";
}

function resetButton() {
  document.querySelector(".btn-reset").addEventListener("click", function (e) {
    resetPrevious();
  });
}
