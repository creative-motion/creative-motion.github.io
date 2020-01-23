function setLang(lang) {
	switch(lang) {
		case "ro":
			delete_cookie("lang")
			document.cookie = "lang=ro;path=/"
			document.body.classList.remove("langEn")
			document.body.classList.add("langRo")
			break
		case "en":
			delete_cookie("lang")
			document.cookie = "lang=en;path=/"
			document.body.classList.remove("langRo")
			document.body.classList.add("langEn")
			break
		default:
			throw "Only Romanian and English are supported"
	}
}

/* <3 https://stackoverflow.com/a/5968306 */
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

/* <3 https://stackoverflow.com/a/2144404 */
function delete_cookie( name ) {
  document.cookie = name + '=; Max-Age=-99999999';
}

window.addEventListener("load", () => {
	if(getCookie("lang") === "ro") setLang("ro")
	if(getCookie("lang") === "en") setLang("en")
})

