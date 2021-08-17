
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
		if(link.style.animation) {
			link.style.animation = '';
		}
		else {
			link.style.animation = 'navLinkFade 0.5s ease fowards $(index / 7 + 1.5)s';
		}
    });
}

function validate(input) {

	console.log("reached here");
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
	if (input.value.match(validRegex)) {
  
	  alert("Valid email address!");
  
	  document.form1.text1.focus();
  
	  return true;
  
	} else {
  
	  alert("Invalid email address!");
  
	  document.form1.text1.focus();
  
	  return false;
  
	}
  
  }


var navbar = document.getElementById("navbar");

window.addEventListener('scroll', (event) => {
	navbar.classList.add("whiten");
	if(window.pageYOffset == 0) {
		navbar.classList.remove("whiten");
	}
})



    let span = document.getElementsByTagName('span');
	let card = document.getElementsByClassName('card');
	let product_page = Math.ceil(card.length/4);
	let l = 0;
    let movePer = 395;
	let maxMove = 2000;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 900px)");
	if (mob_view.matches)
	 {
	 	movePer = 385;
	 	maxMove = 2000;
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



const slider = document.querySelector('.section');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


function ShowMoreBlogs() {
	var hiddenblog = document.getElementsByClassName("hiddenblog");
	hiddenblog.classList.remove('hide');
}

navSlide();