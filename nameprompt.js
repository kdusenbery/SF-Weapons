function namePrompt () {
	 
var person = prompt("Hello! What is your name?");
	
	if (person != null) {
        document.getElementById("name1").innerHTML =
        ("Hello " + person + "! Thank you for visiting our web site!");
	}
}