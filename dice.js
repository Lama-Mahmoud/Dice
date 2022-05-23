
function random(){
	img=document.getElementsByTagName("img");
	var a=Math.ceil(Math.random()*5)+1;
	var b=Math.ceil(Math.random()*5)+1;
	
	img[0].src="images/dice"+a+".png";
	img[1].src="images/dice"+b+".png";
	
	head=document.getElementsByTagName("h1");
	if(a>b)
		head[0].innerHTML=String.fromCodePoint(0x1F6A9)+" Player1 won";
	else if(a<b)
		head[0].innerHTML=String.fromCodePoint(0x1F6A9)+"  Player2 won";
	else
		head[0].innerHTML=String.fromCodePoint(0x1F6A9)+"  Tie Game";
}


window.onload = function() {
	
	var firstTime = localStorage.getItem("first_time");
	if(!firstTime) {
		// first time loaded!
		localStorage.setItem("first_time","1");
	}
	
    else{
		localStorage.setItem("first_time","1");
        random();
    }
}
