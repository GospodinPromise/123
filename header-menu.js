const headerListElement = document.querySelector('.header__list');
const headerBackgroundElement = document.querySelector('.header__background');
const headerMenuElement = document.querySelector('.header__menu')

headerMenuElement.addEventListener('click', function() {
    event.currentTarget.classList.toggle('active');
    headerListElement.classList.toggle('open');
    headerBackgroundElement.classList.toggle('open');
})
