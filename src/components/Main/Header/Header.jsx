import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HeaderRight from './HeaderRight';
import backgroundImage from '../../../statics/img/group-5@3x.png';
import logo from '../../../statics/img/yappian-copy@3x.png';
import mainInfoFont from '../../../statics/img/MainInfoFont.png';

const Wrapper = styled.div`
    width:100%;
    height: 62.5vh;
    background-image:url(${backgroundImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const Bar = styled.div`
    display: flex;
    flex-direction: row;
`;

const Info = styled.img.attrs({
    src: mainInfoFont
})`
    width: 63.583vw;
    height: 27.214vh;
    margin-left: 7.583vw;
    margin-top: 10.417vh;
    object-fit: contain;
`;

const Left = styled.div`
    flex: 1;
    padding-left: 3.72vw;
    margin-top: 3.776vh;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 3.75vw;
    margin-top: 3.776vh;
`;

const Logo = styled.img.attrs({
    src: logo
})`
    width: 140px;
    height: 45px;
    object-fit: contain;
`;

class Header extends Component {
    render (){
        return (
            <Wrapper>
                <Bar>
                    <Left>
                        <Logo />
                    </Left>
                    <Right>
                        <HeaderRight login_session={this.props.login_session} />
                    </Right>
                </Bar>
                <Info />
            </Wrapper>
        );
    }
}

export default Header;