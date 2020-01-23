document.addEventListener("DOMContentLoaded", () => {
	Array.from(document.querySelectorAll("a[data-smoothscroll]")).map(
		function(link) {
			link.addEventListener("click", smoothscroll, false)
		}
	)

	function smoothscroll(e) {
		let link = e.target
		while(link.nodeName !== "A") link = link.parentElement

		document.querySelector(link.hash).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
		e.preventDefault()
	}
}, false)
