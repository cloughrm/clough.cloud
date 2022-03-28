(function () {
	let randInt = Math.floor(Math.random() * 3) + 1;
	let img = document.getElementsByClassName('profile-pic')[0];
	img.src = '/assets/images/profile-pic-' + randInt + '.jpg';
	img.alt = 'Ryan Clough profile picture';
})();