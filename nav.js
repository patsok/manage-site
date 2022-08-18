(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["nav"],{

/***/ "./src/nav/js/nav.js":
/*!***************************!*\
  !*** ./src/nav/js/nav.js ***!
  \***************************/
/***/ (() => {

const hamburgerMenu = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const mobileNav = document.querySelector('.nav-items');
const background = document.querySelector('.background')

hamburgerMenu.addEventListener('click',toggleNav);
closeButton.addEventListener('click',toggleNav);

function toggleNav(){
    hamburgerMenu.classList.toggle('mobile-hidden');
    mobileNav.classList.toggle('nav-mobile');
    closeButton.classList.toggle('mobile-hidden');
    background.classList.toggle('gradient');
    background.classList.toggle('hidden');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/nav/js/nav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hbmFnZS1zaXRlLy4vc3JjL25hdi9qcy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaXRlbXMnKTtcbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZCcpXG5cbmhhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZU5hdik7XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTmF2KTtcblxuZnVuY3Rpb24gdG9nZ2xlTmF2KCl7XG4gICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbGUtaGlkZGVuJyk7XG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tb2JpbGUnKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtb2JpbGUtaGlkZGVuJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdncmFkaWVudCcpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9