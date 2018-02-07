 var mangImg = ["img_fjords_wide.jpg","img_mountains_wide.jpg","img_nature_wide (1).jpg","img_snow_wide.jpg","img_woods_wide.jpg"];
		var i = 0;
		function doianh(){
			i++;
			if (i==5){
				i=0;
			}
			document.getElementById("anh").src="anhdep/"+mangImg[i];
			changerColor(i);
		}
		var slide = setInterval(doianh,3000);

		function stop(){
			clearInterval(slide);
		}
		function start(){
			slide = setInterval(doianh,3000);
		}
		function prev(){
			i--;
			if (i<0){
				i=4;
			}
			document.getElementById("anh").src = "anhdep/"+mangImg[i]
		}
		function next(){
			i++;
			if (i==5){
				i=0;
			}
			document.getElementById("anh").src = "anhdep/"+mangImg[i]
		}
		
		function changerindex(a){
			clearColor();
			document.getElementsByClassName("fa-circle-o")[a].style.color="blue";
			document.getElementById("anh").src = "anhdep/"+mangImg[a];
			i=a;
		}
		function changerColor(i){
			clearColor();
			document.getElementsByClassName("fa-circle-o")[i].style.color = "blue";
		}
		function clearColor(i){
			for (var i = 0; i < mangImg.length; i++) {
				document.getElementsByClassName("fa-circle-o")[i].style.color = "#000";
			}
		}


//fixed navbar

$(window).scroll(function(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		 $("#header").addClass("header").css("background","rgba(5, 52, 99, 0.85)").css("padding","0").css("box-shadow","0");

		}else{
			$("#header").removeClass("header")
		}
});
//left-noidung
var manganh=["19310160702_9335889665_m.jpg","19310160562_b4b9020c9b_m.jpg","19128582958_ebd32b3a01_m.jpg"];
var j=0;
function doianh1(){
	j++;
	if(i==3){
		i=0;
	}
	document.getElementById("anh1").src="img/"+manganh[i];
};
var slide1 = setInterval(doianh1,2000);

//---------back-to-top
window.onscroll = function() {myFunction()};

function myFunction() {
    
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
       $("#back-to-top").fadeIn(500);
    } else {
        $("#back-to-top").fadeOut(500);
    }
}
$("#back-to-top").click(function(){
	$("html, body").animate({scrollTop:0},750);
});

// thayanh va chuyenanh
var manganh2=["12-330x402.jpg","21-330x402.jpg","23-330x402.jpg"];
var manganh3=["11-330x402.jpg","24-330x402.jpg","19-330x402.jpg"];
var manganh4=["14-330x402.jpg","20-330x402.jpg","1-330x402.jpg"];
var manganh5=["1-330x402.jpg","12-330x402.jpg","6-330x402.jpg"];
var m=0;
function doianh2(){
	m++;
	if(i==3){
		i=0;
	}
	document.getElementById("anh2").src="img/"+manganh2[i];
	document.getElementById("anh3").src="img/"+manganh3[i];
	document.getElementById("anh4").src="img/"+manganh4[i];
	document.getElementById("anh5").src="img/"+manganh5[i];
};
var slide2 = setInterval(doianh2,3000);




var manganh6=["19-330x402.jpg","16-330x402.jpg","15-330x402.jpg"];
var manganh7=["20-330x402.jpg","8-330x402.jpg","23-330x402.jpg"];
var manganh8=["21-330x402.jpg","1-330x402.jpg","10-330x402.jpg"];
var manganh9=["23-330x402.jpg","6-330x402.jpg","3-330x402.jpg"];

function doianh6(){
	m++;
	if(i==3){
		i=0;
	}
	document.getElementById("anh6").src="img/"+manganh6[i];
	document.getElementById("anh7").src="img/"+manganh7[i];
	document.getElementById("anh8").src="img/"+manganh8[i];
	document.getElementById("anh9").src="img/"+manganh9[i];
};
var slide6 = setInterval(doianh6,3000);
function giam1(){
			i--;
			if (i<0){
				i=2;
			}
			document.getElementById("anh2").src="img/"+manganh2[i];
			document.getElementById("anh3").src="img/"+manganh3[i];
			document.getElementById("anh4").src="img/"+manganh4[i];
			document.getElementById("anh5").src="img/"+manganh5[i];
			document.getElementById("anh6").src="img/"+manganh6[i];
			document.getElementById("anh7").src="img/"+manganh7[i];
			document.getElementById("anh8").src="img/"+manganh8[i];
			document.getElementById("anh9").src="img/"+manganh9[i];
		}
		function tang1(){
			i++;
			if (i==3){
				i=0;
			}
			document.getElementById("anh2").src="img/"+manganh2[i];
			document.getElementById("anh3").src="img/"+manganh3[i];
			document.getElementById("anh4").src="img/"+manganh4[i];
			document.getElementById("anh5").src="img/"+manganh5[i];
			document.getElementById("anh6").src="img/"+manganh6[i];
			document.getElementById("anh7").src="img/"+manganh7[i];
			document.getElementById("anh8").src="img/"+manganh8[i];
			document.getElementById("anh9").src="img/"+manganh9[i];
		}
		function stop1(){
			clearInterval(slide2);
			clearInterval(slide6);
		}
		function start1(){	
			slide2 = setInterval(doianh2,3000);
			slide6 = setInterval(doianh6,3000);
		}
		function thayanh1(){
			document.getElementById("anh2").src="img/"+manganh2[1];
		}	
		
		function thayanh2(){
			document.getElementById("anh2").src="img/"+manganh2[0];
		}
		function thayanh3(){
			document.getElementById("anh3").src="img/"+manganh3[1];
		}	
		
		function thayanh4(){
			document.getElementById("anh3").src="img/"+manganh3[0];
		}
		function thayanh5(){
			document.getElementById("anh4").src="img/"+manganh4[1];
		}	
		
		function thayanh6(){
			document.getElementById("anh4").src="img/"+manganh4[0];
		}	
		function thayanh7(){
			document.getElementById("anh5").src="img/"+manganh5[1];
		}	
		
		function thayanh8(){
			document.getElementById("anh5").src="img/"+manganh5[0];
		}
		function thayanh9(){
			document.getElementById("anh6").src="img/"+manganh6[1];
		}	
		
		function thayanh10(){
			document.getElementById("anh6").src="img/"+manganh6[0];
		}
		function thayanh11(){
			document.getElementById("anh7").src="img/"+manganh7[1];
		}	
		
		function thayanh12(){
			document.getElementById("anh7").src="img/"+manganh7[0];
		}
		function thayanh13(){
			document.getElementById("anh8").src="img/"+manganh8[1];
		}	
		
		function thayanh14(){
			document.getElementById("anh8").src="img/"+manganh8[0];
		}					
		function thayanh15(){
			document.getElementById("anh9").src="img/"+manganh9[1];
		}	
		
		function thayanh16(){
			document.getElementById("anh9").src="img/"+manganh9[0];
		}					
							
		

		
//banner
