import React from 'react';
import styled from 'styled-components';

import loginBtn from '../../statics/img/loginBtn.png';

const LoginButton = () => {
    return (
        <a href="https://yappian.com/api/login">
            <Wrapper />
        </a>
    );
};

const Wrapper = styled.img.attrs({
    src: loginBtn,
})`
    width: 95px;
    height: 30px;
    object-fit: contain;
`;

export default LoginButton;
