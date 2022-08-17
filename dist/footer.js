(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["footer"],{

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ (() => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9zcmMvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZSk9PmNoZWNrVmFsaWRpdHkoZSkpO1xuXG5sZXQgY2hlY2tWYWxpZGl0eSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlucHV0LnZhbGlkaXR5LnZhbGlkID8gZXJyb3IudGV4dENvbnRlbnQgPSAnJyA6IGVycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbWFpbCc7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ludmFsaWQnLCAoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnUGxlYXNlIGluc2VydCBhIHZhbGlkIGVtYWlsJztcbiAgICB9XG59KSgpLCB0cnVlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=