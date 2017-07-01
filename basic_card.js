exports.BasicCard = function BasicCard(front, back) {

	if (!(this instanceof BasicCard)){
		return new BasicCard(front, back);
	}
	
	this.front = front;
	this.back = back;
	
	return this;
}