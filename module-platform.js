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
  
  var password;
  var Details;
  var SelectedUser;
  const dbRefRoot = ref(getDatabase());

  
  
  
  
  
  function receiveData() {
    const dbRef = ref(getDatabase());
	get(child(dbRef, '/')).then((snapshot) => {
		if (snapshot.exists()) {
			console.log("Database Read");
			console.log(snapshot.val());
			users = Object.keys(snapshot.val());
			details = snapshot.val();
		} else {
			console.warn("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
	setTimeout(function() {
	for(var i = 0; i <= users.length; i++) {
		if(document.getElementById("email").value.replace('.','_') == users[i]) {
			document.getElementById("email").style.backgroundColor = "#99ff99";
			console.warn("Email Matched (" + document.getElementById("email").value + ")");
			console.error("this shouldn't execute  twice");
			const dbRef = ref(getDatabase());
			SelectedUser = users[i];
	get(child(dbRef, '/' + users[i])).then((snapshot) => {
		if (snapshot.exists()) {
			console.log("Database Read");
			console.log(snapshot.val());
			password = snapshot.val();
		} else {
			console.warn("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
			setTimeout(function() {
			if(document.getElementById("password").value == password["Password"]) {
				console.warn("Password Matched (" + document.getElementById("password").value + ")");
				location.hash = 'loginsuccess';
				document.getElementById("loading").hidden = true;
				location.reload();
				console.log(SelectedUser);
				
			}
			else {
				console.error("Password (" + document.getElementById("Password").value + ") Is incorrect");
				document.getElementById("btn").style.BackgroundColor = "red";
			}
			}, 4000);
		}
		else {
			console.error("Email (" + document.getElementById("email").value + ") Not found");
		}
	}
	}, 2000);
}
window.executewud = function(){
      receiveData();
    }
	console.warn(SelectedUser);
var interval = setInterval(sendCompletionMessage, 1);
function sendCompletionMessage() {
	if(signedin = true) {
		clearInterval(interval);
		var Details;
		get(child(dbRefRoot, '/' + this.user)).then((snapshot) => {
			if (snapshot.exists()) {
				console.log("Database Read");
				console.log(snapshot.val());
				Details = snapshot.val();
				SignedIn(Details);
			} else {
				console.warn("No data available");
			}
		}).catch((error) => {
			console.error(error);
		});
	}
}

