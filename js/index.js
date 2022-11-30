const navLinks = document.querySelectorAll(".nav-item, navbar-brand");
const menuToggle = document.getElementById("navbarContent");
navLinks.forEach((l) => {
	l.addEventListener("click", () => {
		new bootstrap.Collapse(menuToggle).toggle();
	});
});
