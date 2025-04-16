const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Instagram link
const instagramLink = "https://www.instagram.com/.only_sam?igsh=MWNoY3ZmZnpzdzN1";

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', (event) => {
		// If the menu item is for Instagram, redirect to the Instagram page
		if (event.target.getAttribute('href') === '#instagram') {
			window.location.href = instagramLink;
		} else {
			// Toggle mobile menu visibility when any other menu item is clicked
			hamburger.classList.toggle('active');
			mobile_menu.classList.toggle('active');
		}
	});
});
