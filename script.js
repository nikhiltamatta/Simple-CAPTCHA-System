document.addEventListener("DOMContentLoaded", function() {
    generateCaptcha();
  });
  
  function generateCaptcha() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    var captcha = num1 + " " + operator + " " + num2;
    var result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
    }
    document.getElementById("captcha").textContent = captcha;
    document.getElementById("captcha").setAttribute("data-result", result);
  }
  
  document.getElementById("captcha-form").addEventListener("submit", function(event) {
    var userInput = document.getElementById("captcha-input").value;
    var result = document.getElementById("captcha").getAttribute("data-result");
    if (userInput != result) {
      alert("Incorrect CAPTCHA. Please try again.");
      event.preventDefault();
      generateCaptcha();
    }
  });
  