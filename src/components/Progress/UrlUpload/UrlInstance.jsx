import React from 'react';
import styled from 'styled-components';

import urlIcon from '../../../statics/img/goUrl.png';
import closeIcon from '../../../statics/img/closeIcon.png';

const UrlInstance = () => {
    return (
        <Wrapper>
            <img className="urlicon" src={urlIcon} alt="" />
            <div className="urlTitle">안녕</div>
            <img className="closeIcon" src={closeIcon} alt="" />
        </Wrapper>
    );
};

const Wrapper = styled.a.attrs({
    href: 'http://naver.com/',
})`
    width: 100%;
    height: 40px;
    border-radius: 20.5px;
    border: solid 0.5px #5b5b5b;
    background-color: #ffffff;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .urlicon {
        position: absolute;
        left: 15px;
        width: 20px;
        height: 21px;
        object-fit: contain;
    }
    .closeIcon {
        width: 10px;
        height: 10px;
        object-fit: contain;
        position: absolute;
        right: 15px;
    }
    .urlTitle {
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: -0.12px;
        text-align: center;
        color: #000000;
    }
`;

export default UrlInstance;
