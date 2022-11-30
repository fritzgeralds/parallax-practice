const navLinks = document.querySelectorAll(".nav-item, navbar-brand");

const menuToggle = document.getElementById("navbarContent");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
	l.addEventListener("click", () => {
		bsCollapse.toggle();
	});
});
