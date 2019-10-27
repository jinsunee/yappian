import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProjectArchivingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            match: { params },
        } = this.props;

        const value = parseInt(params.project_id);

        // params 가 숫자일 때만 옳은 params 이므로, 문자일 때 에러 페이지로 Redirect
        if (!(value > 0) && !(value === 0) && !(value < 0)) {
            return <Redirect to="/error/notfound" />;
        }

        return (
            <div>
                <div>{params.project_id}</div>
                <div>UrlContainer</div>
            </div>
        );
    }
}

export default ProjectArchivingContainer;
