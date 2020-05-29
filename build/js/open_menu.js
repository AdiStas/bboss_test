'use strict';

const toggleBtn = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const mainNavList = document.querySelector('.main-nav__list');
const mainNavLinks = mainNavList.querySelectorAll('a');

const menuToggle = () => {
    mainNav.classList.toggle('main-nav--opened');
    mainNav.classList.toggle('main-nav--closed');

    showMenu();
}

const showMenu = () => {
    mainNavList.classList.toggle('main-nav__list--visible');
    mainNavList.classList.toggle('main-nav__list--hidden');
};

toggleBtn.onclick = menuToggle;