class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    };
    
    // Creates two player objects
    // @return  {Array}    An array of two Player objects.

    // createPlayers() {
    //     playerOne = [{name: 'Pete'}, {color : '#e15258'}, {id : 1}, {active : true} ],
    //     playerTwo = [{name: 'Kye'}, {color : '#e599a13'}, {id : 2 }, {active : null} ]
    // };

    createPlayers() {
        const players = [
            new Player('Player 1', 1, '#e15258', true),
            new Player('Player 2', 2, '#e59a13')
        ]; return players;
    };
    // Gets game ready for playing.
    startGame() {
    };
};