import React, { Component } from 'react';
import axios from 'axios';

import MainView from '../components/Views/MainView';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login_session: false,
            projectList: [],
        };
    }

    componentDidMount() {
        //this.getSession();
        this.getProject();
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

    getProject = () => {
        axios
            .get(`https://yappian.com/api/projects`)
            .then(res => {
                let arr = [];
                res.data.map(project => {
                    if (project.fileList.length === 2) {
                        arr = arr.concat(project);
                    }
                });
                this.setState({
                    projectList: arr,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { login_session, projectList } = this.state;

        return (
            <MainView login_session={login_session} projectList={projectList} />
        );
    }
}

export default MainContainer;
