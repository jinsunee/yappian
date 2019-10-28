import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import loginBtn from '../../../statics/img/loginBtn.png';

const Wrapper = styled.img.attrs({
    src: loginBtn
})`
    width: 95px;
    height: 30px;
    object-fit: contain;
`;

const LoginButton = () => {
    return (
        <a href="https://yappian.com/api/login">
            <Wrapper />
        </a>
    );
}

export default LoginButton;
