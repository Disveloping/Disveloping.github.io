document.getElementById("animp").addEventListener("click", animProfile)
document.getElementById("scrp").addEventListener("click", scrpProfile)

function animProfile(){
	console.log("animating on")
	window.open("animator.html","_self")
}
function scrpProfile(){
	console.log("scripting on")
	window.open("scripter.html","_self")
}
