import React, { Component } from 'react';
import axios from 'axios';

import ProjectArchivingView from '../components/Views/ProjectArchivingView';

class ProjectArchivingContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            archivingView: 'progress',
            isLogin: true,
            isMember: true,
        };
    }

    componentDidMount() {
        //this.getSession();
        //this.getIsMember();
    }

    // 세션 가져오기
    getSession = () => {
        axios.get(`https://yappian.com/session`).then(res => {
            if (res.data !== 'ANONYMOUS') {
                this.setState({
                    isLogin: true,
                });
            } else {
                this.setState({
                    isLogin: false,
                });
            }
        });
    };

    //
    getIsMember = () => {
        const {
            match: { params },
        } = this.props;

        axios
            .get(`https://yappian.com/api/user/projects`)
            .then(res => {
                res.data.map(list => {
                    if (parseInt(params.project_id) === list.idx) {
                        this.setState({
                            isMember: true,
                        });
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleArchivingView = view => {
        this.setState({
            archivingView: view,
        });
    };

    render() {
        const {
            match: { params },
        } = this.props;

        const { archivingView } = this.state;

        return (
            <ProjectArchivingView
                archivingView={archivingView}
                handleArchivingView={this.handleArchivingView}
            />
        );
    }
}

export default ProjectArchivingContainer;
