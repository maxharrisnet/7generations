// JavaScript to create a continuous scrolling marquee effect
const banners = document.querySelectorAll(".hero-banner");

banners.forEach(banner => {
	const listItems = banner.querySelectorAll("li");
	let delay = 0;

	listItems.forEach((item, index) => {
		item.style.animation = `marquee 10s linear ${delay}s infinite`;
		item.style.opacity = 1;
		delay += 2;
	});
});
