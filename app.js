const form = document.querySelector('#email-form');
const emailInput = document.querySelector('#email-input');
const validIcon = document.querySelector('#valid-icon');
const invalidIcon = document.querySelector('#invalid-icon');
const error = document.querySelector('#error');
const errorText = 'Please provide a valid email';

const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 

const isValid = (emailInput) => {
    if(emailInput.value.length != 0 && emailRegEx.test(emailInput.value)) {
        return true;
    } else return false;
}

emailInput.addEventListener('input', () => {
    if(isValid(emailInput)) {
        emailInput.className = 'valid';
        validIcon.setAttribute('style', 'opacity: 1;')
        invalidIcon.setAttribute('style', 'opacity: 0;')
        error.innerHTML = '';
    } else {
        emailInput.className = 'invalid';
        validIcon.setAttribute('style', 'opacity: 0;')
        invalidIcon.setAttribute('style', 'opacity: 1;')
    }
})

form.addEventListener('submit', (e) => {
    if(!isValid(emailInput)) {
        e.preventDefault();
        error.innerHTML = errorText;
    } else return
})
