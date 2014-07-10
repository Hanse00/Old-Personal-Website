function Square(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
}

Square.prototype.setTime = function(time) {
	switch(time){
		case "9":
			this.setColor("hsla(190, 50%, 50%, 1)"); //Light Blue
			break;
		case "8":
			this.setColor("hsla(240, 50%, 50%, 1)"); //Blue
			break;
		case "7":
			this.setColor("hsla(270, 50%, 50%, 1)"); //Purple
			break;
		case "6":
			this.setColor("hsla(300, 50%, 50%, 1)"); //Magenta
			break;
		case "5":
			this.setColor("hsla(0, 50%, 50%, 1)"); //Red
			break;
		case "4":
			this.setColor("hsla(20, 50%, 50%, 1)"); //Orange
			break;
		case "3":
			this.setColor("hsla(50, 50%, 50%, 1)"); //Yellow
			break;
		case "2":
			this.setColor("hsla(75, 50%, 50%, 1)"); //Lime
			break;
		case "1":
			this.setColor("hsla(120, 50%, 50%, 1)"); //Green
			break;
		default:
			this.setColor("hsla(160, 50%, 50%, 1)"); //Cyan
			break;
	}
}

Square.prototype.setColor = function(color) {
	this.color = color;
}

Square.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.fillRect((ctx.canvas.width / width) * this.x, (ctx.canvas.height / height) * this.y, ctx.canvas.width / width, ctx.canvas.height / height);
}