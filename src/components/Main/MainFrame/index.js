import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';

/* Import component */
import { Nav } from '../';

import backgroundImage from '../../../img/group-5@3x.png';

const MainWrapper = styled.div`
    margin:0px;
    padding: 0px;
    height:100vh;
    width:100vw;
`;

const Top = styled.div`
    width:100vw;
    height: 62.5vh;
    background-image:url(${backgroundImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;


class MainFrame extends Component{
    render(){
        return (
            <MainWrapper>
                <Top>
                    <Nav/>
                </Top>
            </MainWrapper>
        );
    }
}

export default MainFrame;