
window.onload = async function () {
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
    	box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
    });
    
    let firstName = await api.getFirstName();
    console.log("This is : " + firstName );
    
};


function goForIt(){
	var html = "";
	
	// create new XHR instance through the constructor
    var client = new XMLHttpRequest();
    
    client.onreadystatechange = function(e) {
        if (client.readyState == 4 && client.status == 200) {
            console.log("Not sure how we can read from here: " + JSON.stringify(e.responseXML));
        }
    };

    // specify the http request method and the request URLs path
    client.open("GET", "https://jsonplaceholder.typicode.com/users");
    client.send();
}