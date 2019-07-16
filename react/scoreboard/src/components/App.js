import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
    state = {
        players: [
            {
                name: "Kye",
                score: 0,
                id: 1
            },
            {
                name: "Phil",
                score: 0,
                id: 2
            },
            {
                name: "Eva",
                score: 0,
                id: 3
            },
            {
                name: "Ara",
                score: 0,
                id: 4
            },
            {
                name: "Pete",
                score: 0,
                id: 5
            }
        ]
    };

    // Player ID Counter
    prevPlayerId = 4;

    getHighScore = () => {
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
          return highScore;
        } 
        return null;
      }

    handleScoreChange = (index, numberChange) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += numberChange
        }));
    }

    handleAddPlayer = (name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name,
                    score: 0,
                    id: this.prevePlayerId += 1
                }
            ]
        });
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    render() {
        const highScore = this.getHighScore();

        return (
            <div className="scoreboard">
                <Header
                    players={this.state.players}
                />

                {/* Players list */}
                {this.state.players.map((player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                        isHighScore={highScore === player.score}         
                    />
                )}
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    }
}

export default App;
