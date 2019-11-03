import React, { Component } from 'react';
import axios from 'axios';

import { MainView } from '../components';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login_session: true,
            orderIdx: 0,
            gisuList: [],
            isOpenCreateProject: false,
        };
    }

    componentDidMount() {
        //this.getSession();
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

    // get `gisu(order)` list from server
    getOrdersNumber = () => {
        axios
            .get(`https://yappian.com/api/orders`)
            .then(res => {
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
        const { login_session, isOpenCreateProject, gisuList } = this.state;
        return (
            <MainView
                login_session={login_session}
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
