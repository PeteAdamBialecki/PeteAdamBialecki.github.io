const title = 'My First React Element';
const desc = 'I just learned how to use React nodes.';
const myTitleID = 'main-title';
const name = 'Pete';
const header = (
    <header>
        <h1 id="{ myTitleID }">{ name }'s First React.js Element</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);