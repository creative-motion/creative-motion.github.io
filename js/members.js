"use strict"

const memberCards = document.querySelectorAll(".member")
for(let card of memberCards) {
	card.addEventListener("click", (function(e){
		if(!this.classList.contains("expanded")) {
			// Collapse all other member cards
			for(let othercard of memberCards) {
				collapse(othercard)
			}
			expand(this)

		}
	}).bind(card), true)
}

function FLIP(member, expand) {
	if(member.classList.contains("expanded") == expand) return

	const first = member.getBoundingClientRect()
	if(expand) {
		member.classList.add("expanded")
		//member.scrollIntoView()
	} else {
		member.classList.remove("expanded")
	}
	const last = member.getBoundingClientRect()
	

	const invertX = first.left - last.left,
		invertY = first.top - last.top,
		invertW = first.width / last.width,
		invertH = first.height / last.height

	member.style.transform = `translate(${invertX}px, ${invertY}px) scale(${invertW}, ${invertH})`
	requestAnimationFrame(function() {
		member.classList.add("in-transition")
		member.style.transform = ""
	})
	member.addEventListener("transitionend", function() {
		member.classList.remove("in-transition")
	})
}

function collapse(member) {
	FLIP(member, false)
}

function expand(member) {
	FLIP(member, true)
}
