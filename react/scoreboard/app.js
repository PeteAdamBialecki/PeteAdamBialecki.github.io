const players = [
    {
        name: "Kye",
        score: 98,
        id: 1
    },
    {
        name: "Phil",
        score: 50,
        id: 2
    },
    {
        name: "Eva",
        score: 85,
        id: 3
    },
    {
        name: "Ara",
        score: 95,
        id: 4
    },
    {
        name: "Pete",
        score: 25,
        id: 5
    }
];

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="My Scoreboard"
                totalPlayers={ props.initialPlayers.length }
            />
            {/* { Players } */}
            { props.initialPlayers.map( player => 
                <Player
                name={ player.name}
                score={ player.score }
                key={ player.id.toString() }
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);