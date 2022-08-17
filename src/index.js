import './styles/styles.scss';

const hamburgerMenu = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const mobileNav = document.querySelector('.nav-items');
const body = document.querySelector('body')
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click',showNav);
closeButton.addEventListener('click',closeNav);

function showNav(){
    hamburgerMenu.classList.add('mobile-hidden');
    mobileNav.classList.add('nav-mobile');
    closeButton.classList.remove('mobile-hidden');
    body.classList.add('gradient');
    nav.setAttribute('style','position:fixed');
    nav.setAttribute('style','padding-bottom:54px');

}

function closeNav(){
    hamburgerMenu.classList.remove('mobile-hidden');
    mobileNav.classList.remove('nav-mobile');
    closeButton.classList.add('mobile-hidden');
    body.classList.remove('gradient');
    nav.setAttribute('style','position:static');
}