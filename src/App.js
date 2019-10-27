import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
    MainContainer,
    ProjectArchivingContainer,
    NotFound,
} from './containers';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route
                    exact
                    path="/:project_id"
                    component={ProjectArchivingContainer}
                />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
