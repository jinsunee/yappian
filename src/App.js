import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainContainer, ProjectArchivingContainer } from './containers';
import { NotFoundView } from './components';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route
                    exact
                    path="/project/:project_id"
                    component={ProjectArchivingContainer}
                />
                <Route component={NotFoundView} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
