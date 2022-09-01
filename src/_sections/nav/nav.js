const navController = (()=>{
    const hamburgerMenu = document.querySelector(".nav-hamburger");
    const openButton = document.querySelector(".hamburger__item--open");
    const closeButton = document.querySelector(".hamburger__item--close");
    const mobileNav = document.querySelector('.nav__items');
    const background = document.querySelector('.nav__shadow')
    const body = document.querySelector("body");
    const nav = document.querySelector(".nav")
    const html = document.querySelector("html")

    openButton.addEventListener('click',addNav);
    closeButton.addEventListener('click',removeNav);
    
    function addNav(){
        mobileNav.classList.remove('nav__items--hidden');
        history.pushState(null, null, document.URL);
        toggleNav();
        background.classList.remove('nav__shadow--hidden');
        mobileNav.classList.add('nav__items--mobile');
        const mobileNavLinks = document.querySelectorAll('.nav__items--mobile ul li');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click',removeNav);
        });
        background.setAttribute('style',`height:calc(100vh + ${window.scrollY}px)`);
    }

    function removeNav(){
        toggleNav();
        background.classList.add('nav__shadow--hidden');
        mobileNav.classList.add('nav__items--hidden');
    }

    function toggleNav(){
        hamburgerMenu.classList.toggle('hamburger__item--is-hidden');
        openButton.classList.toggle('hamburger__item--is-hidden');
        closeButton.classList.toggle('hamburger__item--is-hidden');
        mobileNav.classList.toggle('nav__items--visible');
        background.classList.toggle('nav__shadow--visible');
        
        html.classList.toggle('stop-scrolling');
    }

    window.addEventListener('popstate',()=>{
        const state = document.querySelector('.nav__items.nav__items--visible');
        if (state !== null){
            removeNav();
        }
    })
    
    window.addEventListener('scroll',setSticky);
    
    function setSticky(){
        window.scrollY < 1 ? nav.classList.remove('nav--sticky') : nav.classList.add('nav--sticky');
    }
    
    background.addEventListener('click',(e)=> {
        if (e.target==background) {
            removeNav()
        }
    });

    body.addEventListener('keydown', (e)=>{ 
        if(background.classList.contains('nav__shadow--visible')){
            e.key == "Backspace" ? removeNav() : console.log('nope');
        } 
    });

})()

