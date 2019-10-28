import React, { Component } from 'react';
import { MainView } from '../components';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainView />
            </div>
        );
    }
}

export default MainContainer;
