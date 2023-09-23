var quotesSelector =document.getElementById('quotes');

let quotes=['Happiness is not about getting all you want, it is about enjoying all you have.',
			'Stop giving a fuck about what other people think.',
		    'Avoid negative people, life is too short.',
			"if you don't go after what you want, you'll never get it.", 
			'See failure as a beginning, not an end.',
			'Do one thing every day that scares you.',
			'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
			'Be yourself; everyone else is already taken.',
			'You will face many defeats in life, but never let yourself be defeated',
		    'Our habits decide our future.'];

quotesSelector.innerText = quotes[Math.round(Math.random()*10)%quotes.length];
