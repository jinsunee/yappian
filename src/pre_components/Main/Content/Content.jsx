import React, { Component } from 'react';
import styled from 'styled-components';

class Content extends Component {
    render() {
        return (
            <Wrapper>
                <div>content</div>
                <div></div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 37.5vh;
    padding: 43px 54px 0px 54px;
`;

export default Content;
