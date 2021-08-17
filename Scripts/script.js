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

    let rightA = document.getElementsByClassName('rightA');
    let leftA = document.getElementsByClassName('leftA');
	let card = document.getElementsByClassName('card');
	let product_page = Math.ceil(card.length/4);
	let l = 0;
    let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (card == 1){l = 0; }
		for(const i of card)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of card){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	rightA.onclick = ()=>{right_mover();}
	leftA.onclick = ()=>{left_mover();}


navSlide();