import React, { Component } from 'react';
import axios from 'axios';

import MainView from '../components/Views/MainView';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login_session: true,
            orderIdx: 0,
            gisuList: [],
            projectList: [],
            isOpenCreateProject: false,
        };
    }

    componentDidMount() {
        //this.getSession();
        this.getProject();
        this.getOrdersNumber();
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

    // get `gisu(order)` list from server
    getOrdersNumber = () => {
        axios
            .get(`https://yappian.com/api/orders`)
            .then(res => {
                console.log(res.data);
                res.data.map((list, index) =>
                    this.setState({
                        gisuList: this.state.gisuList.concat({
                            key: index,
                            text: list.number + '기',
                            value: parseInt(list.number),
                        }),
                    })
                );
            })
            .catch(error => {
                console.log(error);
            });
    };

    // SelectBox
    handleOrders = (e, { value }) => {
        this.setState({
            ordersIdx: parseInt(value),
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
        const {
            login_session,
            projectList,
            isOpenCreateProject,
            gisuList,
        } = this.state;

        return (
            <MainView
                login_session={login_session}
                projectList={projectList}
                isOpenCreateProject={isOpenCreateProject}
                openCreatePopup={this.openCreatePopup}
                closeCreatePopup={this.closeCreatePopup}
                handleOrders={this.handleOrders}
                gisuList={gisuList}
            />
        );
    }
}

export default MainContainer;
