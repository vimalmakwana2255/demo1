// navbar scroll

window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (this.window.scrollY > 20) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')

    }
})

// animation 

const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000
}

ScrollReveal().reveal('.left h1', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.left p', {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal('.main_btn', {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal('.right img', {
    ...scrollRevealOption,
    origin:'right'
});

ScrollReveal().reveal('.top_heading', {
    ...scrollRevealOption,
    delay:500
});

ScrollReveal().reveal('.heading', {
    ...scrollRevealOption,
    delay:500
});
ScrollReveal().reveal('.para', {
    ...scrollRevealOption,
    delay:500
});

ScrollReveal().reveal('.box', {
    ...scrollRevealOption,
    delay:1000
});

ScrollReveal().reveal('.right_box li', {
    ...scrollRevealOption,
    delay:500
});

ScrollReveal().reveal('.box1 .boxes', {
    ...scrollRevealOption,
    delay:500
});

ScrollReveal().reveal('.footer_col', {
    ...scrollRevealOption,
    delay:500
});






