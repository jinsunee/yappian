import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavBarRight from './NavBarRight';
import logo from '../../../statics/img/logo-on-url.png';

const Header = () => {
    return (
        <Wrapper>
            <HeaderLeft>
                <Link to="/">
                    <Logo />
                </Link>
            </HeaderLeft>
            <NavBarRight />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 68px;
    display: flex;
    border-bottom: 1px solid #999999;
`;

const HeaderLeft = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
`;

const Logo = styled.img.attrs({
    src: logo,
})`
    width: 94px;
    height: 29px;
    object-fit: contain;
    margin-top: 25px;
`;

export default Header;
