
  var emailcheck;
  var passwordcheck;
  var users;
  var user;
  var details;
  var popup;
  	var name;
	var email;
	var password;
	var bday;
	var username;
	var pfp;
	var userId;
  

let hash = location.hash;
var m = document.getElementsByClassName("m-signin");
document.write(`
<style>
.m-signin {
	background-color: white;
	border-style: solid;
	border-width: 0.5px;
	border-color: rgba(0, 0, 255, 0.7);
	height: 36px;
	width: 160px;
	transition-duration: 0.5s;
}
.m-signin:hover {
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 255, 0.7);
}
.m-signin:active {
	transition-duration: 0.2s;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 230, 1);
	background-color: lightgray;
}
</style>`);
var d = document.createElement("div");
var img = document.createElement("img");
var p = document.createElement("p");
var css = document.createElement("link");
var css2 = document.createElement("link");
var css3 = document.createElement("link");
css3.rel = "preconnect";
css3.href = "https://fonts.googleapis.com";
css2.rel = "preconnect";
css2.href = "https://fonts.gstatic.com";
css2.crossorigin = true;
css.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap";
css.rel = "stylesheet";
img.src = "icon.png";
img.style = "float: left; height: 20px; width: 20px; margin-top: -1px; margin-left: 2px;";
p.style = "margin-top: 8px; font-weight: 700;";
p.innerHTML = "Sign in with Mount";
if(hash.replace('#','') == "") {
d.appendChild(img);
d.appendChild(p);
document.head.appendChild(css3);
document.head.appendChild(css2);
document.head.appendChild(css);
m[0].style = "font-family: 'Fredoka', sans-serif;";
m[0].appendChild(d);
m[0].onclick = function() {
	popup = window.open(location.href + "#loginprompt", "Sign in to Mount","width=600,height=500,left=300,top=50");
}
}
else if(hash.replace('#','') == "loginprompt") {
	m[0].remove();
	document.write(`<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap" rel="stylesheet">`);
	document.write("<h1 style='font-family: Fredoka, sans-serif; text-align: center;'>Sign in to <br><code>" + document.referrer + "</code><br> using Mount</h1>");
	document.write("<br>");
	document.write("<input type='email' id='email' placeholder='Email' style='font-family: Fredoka, sans-serif; position: absolute; height: 40px; font-size: 26px; font-family: Fredoka; width: 400px; left: 100px'>");
	document.write("<input type='password' id='password' placeholder='Password' style='font-family: Fredoka, sans-serif; position: absolute; height: 40px; font-size: 26px; font-family: Fredoka; width: 400px; top: 250px; left: 100px'>");
	document.write("<button onclick='checkData()' id='btn' style='font-family: Fredoka, sans-serif; position: absolute; height: 40px; font-size: 26px; font-family: Fredoka; width: 200px; top: 350px; left: 200px'>Sign In</button>");
	document.write('<img id="loading" src="Loading.gif" style="position: fixed; top: 35%; left: 45%; z-index: 1;" hidden></img>');
}
else if(hash.replace('#','') == "loginsuccess") {
	m[0].remove();
	document.write("Please wait");
	window.close();
	m[0].innerHTML = "Signed in";
	signedin = true;
	// Set last login time to now and the last login site to this site. The script will check for last login and on what site to confirm login
	// ⚠️WARNING THIS IS A VERY BIG SECURITY HAZARD MAKE SURE TO COME UP WITH A NEW SIGN IN SYSTEM TO ENSURE SECURITY AND SAFETY⚠️
}
function checkData() {
	document.getElementById("btn").disabled = true;
	document.getElementById("loading").hidden = false;
	executewud();
}
window.addEventListener('message', function(e) {
	console.log("Message Recieved");
	m[0].innerHTML = 'received message:  ' + e.data;
}, false);