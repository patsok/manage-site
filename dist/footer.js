(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["footer"],{

/***/ "./src/_sections/footer/footer.js":
/*!****************************************!*\
  !*** ./src/_sections/footer/footer.js ***!
  \****************************************/
/***/ (() => {

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





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/_sections/footer/footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbmFnZS1zaXRlLy4vc3JjL19zZWN0aW9ucy9mb290ZXIvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1Db250cm9sbGVyID0gKCgpPT57XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWlucHV0LWZpZWxkLS1pcy1pbnZhbGlkJyk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIChmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9ICdQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW1haWwnO1xuICAgICAgfVxuICB9KSgpLCB0cnVlKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT5jaGVja1ZhbGlkaXR5KGUpKTtcbiAgXG4gIGxldCBjaGVja1ZhbGlkaXR5ID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlucHV0LnZhbGlkaXR5LnZhbGlkID8gZXJyb3IudGV4dENvbnRlbnQgPSAnJyA6IGVycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbWFpbCc7XG4gIH1cbn0pKClcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==