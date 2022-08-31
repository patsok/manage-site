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

