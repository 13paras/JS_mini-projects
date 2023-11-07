//All DOM elements
const password = document.getElementById('password');
const upperCaseCheck = document.getElementById('upperCaseCheck');
const length = document.querySelector('.length');
const inputRange = document.querySelector('#passRange');
const generatePass = document.getElementById('generatePass');
const toggleButton = document.querySelectorAll('.toggleButton');
const copyToClipboard = document.getElementById('copyToClipboard');

// Variables
let str = '';
let uppercaseAllowed = false;
let lowerCaseAllowed = true;
let numbersAllowed = false;
let symbolsAllowed = false;

// passw length
length.innerHTML = inputRange.value;

// display passw length
inputRange.addEventListener('change', (e) => {
  length.innerHTML = e.target.value;
});

toggleButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    if (e.target.classList.contains('incUppercase')) {
      uppercaseAllowed = true;
    } else if (e.target.classList.contains('incLowercase')) {
      lowerCaseAllowed = true;
    } else if (e.target.classList.contains('incNumbers')) {
      numbersAllowed = true;
    } else if (e.target.classList.contains('incSymbols')) {
      symbolsAllowed = true;
    } else {
      uppercaseAllowed = false;
      lowerCaseAllowed = false;
      numbersAllowed = false;
      symbolsAllowed = false;
    }
  });
});

generatePass.addEventListener('click', generatePassword);

function generatePassword() {
  let pass = '';

  if (uppercaseAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowerCaseAllowed) str += 'abcdefghijklmnopqrstuvwxyz';
  if (numbersAllowed) str += '0123456789';
  if (symbolsAllowed) str += '!@#$%^&*()+_';

  for (let i = 1; i <= inputRange.value; i++) {
    let random = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(random);
  }

  password.value = pass;
  console.log(pass);
}

copyToClipboard.addEventListener('click', () => {
  if (password.value) {
    navigator.clipboard.writeText(password.value);
    alert('Password Copied');
  }
});
