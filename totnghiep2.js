var anh1=["29-330x402.jpg","44-110x133.jpg","54-330x402.jpg","B1-590x352.jpg","35-110x133.jpg"];
var anh2=["34-330x402.jpg","40-330x402.jpg"];
var anh3=["28-330x402.jpg","52-330x402.jpg"];
var anh4=["10-330x402.jpg","54-330x402.jpg"];
var anh5=["43-330x402.jpg","B1-590x352.jpg"];
var anh6=["41-330x402.jpg","35-110x133.jpg"];
var anh7=["46-330x402.jpg","44-110x133.jpg"];
var anh8=["52-330x402.jpg","29-330x402.jpg"];
function thayanh1(){
	document.getElementById("anh1").src="img/"+anh1[1];
}
function thayanh2(){
	document.getElementById("anh1").src="img/"+anh1[0];
}
function thayanh3(){
	document.getElementById("anh2").src="img/"+anh2[1];
}
function thayanh4(){
	document.getElementById("anh2").src="img/"+anh2[0];
}
function thayanh5(){
	document.getElementById("anh3").src="img/"+anh3[1];
}
function thayanh6(){
	document.getElementById("anh3").src="img/"+anh3[0];
}
function thayanh7(){
	document.getElementById("anh4").src="img/"+anh4[1];
}
function thayanh8(){
	document.getElementById("anh4").src="img/"+anh4[0];
}
function thayanh9(){
    document.getElementById("anh5").src="img/"+anh5[1];
}
function thayanh10(){
    document.getElementById("anh5").src="img/"+anh5[0];
}
function thayanh11(){
    document.getElementById("anh6").src="img/"+anh6[1];
}
function thayanh12(){
    document.getElementById("anh6").src="img/"+anh6[0];
}
function thayanh13(){
    document.getElementById("anh7").src="img/"+anh7[1];
}
function thayanh14(){
    document.getElementById("anh7").src="img/"+anh7[0];
}
function thayanh15(){
    document.getElementById("anh8").src="img/"+anh8[1];
}
function thayanh16(){
    document.getElementById("anh8").src="img/"+anh8[0];
}


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
/*menu*/
 function show_sub_menu(li) {
                    $(li).children("ul").toggle();
                    $(li).children().children("i").toggleClass("fa-sort-desc").toggleClass("fa-sort-asc");
                }

            function show_main_menu() {
                $(".wrapper").toggleClass("wrapper-show");
            }

/*menu*/
function show(){
    $("hien").show("slow");
}