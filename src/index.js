import './styles/styles.scss';

const hamburgerMenu = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const mobileNav = document.querySelector('.nav-items');
const background = document.querySelector('.background')
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click',showNav);
closeButton.addEventListener('click',closeNav);

function showNav(){
    hamburgerMenu.classList.add('mobile-hidden');
    mobileNav.classList.add('nav-mobile');
    closeButton.classList.remove('mobile-hidden');
    background.classList.remove('hidden');
    background.classList.add('gradient');
    nav.setAttribute('style','padding-bottom:54px');
}

function closeNav(){
    hamburgerMenu.classList.remove('mobile-hidden');
    mobileNav.classList.remove('nav-mobile');
    closeButton.classList.add('mobile-hidden');
    background.classList.remove('gradient');
    background.classList.add('hidden');
    nav.setAttribute('style','position:static');
}