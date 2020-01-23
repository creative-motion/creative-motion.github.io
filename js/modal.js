"use strict";

const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");

modalBackdrop.addEventListener("click", trigger_back, false);
window.addEventListener("keydown", (e => e.keyCode === 27 && trigger_back()), false);
	
function modal_display(text) {
	modalContent.innerText = text;
	modal_show();
}

function modal_display_elem(elem) {
	modalContent.innerHTML = elem.outerHTML;
	modal_show();
}

function modal_show() {
	modal.classList.add("active");
	history.pushState(null, null, window.location.pathname);
}

function trigger_back() {
	if(modal.classList.contains("active"))
		history.back();
}

function modal_hide(type) {
	modal.classList.remove("active");
}

window.addEventListener("popstate", function(e) {
	if(modal.classList.contains("active")) {
		modal_hide();
	}
}, false);

