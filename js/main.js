
function askQuestions() { 
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName; 

	var age = prompt ('How old are you?');
	age = parseInt(age);

	if (age >=18) {
		console.log('User is an adult.');
	}else if (age >= 13) {
		console.log('User is a child');

	}
	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
		console.log("Hello General!");
	}

	var favColour = prompt('What is your favourite colour?').toLowerCase();

	if (favColour === 'red' ||
		favColour === 'blue' ||
		favColour === 'green' ||
		favColour === 'yellow' ) {
		$('h1').css('color', favColour);


	}

}


// When the page loads 
$(function() {

	$('img').on('click', askQuestions);

	//Hide all the content
	$('h3').next().hide();

	// When the user clicks an h3
	$('h3').on('click', function () { 

		var target = $(this).next();

		// Hide the content
		$('h3').next().not(target).slideUp(500)

		// toggle the next element
		target.slideToggle(500);

	});
	

});


