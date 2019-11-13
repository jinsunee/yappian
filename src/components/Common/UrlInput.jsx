import React from 'react';
import styled from 'styled-components';

import addUrlIcon from '../../statics/img/add-cover-img.png';

const UrlInput = () => {
    return (
        <InsertUrl>
            <AddIcon />
            <input placeholder="Copy and Paste URL" />
        </InsertUrl>
    );
};

const InsertUrl = styled.div`
    flex: 4;
    height: 40px;
    border-radius: 20.5px;
    border: solid 0.5px #5b5b5b;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    padding: 9px;
    margin-right: 15px;
    input {
        width: 100%;
        border: none;
        margin-left: 5px;
        &::placeholder {
            font-family: 'NotoSansCJKkr';
            font-size: 14px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.57;
            letter-spacing: -0.12px;
            color: #999999;
        }
    }
`;

const AddIcon = styled.img.attrs({
    src: addUrlIcon,
})`
    border: none;
    width: 22px;
    height: 22px;
    object-fit: contain;
`;

export default UrlInput;
