$( document ).ready(function() {
	number = Math.floor(Math.random()*10000);
	getFact(number);
});

$( '#new-fact' ).on( 'click', function() {
	number = Math.floor(Math.random()*10000);
	getFact(number);
});

function checkFact(funFact) {
	bannedNumbers = [911, 666, 313];
	factNumber = parseInt(funFact.split(' ')[0]);

	for(index = 0; index < bannedNumbers.length; index++) {
		if(factNumber == bannedNumbers[index]) {
			return false;
		}
	}

	return true;
}

function getFact(number) {	
	funFact = null;
	$.ajax({
		url: 'http://numbersapi.com/'+number+'/?notfound=floor',
		type: 'GET',
		timeout: 500,
		error: function(data){
			data = '451 is the temperature at which the paper in books ignites, ' 
			+ 'giving the name to Ray Bradbury\'s novel Fahrenheit 451.';
			$('#fact').text(data);
		},
		success: function(data) {
			if(checkFact(data) == false) {
				data = '451 is the temperature at which the paper in books ignites, '
				+ 'giving the name to Ray Bradbury\'s novel Fahrenheit 451.';
			}
		    $('#fact').text(data);
		},
	});
}
