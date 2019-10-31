import React from 'react';
import styled from 'styled-components';

import joinedUserIcon from '../../../statics/img/userIcon.png';

const OtherButtons = ({ openCreatePopup }) => {
    return (
        <Wrapper>
            <CreateProjectButton onClick={openCreatePopup}>
                새 프로젝트 만들기
            </CreateProjectButton>
            <JoinedProjectIcon />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CreateProjectButton = styled.div`
    font-size: 1.143rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    text-align: center;
    color: #ffdb44;
    text-decoration: underline;
`;

const JoinedProjectIcon = styled.img.attrs({
    src: joinedUserIcon,
})`
    width: 29px;
    height: 29px;
    object-fit: contain;
    margin-left: 15px;
`;

export default OtherButtons;
