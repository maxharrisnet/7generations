// Hamburger Menu
function toggleMenu() {
	var nav = document.getElementById("mobile-nav");
	if (nav.style.display === "none") {
		nav.style.display = "flex";
	} else {
		nav.style.display = "none";
	}
}

// JavaScript to create a continuous scrolling marquee effect
const banners = document.querySelectorAll(".hero-banner");

banners.forEach(banner => {
	const listItems = banner.querySelectorAll("li");
	let totalWidth = 0;

	// Calculate the total width of all list items
	listItems.forEach(item => {
		totalWidth += item.offsetWidth;
	});

	// Set a constant speed for the marquee animation
	const speed = 100; // pixels per second

	// Calculate the animation duration based on the total width and speed
	const duration = totalWidth / speed;

	listItems.forEach(item => {
		item.style.animation = `marquee ${duration}s linear infinite`;
		item.style.opacity = 1;
	});
});
