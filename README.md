# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## Links

- Solution URL: [https://dbidmead.github.io/coming-soon-page](https://dbidmead.github.io/coming-soon-page)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS transitions
- JS form validation via regular expression

## What I learned

### Use outline-color to manipulate focus border styling

```css
*:focus {
    outline-color: #101010;
}
```

### Use regular expressions to test input values for validity

```js
const input = document.querySelector('#input');
const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
const isValid = (input) => {
    if(input.value.length != 0 && emailRegEx.test(input.value)) {
        return true;
    } else return false;
}

input.addEventListener('input', () => {
  if(isValid(input)) {
    input.className = 'valid';
    // additional DOM and CSS manipulation for error message and styling
  } else {
    input.className = 'invalid';
     // additional DOM and CSS manipulation for error message and styling
  }
})
``` 
The above code defines an isValid() funstion that tests the input value against the parameters asserted by the regular expression and returns a boolean. The event listener then adjusts the DOM and styling according to the status of the isValid() value.

### Prevent submitting a form if it fails the validation check

```js
form.addEventListener('submit', (e) => {
    if(!isValid(input)) {
        e.preventDefault();
        // code to show error in HTML and CSS
    } else return
})
```
The form event listener prevents the default submit behavior if isValid() is false, but allows default behavior if true.

## Author

- GitHub - [@dbidmead](https://github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)