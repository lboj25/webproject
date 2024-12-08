let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function () {
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function () {
    if (this.scrollY >= 100) {
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});
