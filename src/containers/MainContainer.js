import React, { Component } from 'react';
import axios from 'axios';

import { MainView } from '../components';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login_session: true,
            isOpenCreateProject: true,
        };
    }

    componentDidMount() {
        //this.getSession();
    }

    // 세션 가져오기
    getSession = () => {
        axios.get(`https://yappian.com/session`).then(res => {
            if (res.data !== 'ANONYMOUS') {
                this.setState({
                    login_session: true,
                });
            } else {
                this.setState({
                    login_session: false,
                });
            }
        });
    };

    openCreatePopup = () => {
        this.setState({
            isOpenCreateProject: true,
        });
    };

    closeCreatePopup = () => {
        this.setState({
            isOpenCreateProject: false,
        });
    };

    render() {
        const { login_session, isOpenCreateProject } = this.state;
        return (
            <div>
                <MainView
                    login_session={login_session}
                    isOpenCreateProject={isOpenCreateProject}
                    openCreatePopup={this.openCreatePopup}
                    closeCreatePopup={this.closeCreatePopup}
                />
            </div>
        );
    }
}

export default MainContainer;
