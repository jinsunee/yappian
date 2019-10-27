import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContainer, UrlContainer, NotFound } from './containers';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/project" component={UrlContainer} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
