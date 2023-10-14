const menu = document.getElementById("hamburger");
const btn = document.getElementById("hamburger-btn");
const navBar = document.getElementById("navbar");
let screenWidth = window.innerWidth;

const renderNav = () => {
	navBar.classList.toggle("mobile");

	navBar.style.display = navBar.classList.contains("mobile") ? "block" : "none";
};

btn.addEventListener("click", renderNav);

window.addEventListener(
	"resize",
	debounce(() => {
		screenWidth = window.innerWidth;
		if (screenWidth > 768) {
			navBar.classList.remove("mobile");
			navBar.style.display = "block";
		} else {
			navBar.classList.add("mobile");
		}
	}, 200)
);

// Debounce function
function debounce(func, delay) {
	let timeoutId;
	return function () {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(func, delay);
	};
}
