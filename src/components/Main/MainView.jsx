import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Content from './Content/Content';
import CreateNewProjectPopup from './Popup/CreateNewProjectPopup';

const MainView = ({
    login_session,
    isOpenCreateProject,
    openCreatePopup,
    closeCreatePopup,
}) => {
    return (
        <MainWrapper>
            <Header
                login_session={login_session}
                openCreatePopup={openCreatePopup}
            />
            <Content />
            {isOpenCreateProject === true ? (
                <CreateNewProjectPopup closeCreatePopup={closeCreatePopup} />
            ) : (
                ' '
            )}
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
`;

export default MainView;
