// Hamburger Menu
function toggleMenu() {
	var nav = document.getElementById("mobile-nav");
	if (nav.style.display === "none") {
		nav.style.display = "flex";
	} else {
		nav.style.display = "none";
	}
}

// Scrolling Banner
const banner = document.querySelector(".hero-banner");
const listItem = banner.querySelector("li");
const totalWidth = banner.offsetWidth;

// Set a constant speed for the marquee animation
const speed = 40; // pixels per second

// Calculate the animation duration based on the total width and speed
const duration = totalWidth / speed;

// Apply the marquee animation to the listItem element
listItem.style.animation = `marquee ${duration}s linear infinite`;

// Make the listItem element fully opaque (visible)
listItem.style.opacity = 1;

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
