const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    });
}

$(window).scroll (function() {
    if($(document).scrollTop() >= 50)
    {
        $('.navbar').addClass('.background');
    }
    else 
    {
        $('.navbar').removeClass('.background');
    }
}); 


navSlide();