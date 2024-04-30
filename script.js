// JavaScript to scroll in the list items like a marquee
const banners = document.querySelectorAll(".hero-banner");

banners.forEach(banner => {
	const listItems = banner.querySelectorAll("li");
	let index = 0;

	setInterval(() => {
		if (index > 0) {
			listItems[index - 1].style.opacity = 0;
			listItems[index - 1].style.transform = "translateX(-100%)";
		}

		listItems[index].style.opacity = 1;
		listItems[index].style.transform = "translateX(0)";

		index = (index + 1) % listItems.length;
	}, 2000);
});
