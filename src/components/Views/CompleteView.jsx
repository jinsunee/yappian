import React from 'react';
import styled from 'styled-components';

import testpdf from '../../statics/img/sample-file.pdf';
import completeimg from '../../statics/img/completeImg.png';

const CompleteView = () => {
    return (
        <Wrapper>
            <Left>
                <div className="top">
                    <div className="infoWrapper">
                        <div className="name">DITO</div>
                        13기 | Android
                    </div>
                    <img src={completeimg} alt="런칭여부 Icon" />
                </div>
                <div className="middle">
                    무임승차는 조별과제에 참여하는 수많은 대학생들에게 가장 큰
                    스트레스입니다. 하지만, 태생부터 프리라이더는 없다고
                    생각합니다. 적절한 시스템의 부재가 무임승차자를 낳을
                    뿐입니다. 가시적인 역할분담과 ‘시간’이라는 객관적인
                    평가척도를 통해 무임승차를 사전에 방지하고, 서로 눈치만 보던
                    팀플에서 각자가 책임감 있는 팀플로 변할 수 있습니다.
                </div>
                <div className="bottom">
                    https://play.google.com/store/apps/
                    detailsid=roommate.yapp.com. yapp13th_roommate
                </div>
            </Left>
            <Right>
                <iframe src={testpdf} title="123" />
            </Right>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

const Left = styled.div`
    flex: 1;
    height: 100vh;
    border-right: 1px solid #bbbbbb;
    padding-right: 40px;
    margin-right: 40px;
    .top {
        display: flex;
        flex-direction: row;
        margin-bottom: 64px;
        position: relative;
        .infoWrapper {
            font-family: 'NotoSansCJKkr-DemiLight';
            font-size: 14px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.13px;
            color: #111111;
            .name {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 10px;
            }
        }
        img {
            width: 51px;
            height: 63px;
            object-fit: contain;
            position: absolute;
            right: 0;
        }
    }
    .middle {
        font-family: 'NotoSansCJKkr-DemiLight';
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: #111111;
        margin-bottom: 60px;
        word-wrap: break-word;
    }
    .bottom {
        width: 100%;
        height: auto;
        word-wrap: break-word;
        border-radius: 5px;
        border: solid 0.5px #666666;
        background-color: #efefef;
        padding: 7px 17px 7px 17px;

        font-family: 'NotoSansCJKkr-DemiLight';
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #444444;
    }
`;

const Right = styled.div`
    flex: 3;
    iframe {
        width: 100%;
        height: 100vh;
    }
`;

export default CompleteView;
