import React from 'react';
import styled from 'styled-components';

import Project from './Project';

const ProjectList = ({ projectList }) => {
    return (
        <Wrapper>
            {projectList != null ? (
                projectList.map((project, index) => (
                    <Project key={index.toString()} project={project} />
                ))
            ) : (
                <ProjectCaution>프로젝트를 등록해주세요.</ProjectCaution>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ProjectCaution = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #fe3f35;
`;

export default ProjectList;
