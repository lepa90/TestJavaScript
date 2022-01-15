// Kamil Przylepa
function init() {
	console.log("ready");
}
function przyklad_001() {
    document.getElementById("div_001").style.color = "#BE7D37";
}
function przyklad_002() {
    document.getElementById("div_001").style.margin = "10px";
    document.getElementById("div_001").style.padding = "50px";
    document.getElementById("div_001").style.color = "red";
}
function przyklad_003a(){
    document.getElementById("div_001").style.display = "none";
}
function przyklad_003b(){
    document.getElementById("div_001").style.display = "block";
}
function przyklad_004(){
    alert(document.getElementById("name").value);
}