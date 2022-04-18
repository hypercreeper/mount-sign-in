setInterval(function() {
	if(document.getElementById("confirmPassword").value == document.getElementById("password").value) {
		document.getElementById("pwdnomatch").hidden = true;
	}
	else {
		document.getElementById("pwdnomatch").hidden = false;
	}
	// console.log(document.getElementById("confirmPassword").value + "==" + document.getElementById("password").value);
},1);

var path = {};
function createAccount() {
	document.getElementById("loading").hidden = false; 
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var bday = document.getElementById("bday").value;
	var username = document.getElementById("username").value;
	var pfp = document.getElementById("pfppreview").src;
	var userId = Math.round(Math.random()*1000000000000000);
	executewud(name, email, password, bday, username, pfp, userId);
}
function openfile(file) {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.addEventListener("load", function () {
		document.getElementById("pfppreview").src = this.result;
    });
}