let form = document.getElementById("contactForm");
let btn = document.getElementById("submitBtn");
let inputNama = document.getElementById("exampleInputNama");
let inputEmail = document.getElementById("exampleInputEmail");
let inputMessage = document.getElementById("exampleInputMessage");
let err = document.getElementById("messageError");
let succ = document.getElementById("successMessage");
let load = document.getElementById("loadingIcon");

let userInput = document.getElementById("userInput");
let displayText = document.getElementById("displayText");

btn.addEventListener("click", function () {
  if (
    inputNama.value == "" ||
    inputEmail.value == "" ||
    inputMessage.value == ""
  ) {
    err.style.display = "block";
    succ.style.display = "none";
  } else {
    succ.style.display = "block";
    err.style.display = "none";
  }
});


// Muat nilai dari localStorage
if (localStorage.getItem("savedText")) {
    userInput.value = localStorage.getItem("savedText");
    displayText.textContent = localStorage.getItem("savedText");
}

// Update display dan simpan di localStorage saat mengetik
userInput.addEventListener("input", function() {
    let value = userInput.value;
    displayText.textContent = value;
    localStorage.setItem("savedText", value);
});
