import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

const SelectBoxGisu = ({ orderCaution, gisuList, handleOrders }) => {
    return (
        <Wrapper orderCaution={orderCaution}>
            <Dropdown
                placeholder="기수선택"
                onChange={handleOrders}
                options={gisuList}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 114px;
    height: 35px;
    border-radius: 17.5px;
    border: solid 1px
        ${props => (props.orderCaution === true ? 'red' : '#b6b6b6')};
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export default SelectBoxGisu;
