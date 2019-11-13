import React, { Component } from 'react';
import styled from 'styled-components';

import UsedToolForm from './UsedToolForm';
import UsedToolList from './UsedToolList';

class UsedToolArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <div className="title">사용한 협업 프로그램 등록</div>
                <RightSection>
                    <UsedToolForm />
                    <UsedToolList />
                </RightSection>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 30px 0px 60px 0px;
    display: flex;
    flex-direction: row;
    .title {
        flex: 1;
        font-family: 'NotoSansCJKkr';
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: -0.13px;
        color: #4e4e4e;
    }
`;

const RightSection = styled.section`
    width: 100%;
    flex: 4;
`;

export default UsedToolArea;
