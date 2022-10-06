function init(){
	var roll = document.getElementsByClassName("input")[0].value;
	var code = document.getElementsByClassName("input")[1].value;
	if (roll === "21AGEO049497"&&code==="49497"){
		display();
	}else{
		window.alert("Invalid Code");
	}
}function display(){
	document.getElementsByClassName("pdf")[0].style.minHeight = "100%";
	document.getElementsByClassName("pdf")[0].style.minWidth = "100%";
	document.getElementsByClassName("pdf")[0].style.width = "100%";
	document.getElementsByClassName("pdf")[0].style.height = "100%";
	document.getElementsByClassName("pdf")[0].style.visibility = "visible"
	document.getElementsByClassName("pdf")[0].src = "https://drive.google.com/file/d/1bLBb0BgC8n25VJNplQOnMbJgYiWJkS51/preview";

	document.getElementsByClassName("main")[0].style.visibility = "hidden";
	document.getElementsByClassName("main")[0].style.height = "0%";
	document.getElementsByClassName("main")[0].style.width = "0%";
}