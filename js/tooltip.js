document.addEventListener("DOMContentLoaded", () => {
	Array.from(document.querySelectorAll("[data-copy2clipboard]")).map(elem => {
		elem.addEventListener("click", (ev) => {
			// TODO: de facut sa mearga cu limba selectata
			prompt("copy to clipboard / copiaza la clipboard", elem.getAttribute("data-copy2clipboard"));
			ev.preventDefault();
		});
	});
});

