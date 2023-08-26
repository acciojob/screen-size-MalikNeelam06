//your JS code here. If required.
let button1=document.getElementById("open");
let button2=document.getElementById("newwindow");
let newwindow1;
button1.addEventListener("click",()=>{
	newwindow1=window.open("","newwindow","width=1000,height=200");
});
button2.addEventListener("click",()=>{
	newwindow1.resizeBy(600,359);
	newwindow1.focus();
});