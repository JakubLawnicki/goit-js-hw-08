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
  parsedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = parsedObj.email;
  messageInput.value = parsedObj.message;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  (emailInput.value = ''), (messageInput.value = '');
  console.log(parsedObj);
});
