import './styles/styles.scss';

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