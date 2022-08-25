(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["nav"],{

/***/ "./src/nav/nav.js":
/*!************************!*\
  !*** ./src/nav/nav.js ***!
  \************************/
/***/ (() => {

const navController = (()=>{
    const hamburgerMenu = document.querySelector(".nav-hamburger");
    const openButton = document.querySelector(".hamburger__item--open");
    const closeButton = document.querySelector(".hamburger__item--close");
    const mobileNav = document.querySelector('.nav__items');
    const background = document.querySelector('.nav__shadow')
    const body = document.querySelector("body");
    const nav = document.querySelector(".nav");
    
    openButton.addEventListener('click',toggleNav);
    closeButton.addEventListener('click',toggleNav);
    
    function toggleNav(){
        hamburgerMenu.classList.toggle('hamburger__item--is-hidden');
        openButton.classList.toggle('hamburger__item--is-hidden');
        closeButton.classList.toggle('hamburger__item--is-hidden');
        mobileNav.classList.toggle('nav__items--mobile');
        background.classList.toggle('nav__shadow--hidden');
        body.classList.toggle('stop-scrolling');
    }
    
    window.addEventListener('scroll',setSticky);
    
    function setSticky(){
        window.scrollY < 1 ? nav.classList.remove('nav--sticky') : nav.classList.add('nav--sticky');
    }
    
    body.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.offsetWidth) + 'px');

    background.addEventListener('click',(e)=> {
        if (e.target==background) {
            toggleNav()
        }
    });

    body.addEventListener('keydown', (e)=>{ 
        if(!background.classList.contains('nav__shadow--hidden')){
            e.key == "Backspace" ? toggleNav() : console.log('nope');
        } 
    });

})()



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/nav/nav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9zcmMvbmF2L25hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZDb250cm9sbGVyID0gKCgpPT57XG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWhhbWJ1cmdlclwiKTtcbiAgICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJfX2l0ZW0tLW9wZW5cIik7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlcl9faXRlbS0tY2xvc2VcIik7XG4gICAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faXRlbXMnKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fc2hhZG93JylcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG4gICAgXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTmF2KTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTmF2KTtcbiAgICBcbiAgICBmdW5jdGlvbiB0b2dnbGVOYXYoKXtcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfX2l0ZW0tLWlzLWhpZGRlbicpO1xuICAgICAgICBvcGVuQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlcl9faXRlbS0taXMtaGlkZGVuJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlcl9faXRlbS0taXMtaGlkZGVuJyk7XG4gICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXZfX2l0ZW1zLS1tb2JpbGUnKTtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCduYXZfX3NoYWRvdy0taGlkZGVuJyk7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc3RvcC1zY3JvbGxpbmcnKTtcbiAgICB9XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsc2V0U3RpY2t5KTtcbiAgICBcbiAgICBmdW5jdGlvbiBzZXRTdGlja3koKXtcbiAgICAgICAgd2luZG93LnNjcm9sbFkgPCAxID8gbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi0tc3RpY2t5JykgOiBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LS1zdGlja3knKTtcbiAgICB9XG4gICAgXG4gICAgYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zY3JvbGxiYXItd2lkdGgnLCAod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgpICsgJ3B4Jyk7XG5cbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD09YmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdG9nZ2xlTmF2KClcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57IFxuICAgICAgICBpZighYmFja2dyb3VuZC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fc2hhZG93LS1oaWRkZW4nKSl7XG4gICAgICAgICAgICBlLmtleSA9PSBcIkJhY2tzcGFjZVwiID8gdG9nZ2xlTmF2KCkgOiBjb25zb2xlLmxvZygnbm9wZScpO1xuICAgICAgICB9IFxuICAgIH0pO1xuXG59KSgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==