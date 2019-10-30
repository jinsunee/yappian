import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header/Header';
import Content from './Content/Content';
import CreateNewProjectPopup from './Popup/CreateNewProjectPopup';
import styled from 'styled-components';

const MainWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
`;

class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login_session: true,
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

    render() {
        const { login_session } = this.state;
        return (
            <MainWrapper>
                <Header login_session={login_session} />
                <Content />
                <CreateNewProjectPopup />
            </MainWrapper>
        );
    }
}

export default MainView;
