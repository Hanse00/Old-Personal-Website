var canvas;
var ctx;

var squares = [];

var time_left;

var interval;

//User variables - only touch here for setting the timer
var width = 4;
var height = 2;

var end_time = 1409277600;
//Now don't touch anything, unless you want to learn of course ;)

var square_count = width * height;

function setup() {
	canvas  = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	for (i = 0; i < height; i++) {
		for (j = 0; j < width; j++) {
			squares[(i * width) + j] = new Square(j, i);
		}
	}
	
	startTimer();
}

function startTimer() {
	update();
	interval = setInterval(function(){update()}, 1000);
}

function update() {
	updateTimer();
	if (time_left <= 0) {
		stopTimer();
	}
	draw();
}

function updateTimer() {
	var current_date = new Date();
	var current_time = Math.floor(current_date.getTime() / 1000);
	
	time_left = end_time - current_time;
}

function draw() {
	ctx.canvas.width  = innerWidth;
	ctx.canvas.height = innerHeight;
	
	for (i = 0; i < squares.length; i++) {
		var shift_index = square_count - time_left.toString().length;
		squares[i].setTime(time_left.toString().charAt(i - shift_index));
		squares[i].draw();
	}
}

function stopTimer() {
	clearInterval(interval);
}