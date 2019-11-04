import React, { Component } from 'react';
import axios from 'axios';

import { ProjectArchivingView } from '../pre_components';

class ProjectArchivingContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            archivingView: 'progress',
        };
    }

    render() {
        const {
            match: { params },
        } = this.props;

        return <ProjectArchivingView />;
    }
}

export default ProjectArchivingContainer;
