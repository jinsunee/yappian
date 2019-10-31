import React from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import OtherButtons from './OtherButtons';

const HeaderRight = ({ login_session, openCreatePopup }) => {
    return (
        <Wrapper>
            {login_session === false ? (
                <LoginButton />
            ) : (
                <OtherButtons openCreatePopup={openCreatePopup} />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

export default HeaderRight;
