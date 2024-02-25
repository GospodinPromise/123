document.querySelector('.header__menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__list').classList.toggle('open');
    document.querySelector('.header__background').classList.toggle('open');
})
