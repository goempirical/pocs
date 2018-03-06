
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	box.innerHTML = box.innerHTML == "Whoooo" ? "Sample" : "Basic Amazing!!";
    });
    
    goForIt();
    sendRequest();
    
};

async function sendRequest(){
	console.log("here we go");
	let response = await fetch('http://jsonplaceholder.typicode.com/users');
	let myJson = await response.json();
	console.log("and then: " + myJson[0].name);
}


function goForIt(){
	var html = "";
	
	// create new XHR instance through the constructor
    var client = new XMLHttpRequest();
    
    client.onreadystatechange = function(e) {
        if (client.readyState == 4 && client.status == 200) {
            alert(JSON.stringify(e.data));
        }
    };

    // specify the http request method and the request URLs path
    client.open("GET", "https://jsonplaceholder.typicode.com/users");
    client.send();
}