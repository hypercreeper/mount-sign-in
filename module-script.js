  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
  import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDl4Xl3zcFHIHAQI-tD9bxDAP9IlvfPgU8",
    authDomain: "mount-sign-in.firebaseapp.com",
    databaseURL: "https://mount-sign-in-default-rtdb.firebaseio.com",
    projectId: "mount-sign-in",
    storageBucket: "mount-sign-in.appspot.com",
    messagingSenderId: "373131228750",
    appId: "1:373131228750:web:6f94323fece678ba29751f",
    measurementId: "G-177YTKQQ4L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  var emailcheck;
  var passwordcheck;
  var users;
  var user;
  var emails;
  var newpath2
  	var name;
	var email;
	var password;
	var bday;
	var username;
	var pfp;
	var userId;
  
window.addEventListener('popstate', function(){
  if(location.hash == "#success") {
	var p = document.createElement("div");
	var br = document.createElement("br");
	var br2 = document.createElement("br");
	p.style.height = "100%";
	p.style.width = "100%";
	p.style.position = "fixed";
	p.style.backgroundColor = "white";
	p.style.top = "0px";
	p.style.left = "0px";
	p.style.fontFamily = "fredoka";
	p.style.fontSize = "40px";
	p.innerHTML = "<br><br><p style='color: #00ff00;'>Account Created Successfully!</p><br>Email: " + document.getElementById("email").value + "<br>Password: " + document.getElementById("password").value + "<br><button onclick='location.hash = " + '""; location.reload();' + "' style='font-family: fredoka; height: 50px; width: 150px; font-size: 24px; background-color: white; border-color: black; border-radius: 5px; border-style: solid;'>Thanks!</button>"
	p.style.textAlign = "center";
	document.body.appendChild(p);
}
else {
	document.getElementById('h0').scrollIntoView({behavior: 'auto', inline: 'center'});
}
  });
  var prevpath;
  var prevemails;
  
  function executewud(name, email, password, bday, username, pfp, userId) {
		
	}
	  
function sendData(name, email, password, bday, username, pfp, userId) {

  const dbRef = ref(getDatabase());
	get(child(dbRef, '/')).then((snapshot) => {
		if (snapshot.exists()) {
			console.log("Database Read");
			console.log(snapshot.val());
			prevpath = snapshot.val();
		} else {
			console.warn("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	setTimeout(function() {
	var path = {
		Username: username,
		Name: name,
		Email: email,
		Password: password,
		Bday: bday,
		ProfilePicture: pfp,
		UserID: userId
	}
	var newerpath = {};
	newerpath[email.replace('.','_')] = path;
		var newpath = {
		...newerpath,
		...prevpath
	};
	set(ref(database, "/"), newpath);
	console.log("Written");
	document.getElementById("loading").hidden = true; 
	location.hash = "success";
	}, 3000);
}
window.executewud = function(name, email, password, bday, username, pfp, userId){
      sendData(name, email, password, bday, username, pfp, userId);
	  name = name;
	  email = email;
	  password = password;
	  bday = bday;
	  username = username;
	  pfp = pfp;
	  userId = userId;
    }