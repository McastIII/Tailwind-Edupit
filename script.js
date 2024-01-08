// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__wrapper ul");


toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
});

//drop down
const head = document.querySelectorAll(".header__wrapper ul li a");
head.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const gutter = document.querySelector(".header__wrapper.nav");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300) {
    gutter.classList.add("top");
  } else {
    gutter.classList.remove("top");
  }
});

// Get the button
let mybutton = document.getElementById("roll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}