'use strict';

/* Navbar Area Start */

let navBtn = document.querySelector('.home-icon');
let navLinkArea = document.querySelector('.nav-links-area');
let hamburger = document.querySelectorAll('.ham-icon');
let cancelBtn = document.querySelector('.cancel-icon');


navBtn.addEventListener('click', () => {
    navLinkArea.classList.add('nav-links-act');
    navBtn.classList.remove('home-icon');
    cancelBtn.classList.remove('ham-act');
})

cancelBtn.addEventListener('click', () => {
    navLinkArea.classList.remove('nav-links-act');
    navBtn.classList.add('home-icon');
    cancelBtn.classList.add('ham-act');
})

/* Navbar Area End */


/* Banner Slider Area Start */

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        updateSlide();
    });
});

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
    dots.forEach((dot, index) => {
        dot.classList.remove('in');
        if (index === slideIndex) dot.classList.add('in');
    });
}

updateSlide();

// Auto-slide
setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    updateSlide();
}, 5000);

// /* Banner Slider Area End */

/* Ongoing Project Slider Area Start */

let proSlideIndex = 0;
let projectImgSlide = document.querySelectorAll('.project-img-area');

document.querySelector('.left-btn').addEventListener('click', () => {
    proSlideIndex--;
    if (proSlideIndex < 0) proSlideIndex = projectImgSlide.length - 1;
    projectSlide();
});

document.querySelector('.right-btn').addEventListener('click', () => {
    proSlideIndex++;
    if (proSlideIndex >= projectImgSlide.length) proSlideIndex = 0;
    projectSlide();
});

function projectSlide() {
    projectImgSlide.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - proSlideIndex) * 100}%)`;
    })
}

projectSlide();

// Auto-slide
setInterval(() => {
    proSlideIndex++;
    if (proSlideIndex >= projectImgSlide.length) proSlideIndex = 0;
    projectSlide();
}, 5000);

let projectDetailsIndex = 0;
let projectDetailsSilde = document.querySelectorAll('.project-details');

document.querySelector('.left-btn').addEventListener('click', () => {
    projectDetailsIndex--;
    if (projectDetailsIndex < 0) projectDetailsIndex = projectDetailsSilde.length - 1;
    detailSlide();
});

document.querySelector('.right-btn').addEventListener('click', () => {
    projectDetailsIndex++;
    if (projectDetailsIndex >= projectDetailsSilde.length) projectDetailsIndex = 0;
    detailSlide();
});

function detailSlide() {
    projectDetailsSilde.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - projectDetailsIndex) * 100}%)`;
    })
}

detailSlide();

// Auto-slide
setInterval(() => {
    projectDetailsIndex++;
    if (projectDetailsIndex >= projectDetailsSilde.length) projectDetailsIndex = 0;
    detailSlide();
}, 5000);

/* Ongoing Project Slider Area End */

/* Completed Projects Area Start */

let imgSlideIndex = 0;
let imgSlide = document.querySelectorAll('.completed-projects');

function completeProject() {
    imgSlide.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - imgSlideIndex) * 100}%)`;
    })
}

completeProject()

// Auto-slide
setInterval(() => {
    imgSlideIndex++;
    if (imgSlideIndex >= imgSlide.length) imgSlideIndex = 0;
    completeProject();
}, 5000);

/* Completed Projects Area End */

/* Testimonial Area Start */

let testSlideIndex = 0;
let testimonialSlide = document.querySelectorAll('.cus-testimonial');

document.querySelector('.nav-left-btn').addEventListener('click', () => {
    testSlideIndex--;
    if (testSlideIndex < 0) testSlideIndex = testimonialSlide.length - 1;
    testSlide();
});

document.querySelector('.nav-right-btn').addEventListener('click', () => {
    testSlideIndex++;
    if (testSlideIndex >= testimonialSlide.length) testSlideIndex = 0;
    testSlide();
});

let testSlide = () => {
    testimonialSlide.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - testSlideIndex) * 100}%)`;
    })
}

testSlide()

// Auto-slide
setInterval(() => {
    testSlideIndex++;
    if (testSlideIndex >= testimonialSlide.length) testSlideIndex = 0;
    testSlide();
}, 5000);


/* Testimonial Area End */

/* News/Events Area Start */

let newsSlideIndex = 0;
let newsSlide = document.querySelectorAll('.event-news');

/* function eventSlide() {
    newsSlide.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - newsSlideIndex) * 200}%)`;
        slide.style.transition = `0.25s ease-in-out`;
    })
}

eventSlide()

// Auto-slide
setInterval(() => {
    newsSlideIndex++;
    if (newsSlideIndex >= newsSlide.length) newsSlideIndex = 0;
    eventSlide();
}, 5000); */

/* News/Events Area End */

let abtSection = document.querySelector('.who-we');
let scrollToTop = document.querySelector('.scroll-to-top');

let setTop = abtSection.getBoundingClientRect();

window.addEventListener('scroll', (e) => {
    if (window.scrollY > setTop.top) {
        scrollToTop.classList.add('scroll-act');
    }

    else {
        scrollToTop.classList.remove('scroll-act');
    }
})


let navLink=document.querySelectorAll('.links');


navLinkArea


navLink.forEach((link)=>{
    link.addEventListener('click', ()=> {
        navLinkArea.classList.remove('nav-links-act');
        cancelBtn.classList.add('ham-act');
        navBtn.classList.add('home-icon');
    })
})