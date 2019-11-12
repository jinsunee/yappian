import React from 'react';
import styled from 'styled-components';

import UsedToolInstance from './UsedToolInstance';

const UsedToolList = () => {
    return (
        <Wrapper>
            <UsedToolInstance />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 25px;
`;

export default UsedToolList;
