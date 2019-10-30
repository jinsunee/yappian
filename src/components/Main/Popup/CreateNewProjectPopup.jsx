import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class CreateNewProjectPopup extends Component {
    render() {
        return (
            <Fragment>
                <Overlay />
                <Modal></Modal>
            </Fragment>
        );
    }
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 505px;
    height: 538px;
    border-radius: 5px;
    box-shadow: 1px 5px 9px 3px rgba(0, 0, 0, 0.09);
    background-color: #ffffff;
`;

export default CreateNewProjectPopup;
