function Square(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
}

Square.prototype.setTime = function(time) {
	switch(time){
		case "9":
			//Nine shades of grey - Coming to an internet browser near you!
			this.setColor("#000000");
			break;
		case "8":
			this.setColor("#1C1C1C");
			break;
		case "7":
			this.setColor("#383838");
			break;
		case "6":
			this.setColor("#555555");
			break;
		case "5":
			this.setColor("#717171");
			break;
		case "4":
			this.setColor("#8E8E8E");
			break;
		case "3":
			this.setColor("#AAAAAA");
			break;
		case "2":
			this.setColor("#C7C7C7");
			break;
		case "1":
			this.setColor("#E3E3E3");
			break;
		default:
			this.setColor("#FFFFFF");
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