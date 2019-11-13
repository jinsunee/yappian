import React from 'react';
import styled from 'styled-components';

// import Modal from 'react-modal';

// const otherPopupBackground = {
//     overlay: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'none',
//     },
//     content: {
//         position: 'absolute',
//         margin: 'auto',
//         width: '223px',
//         height: '140px',
//         borderRadius: '5px',
//         boxShadow: '1px 5px 9px 0 rgba(0, 0, 0, 0.2)',
//         backgroundColor: '#ffffff',
//         padding: '16px 23px 21px 25px',
//         border: 'none',
//     },
// };

const ManagingProjectPopup = ({
    closeManagingPopup,
    isOpenManagingProjectPopup,
}) => {
    return (
        <Wrapper>
            <div>
                <div className="popup-title">프로젝트 관리</div>
                <div className="popup-content-group">
                    <div className="element">프로젝트 완료하기</div>
                    <div className="element">프로젝트 참여하기</div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .popup-title {
        font-family: 'NotoSansCJKkr-Medium';
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #696969;
    }

    .popup-content-group {
        margin-top: 18px;
        margin-bottom: 11px;
        font-family: 'NotoSansCJKkr-Regular';
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #111111;

        .element {
            margin-bottom: 5px;
        }
    }
`;

export default ManagingProjectPopup;
