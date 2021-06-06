// page loader
const loader = document.querySelector('.page-loader');

window.addEventListener('load',function() {
    loader.style.transform = `translateY(-10000px)`;
});

// auto-played loop
let i = 0 // starting point
let images = [
    'imgs/photo1.jpg',
    'imgs/photo2.jpg',
    'imgs/photo5.jpg',
    'imgs/photo3.png'
];
const interval = 2200;
const profImg = document.querySelector('.profImg');

// function: display the image
function displayImgs() {
    profImg.src = images[i]

    if (i < images.length-1) {
        i++
    } else {
        i = 0
    }

    setTimeout(displayImgs,interval)
};

// display profile images slideshow on load
window.addEventListener('DOMContentLoaded',function() {
    displayImgs();
});

// back-to-top button
const backToTop = document.querySelector('.backToTop');

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 400) {
        backToTop.classList.add('showBackToTop');
    } else {
        backToTop.classList.remove('showBackToTop');
    }
});

// navbar menu toggle
const toggleBtn = document.querySelector('.toggleBtn');
const navbar = document.querySelector('.mainHeader');

toggleBtn.addEventListener('click',function() {
    navbar.classList.toggle('show')
});

// close navbar button
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click',function() {
    navbar.classList.remove('show');
});

// close navbar after a navlink is clicked
const navlinks = document.querySelectorAll('.navbar li a');
const brandName = document.querySelector('.brandName');

navlinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.remove('show');
    });
});

brandName.addEventListener('click',function() {
    navbar.classList.remove('show');
});

// accurate navigation to section when a nav-link is clicked
const navLinks = document.querySelectorAll('.navLinks');

navLinks.forEach(function(link) {
    link.addEventListener('click',function(event) {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;

        window.scrollTo({
            left: 0,
            top: position 
        });
    });
});

// auto-update year in footer
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// text color and font weight script for CTA buttons
function changeTextColor(textContent) {
    textContent.style.color = `#000000`;
    textContent.style.fontWeight = `bold`;
};

function normalTextColor(textContent) {
    textContent.style.color = `#f6f0e2`;
    textContent.style.fontWeight = `normal`;
};

function changeTextColorSideCta(textContent) {
    textContent.style.color = `#222222`;
    textContent.style.fontWeight = `bold`;
};

// show side CTA button
const sideCta = document.querySelector('.sideCta');

window.addEventListener('scroll',function() {
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 1300) {
        sideCta.style.transform = `translateX(0%)`;
    } else {
        sideCta.style.transform = `translateX(-120%)`;
    };
});