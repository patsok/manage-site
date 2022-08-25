const formController = (()=>{
  const form = document.querySelector('form');
  const input = form.querySelector('input');
  const error = document.querySelector('.form-input-field--is-invalid');

  document.addEventListener('invalid', (function(){
      return function(e) {
        e.preventDefault();
        error.textContent = 'Please insert a valid email';
      }
  })(), true);

  form.addEventListener('submit',(e)=>checkValidity(e));
  
  let checkValidity = (e) => {
      e.preventDefault();
      input.validity.valid ? error.textContent = '' : error.textContent = 'Please insert a valid email';
  }
})()



