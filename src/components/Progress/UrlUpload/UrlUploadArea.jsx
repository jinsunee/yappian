import React from 'react';
import styled from 'styled-components';

import UrlUplaodForm from './UrlUploadForm';
import UrlCampSection from './UrlCampSection';

const UrlUploadArea = () => {
    return (
        <Wrapper>
            <Top>
                <div className="title">산출물 업로드</div>
                <UrlUplaodForm />
            </Top>
            <Bottom>
                {bottomList.map((list, index) => (
                    <UrlCampSection camptype={list} />
                ))}
            </Bottom>
        </Wrapper>
    );
};

const bottomList = ['1', '2', '3', 'HOME'];

const Wrapper = styled.div`
    width: 100%;
    padding-top: 60px;
    border-top: solid 0.5px #e1e1e1;
`;

const Top = styled.div`
    width: 100%;
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

const Bottom = styled.div`
    width: 100%;
    margin-top: 46px;
    display: flex;
    flex-direction: row;
`;

export default UrlUploadArea;
