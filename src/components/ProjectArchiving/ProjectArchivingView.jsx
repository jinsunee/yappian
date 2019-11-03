import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';

const ProjectArchivingView = () => {
    return (
        <Wrapper>
            <TopLine />
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
`;

const TopLine = styled.div`
    width: 100%;
    height: 10px;
    background-image: linear-gradient(to right, #5ae0ff, #c86dd7);
`;

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 0px 50px 0px 50px;
`;

export default ProjectArchivingView;
