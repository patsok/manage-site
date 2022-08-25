(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["footer"],{

/***/ "./src/footer/footer.js":
/*!******************************!*\
  !*** ./src/footer/footer.js ***!
  \******************************/
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/footer/footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbmFnZS1zaXRlLy4vc3JjL2Zvb3Rlci9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybUNvbnRyb2xsZXIgPSAoKCk9PntcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0taW5wdXQtZmllbGQtLWlzLWludmFsaWQnKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbWFpbCc7XG4gICAgICB9XG4gIH0pKCksIHRydWUpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZSk9PmNoZWNrVmFsaWRpdHkoZSkpO1xuICBcbiAgbGV0IGNoZWNrVmFsaWRpdHkgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaW5wdXQudmFsaWRpdHkudmFsaWQgPyBlcnJvci50ZXh0Q29udGVudCA9ICcnIDogZXJyb3IudGV4dENvbnRlbnQgPSAnUGxlYXNlIGluc2VydCBhIHZhbGlkIGVtYWlsJztcbiAgfVxufSkoKVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9