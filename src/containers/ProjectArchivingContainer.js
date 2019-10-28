import React, { Component } from 'react';

import { ProjectArchivingView } from '../components';

class ProjectArchivingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            match: { params },
        } = this.props;

        return (
            <div>
                <div>{params.project_id}</div>
                <ProjectArchivingView />
            </div>
        );
    }
}

export default ProjectArchivingContainer;
