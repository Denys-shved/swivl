document.addEventListener("DOMContentLoaded", function () {

	// Custom JS

	let btnList = document.querySelector('.header__sub-menu');
	let list = document.querySelector('.header__sub-list');
	btnList.addEventListener('click', function (evt) {
		list.classList.toggle('active')
	});

	let btnReport = document.querySelector('.person__addition');
	let listReport = document.querySelector('.person__about-list');
	btnReport.addEventListener('click', function (evt) {
		listReport.classList.toggle('active')
	})

	var specifiedElement = document.getElementById('a');
	//I'm using "click" but it works with any event
	document.addEventListener('click', function (event) {
		var isClickInside = specifiedElement.contains(event.target);

		if (!isClickInside && listReport.classList.contains('active')) {
			//the click was outside the specifiedElement, do something
			listReport.classList.remove('active')
		}
	});

});
