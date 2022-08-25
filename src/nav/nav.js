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

