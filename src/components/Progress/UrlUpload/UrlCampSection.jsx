import React from 'react';
import styled from 'styled-components';

import UrlList from './UrlList';

const UrlCampSection = ({ camptype }) => {
    const titleSentence =
        camptype !== 'HOME'
            ? `${camptype}차 DEV CAMP`
            : `${camptype} - COMINGDAY`;

    return (
        <Wrapper type={camptype}>
            <div className="title">{titleSentence}</div>
            <UrlList />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;
    .title {
        font-family: 'NotoSansCJKkr';
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
    }
    ${props => (props.type !== 'HOME' ? 'border-right: 1px solid #bbbbbb' : '')}
    margin-right: ${props => (props.type !== 'HOME' ? '30px' : '')};    
    padding-right: ${props => (props.type !== 'HOME' ? '30px' : '')}; 
`;

export default UrlCampSection;
