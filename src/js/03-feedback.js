const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const storageObj = { email: '', message: '' };
let parsedObj;

function createStorage() {
  storageObj.email = emailInput.value;
  storageObj.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageObj));
}

form.addEventListener('input', throttle(createStorage, 500));

window.addEventListener('load', () => {
  if (localStorage.getItem('feedback-form-state')) {
    parsedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
    emailInput.value = parsedObj.email;
    messageInput.value = parsedObj.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('All fields must be filled!');
  } else {
    console.log(parsedObj);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  }
});
