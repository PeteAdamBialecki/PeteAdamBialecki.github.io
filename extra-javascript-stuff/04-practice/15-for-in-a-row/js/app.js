const game = new Game();
document.getElementById('begin-game').addEventListener('click', function () {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    document.getElementById("table").style.display = "block";
});

document.addEventListener('keydown', function (event) {
    game.handleKeydown(event);
});

document.addEventListener('click', function (event) {

	// Log the clicked element in the console
	console.log(event.target);

}, false);