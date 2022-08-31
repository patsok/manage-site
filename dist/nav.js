(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["nav"],{

/***/ "./src/_sections/nav/nav.js":
/*!**********************************!*\
  !*** ./src/_sections/nav/nav.js ***!
  \**********************************/
/***/ (() => {

const navController = (()=>{
    const hamburgerMenu = document.querySelector(".nav-hamburger");
    const openButton = document.querySelector(".hamburger__item--open");
    const closeButton = document.querySelector(".hamburger__item--close");
    const mobileNav = document.querySelector('.nav__items');
    const background = document.querySelector('.nav__shadow')
    const body = document.querySelector("body");
    const nav = document.querySelector(".nav")

    openButton.addEventListener('click',addNav);
    closeButton.addEventListener('click',removeNav);
    
    function addNav(){
        history.pushState(null, null, document.URL);
        toggleNav();
        const mobileNavLinks = document.querySelectorAll('.nav__items--mobile ul li');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click',toggleNav);
        });
    }

    function removeNav(){
        toggleNav();
    }

    function toggleNav(){
        hamburgerMenu.classList.toggle('hamburger__item--is-hidden');
        openButton.classList.toggle('hamburger__item--is-hidden');
        closeButton.classList.toggle('hamburger__item--is-hidden');
        mobileNav.classList.toggle('nav__items--mobile');
        mobileNav.classList.toggle('nav__items--visible');
        background.classList.toggle('nav__shadow--hidden');
        background.classList.toggle('nav__shadow--visible');
        body.classList.toggle('stop-scrolling');
    }

    window.addEventListener('popstate',(e)=>{
        const test = document.querySelector('.nav__shadow--hidden');
        if (test == null){
            removeNav();
        }
    })
    
    window.addEventListener('scroll',setSticky);
    
    function setSticky(){
        window.scrollY < 1 ? nav.classList.remove('nav--sticky') : nav.classList.add('nav--sticky');
    }
    
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/_sections/nav/nav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2Utc2l0ZS8uL3NyYy9fc2VjdGlvbnMvbmF2L25hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZDb250cm9sbGVyID0gKCgpPT57XG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWhhbWJ1cmdlclwiKTtcbiAgICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJfX2l0ZW0tLW9wZW5cIik7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlcl9faXRlbS0tY2xvc2VcIik7XG4gICAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faXRlbXMnKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fc2hhZG93JylcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIilcblxuICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZE5hdik7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlbW92ZU5hdik7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkTmF2KCl7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRvY3VtZW50LlVSTCk7XG4gICAgICAgIHRvZ2dsZU5hdigpO1xuICAgICAgICBjb25zdCBtb2JpbGVOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW1zLS1tb2JpbGUgdWwgbGknKTtcbiAgICAgICAgbW9iaWxlTmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZU5hdik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5hdigpe1xuICAgICAgICB0b2dnbGVOYXYoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVOYXYoKXtcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfX2l0ZW0tLWlzLWhpZGRlbicpO1xuICAgICAgICBvcGVuQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlcl9faXRlbS0taXMtaGlkZGVuJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlcl9faXRlbS0taXMtaGlkZGVuJyk7XG4gICAgICAgIG1vYmlsZU5hdi5jbGFzc0xpc3QudG9nZ2xlKCduYXZfX2l0ZW1zLS1tb2JpbGUnKTtcbiAgICAgICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdl9faXRlbXMtLXZpc2libGUnKTtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCduYXZfX3NoYWRvdy0taGlkZGVuJyk7XG4gICAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2X19zaGFkb3ctLXZpc2libGUnKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzdG9wLXNjcm9sbGluZycpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsKGUpPT57XG4gICAgICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19zaGFkb3ctLWhpZGRlbicpO1xuICAgICAgICBpZiAodGVzdCA9PSBudWxsKXtcbiAgICAgICAgICAgIHJlbW92ZU5hdigpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxzZXRTdGlja3kpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHNldFN0aWNreSgpe1xuICAgICAgICB3aW5kb3cuc2Nyb2xsWSA8IDEgPyBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LS1zdGlja3knKSA6IG5hdi5jbGFzc0xpc3QuYWRkKCduYXYtLXN0aWNreScpO1xuICAgIH1cbiAgICBcbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldD09YmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdG9nZ2xlTmF2KClcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57IFxuICAgICAgICBpZighYmFja2dyb3VuZC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fc2hhZG93LS1oaWRkZW4nKSl7XG4gICAgICAgICAgICBlLmtleSA9PSBcIkJhY2tzcGFjZVwiID8gdG9nZ2xlTmF2KCkgOiBjb25zb2xlLmxvZygnbm9wZScpO1xuICAgICAgICB9IFxuICAgIH0pO1xuXG59KSgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==