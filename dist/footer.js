(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["footer"],{

/***/ "./src/footer/js/footer.js":
/*!*********************************!*\
  !*** ./src/footer/js/footer.js ***!
  \*********************************/
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/footer/js/footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9zcmMvZm9vdGVyL2pzL2Zvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT5jaGVja1ZhbGlkaXR5KGUpKTtcblxubGV0IGNoZWNrVmFsaWRpdHkgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbnB1dC52YWxpZGl0eS52YWxpZCA/IGVycm9yLnRleHRDb250ZW50ID0gJycgOiBlcnJvci50ZXh0Q29udGVudCA9ICdQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW1haWwnO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbWFpbCc7XG4gICAgfVxufSkoKSwgdHJ1ZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9