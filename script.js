document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');


  form.addEventListener('submit', function(event) {
    event.preventDefault();


    //For each, retrieve the .value property and apply the .trim() method to remove any leading or trailing whitespace. Store these trimmed values in constants named after each input field.

    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    const messages = [];

    //username validation
    if (usernameInput.length < 3){
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    //email validation
    if(!emailInput.includes('@') || !emailInput.includes('.')){
      isValid = false;
      messages.push("Email must include '@' and '.'");
    }

    //password validation
    if(password.length < 8){
      isValid = false;
      messages.push('Password must be atleast 8 characters long');
    }

    //displaing feedback
    feedbackDiv.style.display = "block";


    if(isValid){
      feedbackDiv.textContent = 'registration successful!';
      feedbackDiv.style.color = '#28a745'
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = '#dc3545';
    }
  });
});
