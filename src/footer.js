const form = document.querySelector('form');
const input = form.querySelector('input');
const error = document.querySelector('.error');

form.addEventListener('submit',(e)=>checkValidity(e));

let checkValidity = (e) => {
    e.preventDefault();
    input.validity.valid ? error.textContent = '' : error.textContent = 'Please insert a valid email';
}

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
      error.textContent = 'Please insert a valid email';
    }
})(), true);