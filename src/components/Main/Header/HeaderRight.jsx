import React, { Component } from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import OtherButtons from './OtherButtons';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const HeaderRight = ({login_session}) => {
    return (
        <Wrapper>
            {
                login_session == false ? 
                <LoginButton /> : 
                <OtherButtons />
            }  
        </Wrapper>
    );
}

export default HeaderRight;