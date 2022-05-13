const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const rating = document.querySelectorAll('.diagrams__rating'),
    lines = document.querySelectorAll('.diagrams__line span');

rating.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


