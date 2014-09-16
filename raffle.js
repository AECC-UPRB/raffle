document.getElementById('start').onsubmit = function(){
	var list = document.getElementsByTagName('li'), invalidNumbers = [], randomNumber;
	var quantity = document.getElementById('quantity').value;
	if(!isNaN(quantity)){
		var ul = document.getElementById('list');
		for(var a = 0; a < quantity; a++){
			var li = document.createElement('li');
			ul.appendChild(li);
		}
	}
	else{
		alert('Add a number in the field.');
		return true;
	}
	for(var a = 0; a < list.length; a++){

		do{
			randomNumber = getRandomInt(1, 30);
		}while(invalidNumbers.indexOf(randomNumber) >= 0);
		
		invalidNumbers.push(randomNumber);

		list[a].appendChild(document.createTextNode(randomNumber));
	}

	return false;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function makeVisible(item){
// }