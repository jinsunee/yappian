import React from 'react';
import styled, { css } from 'styled-components';

const RadioButton = ({ platform, selected, handleProjectPlatform }) => {
    return (
        <Wrapper
            selected={selected}
            onClick={() => handleProjectPlatform(platform)}
        >
            {platform}
        </Wrapper>
    );
};

const Selected = css`
    border: solid 1px #b6b6b6;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    text-align: center;
    color: #8b8b8b;
`;

const NoneSelected = css`
    border: solid 2px #b382de;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    text-align: center;
    color: #b382de;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 35px;
    border-radius: 17.5px;
    border: solid 1px #b6b6b6;
    margin-right: 7px;
    ${props => (props.selected === true ? NoneSelected : Selected)};
`;

export default RadioButton;
