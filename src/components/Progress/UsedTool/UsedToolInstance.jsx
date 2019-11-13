import React from 'react';
import styled from 'styled-components';

import closeIcon from '../../../statics/img/close-tool.png';

const UsedToolInstance = () => {
    return (
        <Wrapper>
            <CloseIcon onClick={() => alert('hi')} />
            <div className="toolname">GitHub</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 197px;
    height: 59.4px;
    border-radius: 10px;
    background-color: #b382de;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .toolname {
        font-family: 'NotoSansCJKkr';
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.22;
        letter-spacing: -0.15px;
        text-align: center;
        color: #ffffff;
    }
`;

const CloseIcon = styled.img.attrs({
    src: closeIcon,
})`
    width: 10px;
    height: 10px;
    object-fit: contain;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export default UsedToolInstance;
