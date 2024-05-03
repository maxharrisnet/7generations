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

// Team Modal

// Overlay
var overlay = document.getElementById("overlay");


// Open modal
var teamMembers = document.querySelectorAll(".person");
teamMembers.forEach(member => {
	member.addEventListener("click", function () {
		var modalId = member.getAttribute("data-modal");
		var modal = document.getElementById(modalId);
		var header = document.getElementById("header");
		overlay.classList.remove("hidden");
		modal.classList.remove("hidden");
		document.body.classList.add("fixed");
		header.classList.add("send-back");
	});
});

// close modal
const closeModal = function () {
	const modals = document.querySelectorAll(".modal");
	modals.forEach(modal => {
		modal.classList.add("hidden");
	});
	overlay.classList.add("hidden");
	document.body.classList.remove("fixed");
};

var closeBtn = document.querySelectorAll(".close-btn");
closeBtn.forEach(btn => {
	btn.addEventListener("click", closeModal);
});

if (overlay) {
	overlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		const modals = document.querySelectorAll(".modal");
		modals.forEach(modal => {
			if (!modal.classList.contains("hidden")) {
				closeModal();
			}
		});
	}
});
