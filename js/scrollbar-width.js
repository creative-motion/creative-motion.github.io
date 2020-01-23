"use strict"

const scrollDiv = document.createElement("div")
scrollDiv.style.width="100px"
scrollDiv.style.height="100px"
scrollDiv.style.overflow="scroll"
scrollDiv.style.position="absolute"
scrollDiv.style.top="-999px"

document.body.appendChild(scrollDiv)
const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth

document.body.style.setProperty("--scrollbar-width", scrollbarWidth+"px")

document.body.removeChild(scrollDiv)

