function setup() {
	createCanvas(800, 784);

}

function draw() {

	background(255);
	noStroke();
	fill(238,36,0);
	rect(0,200,300,400);
	fill(28,21,105);
	rect(300,100,400,150);
	stroke(30);
	strokeWeight(random(15,20));
	line(0,200,width,200);
	strokeWeight(random(23,26));
	line(0,100,width,100);
	strokeWeight(random(12,17));
	line(300,0,300,height); 
	line(0,500,width,500);
	strokeWeight(random(20,23));
	line(0,200,width,200);
	strokeWeight(random(10,15));
	line(300,0,300,height); }
