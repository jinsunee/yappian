import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import CreateNewProjectPopup from '../Popup/CreateNewProjectPopup';
import joinedUserIcon from '../../../statics/img/userIcon.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CreateProjectButton = styled.div`
    font-size: 1.143rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    text-align: center;
    color: #ffdb44;
    text-decoration: underline;    
`;

const JoinedProjectIcon = styled.img.attrs({
    src: joinedUserIcon
})`
    width: 29px;
    height: 29px;
    object-fit: contain;
    margin-left: 15px;
`;

const OtherButtons = () => {
    return (
        <Wrapper>
            <Link to="/create">
                <CreateProjectButton>새 프로젝트 만들기</CreateProjectButton>
            </Link>
            <JoinedProjectIcon />
            <Switch>
                <Route path="/create">
                    <CreateNewProjectPopup />
                </Route>
            </Switch>
        </Wrapper>
    );
}

export default OtherButtons;