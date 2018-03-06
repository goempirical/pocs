var api = function(){
	
	async function getFirstName(){
		console.log("here we go");
		let response = await fetch('http://jsonplaceholder.typicode.com/users');
		let myJson = await response.json();
		console.log("and then: " + myJson[0].name);
		return myJson[0].name;
	}
	
	return {
        getFirstName: getFirstName
   }

}();

