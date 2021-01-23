//---------------------------------Timer 001----------------------------------------------------//
(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	let timer = "Sep 30, 2021 00:00:00",
		countDown = new Date(timer).getTime(),
		x = setInterval(function() {    
  
		  let now = new Date().getTime(),
			  distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			let headline = document.getElementById("headline"),
				countdown = document.getElementById("countdown"),
				content = document.getElementById("content");
  
			headline.innerText = "EXPIED";
			countdown.style.display = "none";
			content.style.display = "block";
  
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());
//---------------------------------Timer 002----------------------------------------------------//
(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

		let timer = "apr 01, 2021 00:00:00",
		countDown = new Date(timer).getTime(),
		x = setInterval(function() {    

		let now = new Date().getTime(),
			distance = countDown - now;

		document.getElementById("days-1").innerText = Math.floor(distance / (day)),
			document.getElementById("hours-1").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes-1").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds-1").innerText = Math.floor((distance % (minute)) / second);

		//do something later when date is reached
		if (distance < 0) {
			let headline = document.getElementById("headline"),
				countdown = document.getElementById("countdown"),
				content = document.getElementById("content");

			headline.innerText = "It's my birthday!";
			countdown.style.display = "none";
			content.style.display = "block";

			clearInterval(x);
		}
		//seconds
		}, 0)
	}());
//---------------------------------Timer 003----------------------------------------------------//
(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

		let timer = "nov 01, 2021 00:00:00",
		countDown = new Date(timer).getTime(),
		x = setInterval(function() {    

		let now = new Date().getTime(),
			distance = countDown - now;

		document.getElementById("days-2").innerText = Math.floor(distance / (day)),
			document.getElementById("hours-2").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes-2").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds-2").innerText = Math.floor((distance % (minute)) / second);

		//do something later when date is reached
		if (distance < 0) {
			let headline = document.getElementById("headline"),
				countdown = document.getElementById("countdown"),
				content = document.getElementById("content");

			headline.innerText = "It's my birthday!";
			countdown.style.display = "none";
			content.style.display = "block";

			clearInterval(x);
		}
		//seconds
		}, 0)
	}());