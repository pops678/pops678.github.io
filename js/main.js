function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is called' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var name = prompt('What is your name')
	name= parseInt(name);

	if (firstName.toLowerCase() === 'General' && lastName.toLowerCase() !== 'Assembly') {
		console.log('Hello');
	}

	var faveColour = prompt ('What is your favourite colour?');
	faveColour = faveColour.toLowerCase();

	if (faveColour == 'red' ||
	 faveColour == 'green' || 
	faveColour == 'blue' ||
	faveColour == 'yellow' ) {
		$('h1').css('color',faveColour);
	}

}





// When the page loads 
$(function () {
	
	//when the user clicks the image, ask questions
	$('img').on('click', askQuestions);

		// When the user clicks a heading
		$('h3').on('click',function() {

		// Toggle the next element
		$(this).next().slideToggle(200);

	});

});