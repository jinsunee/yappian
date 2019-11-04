import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NotFoundView extends Component {
    render() {
        return (
            <div>
                <NotFoundTopLine />
                <NotFoundWrapper>
                    <ErrorBox>SORRY :(</ErrorBox>
                    <h1>YAPPIAN 에러페이지입니다.</h1>
                    <Link to="/">
                        <MoveMainStyled>메인으로 이동하기</MoveMainStyled>
                    </Link>
                </NotFoundWrapper>
            </div>
        );
    }
}

const NotFoundTopLine = styled.div`
    width: 100%;
    height: 10px;
    background-image: linear-gradient(to right, #5ae0ff, #c86dd7);
`;

const NotFoundWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

const ErrorBox = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 5rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.9px;
    text-align: center;
    color: #ffffff;
    background-color: #b382de;
    padding: 30px;
`;

const MoveMainStyled = styled.div`
    text-decoration: none;
    color: #0d71bb;
`;

export default NotFoundView;
