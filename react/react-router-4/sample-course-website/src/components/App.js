import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';
import About from './About';

// "/teachers"
// "/courses"

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
);

export default App;