
const cover = document.querySelector(".cover");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menuicon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	cover.classList.toggle('active');
	menu.classList.toggle('active');
	nav.classList.toggle('active');
});