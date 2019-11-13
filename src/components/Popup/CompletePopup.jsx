import React, { Fragment, Component } from 'react';
import styled from 'styled-components';

import SubmitButton from '../Common/SubmitButton';

import closeIcon from '../../statics/img/noun-x-1890803@3x.png';
import completeInputIcon from '../../statics/img/completeinputurlpupple.png';

class CompletePopup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Overlay />
                <PopupWrapper>
                    <Wrapper>
                        <img
                            src={closeIcon}
                            alt="closeIcon"
                            className="close-icon"
                        />
                        <Header>
                            <div className="title">
                                <div className="sentence">
                                    프로젝트 완료하기
                                </div>
                            </div>
                            <div className="info">
                                YAPPIAN 여러분! 프로젝트 완료를 축하합니다.
                            </div>
                        </Header>
                        <UrlInput>
                            <input
                                type="text"
                                alt="Input Url"
                                className="url-input"
                                placeholder="프로젝트 URL"
                            />
                            <img
                                src={completeInputIcon}
                                alt="complete Input Icon"
                                className="inputIcon"
                            />
                        </UrlInput>
                        <Middle_1>
                            <div className="intro-project-group">
                                <div className="intro-title">프로젝트 소개</div>
                                <div className="">123</div>
                            </div>
                            <div className="cover-img-group">
                                <div>123</div>
                                <div>234</div>
                            </div>
                        </Middle_1>
                        <Middle_2>
                            <div className="intro-project-group">
                                <div className="intro-title">포트폴리오</div>
                                <div>123</div>
                            </div>
                            <div className="cover-img-group">
                                <div>런칭 유무</div>
                                <div>234</div>
                            </div>
                        </Middle_2>
                        <Bottom>
                            <SubmitButton />
                        </Bottom>
                    </Wrapper>
                </PopupWrapper>
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
    background-color: rgba(0, 0, 0, 0.3);
`;

const PopupWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 691px;
    height: 593px;
    border-radius: 5px;
    box-shadow: 1px 5px 9px 3px rgba(0, 0, 0, 0.09);
    background-color: #ffffff;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 35px 50px;
    .close-icon {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 24px;
        height: 27px;
        opacity: 0.5;
    }
`;

const Header = styled.div`
    width: 100%;
    margin-bottom: 38px;
    .title {
        width: 100%;
        display: flex;
        justify-content: center;
        .sentence {
            width: 220px;
            font-family: 'NotoSansCJKkr-Medium';
            font-size: 30px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.9px;
            text-align: center;
            color: #b382de;
            border-bottom: 2px solid #b382de;
            margin-bottom: 25px;
        }
    }
    .info {
        font-family: 'NotoSansCJKkr-Medium';
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.23px;
        text-align: center;
        color: #555555;
    }
`;

const UrlInput = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: solid 1px #b6b6b6;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 21px;
    .url-input {
        width: 100%;
        height: 35px;
        border: none;
        font-size: 14px;

        &::placeholder {
            font-family: 'NotoSansCJKkr-DemiLight';
            font-size: 14px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.16px;
            color: #8b8b8b;
        }
    }
    .inputIcon {
        width: 22px;
        height: 23px;
        object-fit: contain;
    }
`;

const Middle_1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    .intro-project-group {
        width: 432px;
        height: 114px;
        border-radius: 20px;
        border: solid 1px #b6b6b6;
        background-color: #ffffff;
    }
    .cover-img {
        width: 100%;
    }
`;

const Middle_2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 37px;
`;

export default CompletePopup;
