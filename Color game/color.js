var color=[];
var n = 6;
var won = false;
var squares = document.querySelectorAll(".cl-lg-4");
var easy = document.querySelector("#e");
easy.addEventListener("click",function(){
	n = 3;
})
var hard = document.querySelector("#h");
hard.addEventListener("click",function(){
	n = 6;
})
var reset = document.querySelector("#r");
for(var i = 0;i<n;i++){
	color[i]=createcolor();
}
var scolor = selcolor(); 
for (var i=0;i<n;i++)
{
	squares[i].style.backgroundColor = color[i];
	squares[i].addEventListener("click",function(){
		if(won == false){
		if(scolor == this.style.backgroundColor)
		{
			won = true;
			document.querySelector("#message").innerHTML = "Correct!"; 
			document.querySelector("#message").classList.remove("wrongtext");
			document.querySelector("#message").classList.add("correcttext");
			document.querySelector("p").style.backgroundColor = scolor;
			easy.style.backgroundColor = scolor;
			hard.style.backgroundColor = scolor;
			reset.style.backgroundColor = scolor;
			easy.style.border = "0px solid";
			hard.style.border = "0px solid";
			reset.style.border = "0px solid";
			for(var i = 0;i<6;i++){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = scolor;
				squares[i].style.transition = "all 0.5s";
			}
			document.querySelector("h1").style.backgroundColor = scolor;
		}
		else{
		document.querySelector("#message").innerHTML = "Wrong!";
		document.querySelector("#message").classList.add("wrongtext");
		this.style.backgroundColor = "black";
		this.style.transition = "all 0.5s"
	}}
	})
}

function createcolor(){
 var r = Math.floor(Math.random() * 255);
 var g = Math.floor(Math.random() * 255);
 var b = Math.floor(Math.random() * 255);
 var rgb = String("rgb("+r+", "+g+", "+b+")");
return rgb;
}

function selcolor(){
	return color[Math.floor(Math.random() * n)];
}
var rgb = document.querySelector("#rgb");
rgb.innerHTML = scolor;
