class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    };
    get activePlayer() {
        return this.players.find(player => player.active);
    };
    createPlayers() {
        const players = [
            new Player('Player 1', 1, '#e15258', true),
            new Player('Player 2', 2, '#e59a13')];
        return players;
    };
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    };
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                this.activePlayer.activeToken.playToken();
            }
        }
    };
    playToken() {
        for (i = 0; i < 5; i++) {
            // Iterate through space objects in the target column and identify the target space. The token property on the Space objects will tell you if the Space is occupied by a Token object or not.
                // Is the column full?
                    // If the column is not full, before dropping the token, set the game's ready state to false. This is so the game can't be played, and tokens can't be moved until after the htmlToken is dropped and the game is reset.
        } drop(target, reset);
    };
};