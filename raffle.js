"use strict";

document.getElementById('myForm').onsubmit = function(e) {
    e.preventDefault();
    var invalidNumbers = [],
        randomNumber;
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var quantity = document.getElementById('quantity').value;
    if (!isNaN(quantity) && quantity <= (end-start)+1 && start < end) {
        var ul = document.getElementById('list');
        ul.innerHTML = "";
        for (var a = 0; a < quantity; a++) {
            var li = document.createElement('li');
            li.className = "text-center winingNumber";

            do {
                randomNumber = getRandomInt(parseInt(start), parseInt(end));
            } while (invalidNumbers.indexOf(randomNumber) >= 0);

            invalidNumbers.push(randomNumber);

            li.innerHTML = randomNumber;
            ul.appendChild(li);
        }
    }
};

function getRandomInt(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num.toString().length == 1) {
        num = "0" + num.toString();
    }
    return num;
}
