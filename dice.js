
function random(){
	img=document.getElementsByTagName("img");
	var a=Math.ceil(Math.random()*5)+1;
	var b=Math.ceil(Math.random()*6)+1;
	img[0].src="images/dice"+a+".png";
	img[1].src="images/dice"+b+".png";
	
}


window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        rand();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}