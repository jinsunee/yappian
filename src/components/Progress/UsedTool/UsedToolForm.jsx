import React from 'react';
import styled from 'styled-components';

import UrlInput from '../../Common/UrlInput';
import UrlSubmitButton from '../../Common/UrlSubmitButton';

const UsedToolForm = () => {
    return (
        <Form>
            <ToolNameInput />
            <UrlInput />
            <UrlSubmitButton />
        </Form>
    );
};

const Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

const ToolNameInput = styled.input.attrs({
    placeholder: 'tool name',
})`
    flex: 1;
    height: 40px;
    margin-right: 20px;
    border-radius: 20.5px;
    border: solid 0.5px #5b5b5b;
    background-color: #ffffff;
    text-align: center;
    &::placeholder {
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: -0.12px;
        color: #999999;
        text-align: center;
    }
`;

export default UsedToolForm;
