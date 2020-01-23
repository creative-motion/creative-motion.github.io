"use strict";

function validateForm(form) {
	const name = form.name.value.trim(),
		email = form.email.value.trim(),
		message = form.message.value.trim()

	if(message === "") {
		alert("Mesajul nu poate fi gol")
		return false
	} else if(message.length > 1000) {
		alert("Mesajul are mai mult de 1000 de caractere. Încearca să-l faci mai scurt. Dacă trebuie neapărat să trimiți un mesaj așa de mare încearcă să ne dai un mail")
		return false
	} else {
		return true
	}
}

function submit(captcha) {
	const form = document.querySelector("body.langRo #contact form.ro, body.langEn #contact form.en")
	if(!validateForm(form)) return

	const captchaField = document.createElement("input")
	captchaField.type = "hidden"
	captchaField.name = "captcha"
	captchaField.value = captcha
	form.appendChild(captchaField)

	form.submit()
}

