import React, { Component } from 'react';
import styled from 'styled-components';

import { UrlUploadArea, UsedToolArea } from '../Progress';

class ProgressView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProjectTitle>
                    <div>14기</div>
                    <div className="divide">|</div>
                    <div>WEB Yappian</div>
                </ProjectTitle>
                <UsedToolArea />
                <UrlUploadArea />
            </div>
        );
    }
}

const ProjectTitle = styled.div`
    height: 45px;
    font-family: 'NotoSansCJKkr-Bold';
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.33px;
    color: #111111;
    display: flex;
    flex-direction: row;
    .divide {
        margin: 0px 10px 0px 10px;
    }
`;

export default ProgressView;
