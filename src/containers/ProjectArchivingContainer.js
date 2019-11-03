import React, { Component } from 'react';
import styled from 'styled-components';

import { ProjectArchivingView } from '../components';

class ProjectArchivingContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {
            match: { params },
        } = this.props;

        return <ProjectArchivingView />;
    }
}

export default ProjectArchivingContainer;
