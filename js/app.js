// auto-played loop

let i = 0 // starting point
let images = [
    'imgs/photo1.jpg',
    'imgs/photo2.jpg',
    'imgs/photo5.jpg'
];
const interval = 2300;
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
    displayImgs()
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
navlinks.forEach(function(link) {
    link.addEventListener('click',function() {
        navbar.classList.remove('show');
    });
});

// auto-update year in footer
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();