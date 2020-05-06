window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let infoTabEl = document.querySelector('.info-header'),
		infoTabButtons = document.querySelectorAll('.info-header-tab'),
		infoTabContent = document.querySelectorAll('.info-tabcontent');

	function hideContentTab(a) {
		for (let i = a; i < infoTabContent.length; i++) {
			infoTabContent[i].classList.remove('show');
			infoTabContent[i].classList.add('hide');
		}		
	}

	hideContentTab(1);

	function showContentTab(b) {
		if (infoTabContent[b].classList.contains('hide')) {
			infoTabContent[b].classList.remove('hide');
			infoTabContent[b].classList.add('show');
		}
	}

	infoTabEl.addEventListener('click', function(e) {
		let target = event.target;

		if (target.classList.contains('info-header-tab')) {
			for (let i = 0; i < infoTabButtons.length; i++) {
				if (target == infoTabButtons[i]) {
					hideContentTab(0);
					showContentTab(i);

					break;
				}
			}
		}
	});

	let deadLine = '2021-01-01';

	let timeSection = document.querySelector('.timer-numbers'),
		hoursSection = timeSection.querySelector('.hours'),
		minutesSection = timeSection.querySelector('.minutes'),
		secondsSection = timeSection.querySelector('.seconds');

	const interval = setInterval(() => {

		function timer() {
		 	let tDeadLine = Date.parse(deadLine),
		 		tNowTime = Date.parse(new Date()),
		 		t = tDeadLine - tNowTime;

 			let seconds = Math.floor((t / 1000) % 60),
		 		minutes = Math.floor((t / 1000 / 60) % 60),
		 		hours = Math.floor(t / 1000 / 60 / 60);

		 	return {
		 		'hours': hours,
		 		'minutes': minutes,
		 		'seconds': seconds,
		 		'timeDifference': t
		 	}	
		}

		let time = timer();

		if (time.hours < 10) {
			hoursSection.textContent = '0' + time.hours;
		} else {
			hoursSection.textContent = time.hours;
		}

		if (time.minutes < 10) {
			minutesSection.textContent = '0' + time.minutes;
		} else {
			minutesSection.textContent = time.minutes;
		}

		if (time.seconds < 10) {
			secondsSection.textContent = '0' + time.seconds;
		} else {
			secondsSection.textContent = time.seconds;
		}

		if (time.timeDifference <= 0) {
			clearInterval(interval);

			hoursSection.textContent = '00';
			minutesSection.textContent = '00';
			secondsSection.textContent = '00';
		}
	
	}, 1000);

});




