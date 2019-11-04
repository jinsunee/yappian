import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import RadioButton from '../Common/RadioButton';
import SubmitButton from '../Common/SubmitButton';
import SelectBoxGisu from '../Common/SelectBoxGisu';
import closePopupIcon from '../../statics/img/noun-x-1890803@3x.png';

class CreateNewProjectPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectName: '',
            projectPlatform: 'iOS',
            password: '',
            projectIdx: 0,
            redirect: false,
            passwordCaution: false,
            projectNameCaution: false,
            orderCaution: false,
        };
    }

    handleOrders = (e, { value }) => {
        this.props.handleOrders(e, { value });
        this.setState({
            orderCaution: false,
        });
    };

    // Get project name
    handleProjectName = e => {
        const value = e.target.value;

        if (value === '') {
            this.setState({
                projectNameCaution: true,
            });
        } else {
            this.setState({
                projectName: e.target.value,
                projectNameCaution: false,
            });
        }
    };

    handleProjectPlatform = text => {
        this.setState({
            projectPlatform: text,
        });
    };

    handleInviteCode = e => {
        const value = e.target.value;

        if (this.isNumericPassword(value) || value === '') {
            this.setState({
                passwordCaution: true,
                password: '',
            });
        } else {
            this.setState({
                passwordCaution: false,
                password: e.target.value,
            });
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        const {
            ordersIdx,
            projectName,
            projectPlatform,
            password,
        } = this.state;

        if (projectName === '') {
            this.setState({
                projectNameCaution: true,
            });
        } else if (this.isNumericPassword(password)) {
            this.setState({
                passwordCaution: true,
            });
        } else if (ordersIdx === 0) {
            this.setState({
                orderCaution: true,
            });
        } else {
            axios
                .post(
                    `https://yappian.com/api/project`,
                    {
                        ordersIdx: ordersIdx,
                        password: password,
                        projectName: projectName,
                        projectType: projectPlatform,
                    },
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then(res => {
                    this.setState({
                        projectIdx: res.data.projectIdx,
                        redirect: true,
                        passwordCaution: false,
                        projectNameCaution: false,
                        orderCaution: false,
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    // project Code Validation
    isNumericPassword = password => {
        const passwordValue = password;
        const newPasswordValue = passwordValue.replace(/[^0-9]/g, '');

        if (
            newPasswordValue === '' ||
            (newPasswordValue.length < 4 && newPasswordValue.length > 0)
        ) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        const { closeCreatePopup, gisuList, ordersIdx } = this.props;
        const {
            projectPlatform,
            projectIdx,
            redirect,
            passwordCaution,
            projectNameCaution,
            orderCaution,
        } = this.state;

        if (redirect === true) {
            return <Redirect to={'project/' + projectIdx} />;
        }

        return (
            <Fragment>
                <Overlay onClick={closeCreatePopup} />
                <Wrapper>
                    <Header>
                        <CloseIcon onClick={closeCreatePopup} />
                    </Header>
                    <Title>새 프로젝트 만들기</Title>
                    <Info>YAPP의 새로운 프로젝트를 만드세요!</Info>
                    <Form onSubmit={this.handleSubmit}>
                        <SelectBoxGisu
                            orderCaution={orderCaution}
                            handleOrders={this.handleOrders}
                            gisuList={gisuList}
                        />
                        <InputProjectNameWrapper
                            projectNameCaution={projectNameCaution}
                        >
                            <InputProjectName
                                onChange={this.handleProjectName}
                            />
                            {projectNameCaution === true ? (
                                <Icon
                                    name="cancel"
                                    size="small"
                                    style={{
                                        marginTop: '13px',
                                        marginRight: '10px',
                                        color: 'red',
                                    }}
                                />
                            ) : (
                                ''
                            )}
                        </InputProjectNameWrapper>

                        <RadioWrapper>
                            <RadioButton
                                handleProjectPlatform={
                                    this.handleProjectPlatform
                                }
                                selected={
                                    projectPlatform === 'iOS' ? true : false
                                }
                                platform={`iOS`}
                            />
                            <RadioButton
                                handleProjectPlatform={
                                    this.handleProjectPlatform
                                }
                                selected={
                                    projectPlatform === 'Android' ? true : false
                                }
                                platform={`Android`}
                            />
                            <RadioButton
                                handleProjectPlatform={
                                    this.handleProjectPlatform
                                }
                                selected={
                                    projectPlatform === 'Web' ? true : false
                                }
                                platform={`Web`}
                            />
                        </RadioWrapper>
                        <InfoInviteCode>
                            초대 코드(네자리 숫자)를 생성해 주세요.
                        </InfoInviteCode>
                        <InputInviteCode
                            onChange={this.handleInviteCode}
                            passwordCaution={passwordCaution}
                        />

                        {passwordCaution === true ? (
                            <CautionInviteCode>
                                숫자 4자리를 입력해 주세요.
                            </CautionInviteCode>
                        ) : (
                            <CautionInviteCode></CautionInviteCode>
                        )}

                        <SubmitButton handleSubmit={this.handleSubmit} />
                    </Form>
                </Wrapper>
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

const Wrapper = styled.div`
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

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const CloseIcon = styled.img.attrs({
    src: closePopupIcon,
})`
    width: 24px;
    height: 24px;
    object-fit: contain;
    opacity: 0.5;
    margin-top: 24px;
    margin-right: 24px;
`;

const Title = styled.div`
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.9px;
    text-align: center;
    text-decoration: underline;
    color: #b382de;
`;

const Info = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.23px;
    text-align: center;
    margin-top: 31px;
    color: #555555;
`;

const Form = styled.form`
    margin: 36px 79px 0px 79px;
`;

const InputProjectNameWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    border-radius: 17.5px;
    border: solid 1px
        ${props => (props.projectNameCaution === true ? 'red' : '#b6b6b6')};
    padding-left: 20px;
    margin-bottom: 9px;
`;

const InputProjectName = styled.input.attrs({
    placeholder: '프로젝트 이름',
})`
    width: 95%;
    height: 35px;
    border: none;
    &::placeholder {
        font-size: 14px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.16px;
        color: #8b8b8b;
    }
    &:focus {
        outline: none;
    }
`;

const RadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`;

const InfoInviteCode = styled.div`
    margin-bottom: 9px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #8b8b8b;
`;

const InputInviteCode = styled.input.attrs({
    type: 'text',
    maxLength: '4',
})`
    width: 150px;
    height: 35px;
    border-radius: 17.5px;
    border: solid 1px
        ${props => (props.passwordCaution === true ? 'red' : '#b6b6b6')};
    padding-left: 20px;
    margin-bottom: 8px;
    &:focus {
        outline: none;
    }
`;

const CautionInviteCode = styled.div`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ff0000;
    margin-bottom: 33px;
    height: 20px;
`;

export default CreateNewProjectPopup;
