// const navSlide = () => {
//     const hamburger = document.querySelector('.hamburger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelector('.nav-links li');

//     hamburger.addEventListener('click', ()=> {
//         nav.classList.toggle('nav-active');
//     });

//     navLinks.forEach((link, index) => {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
//     });
// }

console.log("hellooo");

// $(window).scroll (function() {
//     if($(document).scrollTop() >= 50)
//     {
//         $('.navbar').addClass('.background');
//     }
//     else 
//     {
//         $('.navbar').removeClass('.background');
//     }
// }); 


    let span = document.getElementsByTagName('span');
	let card = document.getElementsByClassName('card');
	let product_page = Math.ceil(card.length/4);
	let l = 0;
    let movePer = 395;
	let maxMove = 2000;
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
			i.style.left = '-' + l + 'px';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of card){
			if (product_page>1){
				i.style.left = '-' + l + 'px';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}

	// $('section').keydown(function(e) {
	// 	if (e.which == '37') {
	// 		left_mover();
	// 	}
	// });

	// $('section').keydown(function(e) {
	// 	if (e.which == '39') {
	// 		right_mover();
	// 	}
	// });


// navSlide();