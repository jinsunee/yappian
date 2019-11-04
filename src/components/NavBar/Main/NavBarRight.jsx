import React from 'react';
import styled from 'styled-components';

const NavBarRight = ({ login_session, openCreatePopup }) => {
    return (
        <>
            {login_session === false ? (
                <>
                    <a href="https://yappian.com/api/login">
                        <NavInstance>Login</NavInstance>
                    </a>
                    <NavInstance mg={true}>Go to Project</NavInstance>
                </>
            ) : (
                <>
                    <NavInstance onClick={openCreatePopup}>
                        New Project
                    </NavInstance>
                    <NavInstance mg={true}>Join List</NavInstance>
                    <a href="https://yappian.com/api/logout">
                        <NavInstance mg={true}>Logout</NavInstance>
                    </a>
                </>
            )}
        </>
    );
};

const NavInstance = styled.div`
    font-family: TurretRoad;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-left: ${props => (props.mg === true ? '43px' : '')};
`;

export default NavBarRight;
