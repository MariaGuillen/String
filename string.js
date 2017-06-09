var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow>18) {
	greeting = "It's Sarah's dinner";
} else if (hourNow>12) {
	greeting = "It's Sarah's lunch!";
} else if (hourNow>0) {
	greeting = "It's Sarah's breakfast!";
} else {
	greeting = "It's Sarah's snak!";
}

document.write('<h2>'+greeting+'</h2>');