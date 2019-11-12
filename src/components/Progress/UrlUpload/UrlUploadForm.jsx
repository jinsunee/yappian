import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

import UrlInput from '../../Common/UrlInput';
import UrlSubmitButton from '../../Common/UrlSubmitButton';

const UrlUploadForm = () => {
    return (
        <Wrapper>
            <SelectBox>
                <Dropdown placeholder="일정" options={selectList} />
            </SelectBox>
            <UrlNameInput />
            <UrlInput />
            <UrlSubmitButton />
        </Wrapper>
    );
};

const Wrapper = styled.form`
    flex: 4;
    display: flex;
    flex-direction: row;
`;

const SelectBox = styled.div`
    flex: 1;
    height: 40px;
    border-radius: 20.5px;
    border: solid 0.5px #5b5b5b;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

const UrlNameInput = styled.input.attrs({
    type: 'text',
    placeholder: '산출물 제목',
})`
    flex: 1;
    height: 40px;
    border-radius: 20.5px;
    border: solid 0.5px #5b5b5b;
    background-color: #ffffff;
    margin-right: 15px;
    text-align: center;

    &::placeholder {
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: -0.12px;
        color: #999999;
    }
`;

const selectList = [
    {
        key: 0,
        text: '1차 데브',
        value: 'FIRST',
    },
    {
        key: 1,
        text: '2차 데브',
        value: 'SECOND',
    },
    {
        key: 2,
        text: '3차 데브',
        value: 'THIRD',
    },
    {
        key: 3,
        text: '홈커밍데이',
        value: 'HOME',
    },
];

export default UrlUploadForm;
