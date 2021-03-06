import React from 'react';
import styled from 'styled-components';

import NavBarRight from './NavBarRight';

const NavBar = ({ login_session, openCreatePopup }) => {
    return (
        <Wrapper>
            <Left>
                <MainLogo>YAPPIAN.</MainLogo>
            </Left>
            <Right>
                <NavBarRight
                    login_session={login_session}
                    openCreatePopup={openCreatePopup}
                />
            </Right>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 11.54vh;
    display: flex;
    position: fixed;
    top: 0;
    background-color: #ffffff;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const MainLogo = styled.div`
    width: 219px;
    height: 56px;
    background-color: #000000;
    margin-left: 35px;
    font-family: TurretRoad;
    font-size: 45px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 77px;
`;

export default NavBar;
