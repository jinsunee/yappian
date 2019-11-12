import React from 'react';
import styled from 'styled-components';

import submitButton from '../../statics/img/group-10@3x.png';

const UrlSubmitButton = () => {
    return (
        <SubmitButton>
            <img src={submitButton} alt="form 제출 버튼" />
        </SubmitButton>
    );
};

const SubmitButton = styled.button`
    border: none;

    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

export default UrlSubmitButton;
