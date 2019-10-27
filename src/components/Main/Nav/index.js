import React from 'react';
import styled from 'styled-components';

import logo from '../../../img/yappian-copy@3x.png'

/* Style Element */
const Box = styled.div`
    width:100%;
    height:9.635vh;
    font-size:1rem;
    display:flex;
`;

const Left = styled.div`
    flex: 1;
    padding-left: 45px;
    padding-top: 29px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;  
`;

const Right = styled.div`
    flex: 1;
    padding-right: 45px;
`;

const Logo = styled.div`
    background-image: url(${logo});
    background-size: 11.667vw 5.859vh;
`;


const Nav = ({props}) => (
    <Box>
        <Left>
            <Logo />
        </Left>
        <Right>

        </Right>
    </Box>
);

export default Nav;