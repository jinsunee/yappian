import React from 'react';
import styled from 'styled-components';

import submitIcon from '../../statics/img/submit-button.png';

const SubmitButton = ({ handleSubmit }) => {
    return (
        <Wrapper onClick={handleSubmit}>
            <SubmitIcon />
        </Wrapper>
    );
};

const Wrapper = styled.button.attrs({
    type: 'submit',
})`
    width: 348px;
    height: 65px;
    border-radius: 32.5px;
    box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.03);
    background-image: linear-gradient(100deg, #5ae0ff, #c86dd7 102%);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

const SubmitIcon = styled.img.attrs({
    src: submitIcon,
})`
    width: 28.1px;
    height: 20.9px;
    object-fit: contain;
`;

export default SubmitButton;
