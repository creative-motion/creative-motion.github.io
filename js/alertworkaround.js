/*
	God please forgive my sins
*/

const oldAlert = window.alert;

window.alert = () => {}

setTimeout(() => {
	window.alert = oldAlert
}, 10 * 1000);

