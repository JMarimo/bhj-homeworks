const pollAnswers = document.querySelector('#poll__answers');

function getCheckinAnswer() {
	alert('Спасибо, ваш голос засчитан!');
	window.location.reload();
}

let url = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.onreadystatechange = function() {
	if(xhr.readyState === xhr.DONE && xhr.status === 200) {
		let xhrResponseObj = JSON.parse(xhr.response);
		let answersArray = xhrResponseObj.data.answers;
		let title = xhrResponseObj.data.title;

		const pollTitle = document.querySelector('#poll__title');

		pollTitle.innerHTML = title;

		let allAnswersBtn = [];

		for(const answer of answersArray) {
			let pollAnswerBtn = document.createElement('button');
			pollAnswerBtn.className = 'poll__answer';
			pollAnswerBtn.innerHTML = answer;

			allAnswersBtn.push(pollAnswerBtn);

			pollAnswers.appendChild(pollAnswerBtn);
		};

		for(let btn of allAnswersBtn) {
			btn.addEventListener('click', getCheckinAnswer);
		};

	};

};

xhr.send();