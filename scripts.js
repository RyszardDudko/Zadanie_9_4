function drawTree(height) {
	for ( var i = 0 ; i < (height) ; i++) {
		var star = "";
		for ( var j = -1 ; j < (height) ; j++) {
			if (j < i) {
				star += '*';
			} else {
				break;
			}
		}
		console.log(star)
	}
};

drawTree(4)
