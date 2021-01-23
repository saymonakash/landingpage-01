(function () {
	'use strict'
	document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
	  document.querySelector('.offcanvas-collapse').classList.add('open')
	})
	document.querySelector('[data-bs-toggle="offcanvas-1"]').addEventListener('click', function () {
	  document.querySelector('.offcanvas-collapse').classList.remove('open')
	})
})()