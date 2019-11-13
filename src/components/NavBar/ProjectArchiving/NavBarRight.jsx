import React from 'react';
import styled from 'styled-components';

import othersIcon from '../../../statics/img/invalid-name@3x.png';
import userIcon from '../../../statics/img/user-icon-gray@3x.png';

const NavBarRight = ({ openManagingPopup }) => {
    return (
        <Wrapper>
            <OthersIcon onClick={() => openManagingPopup()} />
            <UserIcon />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const OthersIcon = styled.img.attrs({
    src: othersIcon,
})`
    width: 29px;
    height: 29px;
    object-fit: contain;
`;

const UserIcon = styled.img.attrs({
    src: userIcon,
})`
    width: 29px;
    height: 29px;
    object-fit: contain;
    margin-left: 10px;
`;

export default NavBarRight;
