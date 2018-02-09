String.prototype.startsWith = function(needle)
{
    return(this.indexOf(needle) == 0);
};

String.prototype.contains = function(it) {
	return this.indexOf(it) != -1; 
};

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

$( document ).ajaxError(function(event, jqxhr, settings, thrownError) {
	if(jqxhr.status == 401){
    	sessionStorage.removeItem("tokenData");
		window.location.replace("/app/");
	} 
});

var HelperFunctions = {
    redirectToLogin: function(){
    	sessionStorage.removeItem("tokenData");
    	window.location.replace("/app/");
    }
};