import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

import RadioButton from './RadioButton';
import closePopupIcon from '../../../statics/img/noun-x-1890803@3x.png';

class CreateNewProjectPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gisuList: [],
            ordersIdx: 14,
            projectName: '',
            projectPlatform: 'iOS',
        };
    }

    componentDidMount() {
        this.getOrdersNumber();
    }

    // get `gisu(order)` list from server
    getOrdersNumber = () => {
        axios
            .get(`https://yappian.com/api/orders`)
            .then(res => {
                res.data.map((list, index) =>
                    this.setState({
                        gisuList: this.state.gisuList.concat({
                            key: index,
                            text: list.number + '기',
                            value: parseInt(list.number),
                        }),
                    })
                );
            })
            .catch(error => {
                console.log(error);
            });
    };

    // SelectBox
    handleOrders = ({ value }) => {
        this.setState({
            ordersIdx: parseInt(value),
        });
    };

    // Get project name
    handleProjectName = e => {
        this.setState({
            projectName: e.target.value,
        });
    };

    handleProjectPlatform = text => {
        this.setState({
            projectPlatform: text,
        });
    };

    render() {
        const { closeCreatePopup } = this.props;
        const { gisuList, projectPlatform } = this.state;
        return (
            <Fragment>
                <Overlay onClick={closeCreatePopup} />
                <Wrapper>
                    <Header>
                        <CloseIcon onClick={closeCreatePopup} />
                    </Header>
                    <Title>새 프로젝트 만들기</Title>
                    <Info>YAPP의 새로운 프로젝트를 만드세요!</Info>
                    <Form>
                        <SelectGisu>
                            <Dropdown
                                placeholder="기수선택"
                                onChange={this.handleOrders}
                                options={gisuList}
                            />
                        </SelectGisu>
                        <InputProjectName onChange={this.handleProjectName} />
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

const SelectGisu = styled.div`
    width: 114px;
    height: 35px;
    border-radius: 17.5px;
    border: solid 1px #b6b6b6;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Form = styled.form`
    margin: 36px 79px 0px 79px;
`;

const InputProjectName = styled.input.attrs({
    placeholder: '프로젝트 이름',
})`
    width: 100%;
    height: 35px;
    border-radius: 17.5px;
    border: solid 1px #b6b6b6;
    padding-left: 20px;
    margin-bottom: 9px;
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
`;

export default CreateNewProjectPopup;
