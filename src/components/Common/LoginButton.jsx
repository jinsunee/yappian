import React from 'react';
import styled from 'styled-components';

const LoginButton = ({ login_session }) => {
    return (
        <a href="https://yappian.com/api/login">
            <Login>Login</Login>
        </a>
    );
};

const Login = styled.div`
    font-family: TurretRoad;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
`;

export default LoginButton;
