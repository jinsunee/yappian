import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Link, Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

import NavBar from '../NavBar/Main/NavBar';
import ProjectList from '../ProjectList/ProjectList';
import CreateNewProjectPopup from '../Popup/CreateNewProjectPopup';

class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            propsProjectList: [],
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            propsProjectList: nextProps.projectList,
        });
    }

    getProjectListThis = type => {
        const { projectList } = this.props;

        if (type === 'ALL') {
            this.setState({
                propsProjectList: projectList,
            });
        } else {
            let arr = [];

            projectList.map(project =>
                project.type === type ? (arr = arr.concat(project)) : ''
            );

            this.setState({
                propsProjectList: arr,
            });
        }
    };

    render() {
        const {
            login_session,
            openCreatePopup,
            isOpenCreateProject,
            closeCreatePopup,
            handleOrders,
            gisuList,
        } = this.props;
        const { propsProjectList } = this.state;

        return (
            <Wrapper>
                <NavBar
                    login_session={login_session}
                    openCreatePopup={openCreatePopup}
                />
                <Link
                    activeClass="active"
                    to="second"
                    spy={true}
                    smooth={true}
                    duration={300}
                >
                    <Icon
                        name="chevron down"
                        size="big"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            marginBottom: '39.1px',
                            color: 'black',
                        }}
                    />
                </Link>

                <FirstBlock>
                    <ScrollAnimation animateIn="tada">Yappian</ScrollAnimation>
                </FirstBlock>

                <Element name="second">
                    <SecondBlock>
                        <ScrollAnimation animateIn="fadeIn">
                            Your app with <br />
                            passion and potential
                        </ScrollAnimation>
                    </SecondBlock>
                </Element>

                <ThirdBlock>
                    <ProjectInfo>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOut="fadeOut"
                        >
                            YAPP은 대학생들의 다양한 아이디어와 열정으로 기존에
                            없던 새로운 가치를 만들기 위해 노력하는 <br />
                            대학생 연합 기업형 IT동아리입니다. <br />
                            <br />
                            YAPP 이 만들어가는 새로운 가치를 얍의 아카이빙
                            서비스 YAPPAIN 에서 확인하세요!
                        </ScrollAnimation>
                    </ProjectInfo>
                    <ProjectSelectGroup>
                        <ul style={{ listStyle: 'none' }}>
                            <li
                                onClick={() => this.getProjectListThis('ALL')}
                                style={{
                                    float: 'left',
                                    borderRight: '1px solid black',
                                    marginRight: '30px',
                                    paddingRight: '30px',
                                }}
                            >
                                All
                            </li>
                            <li
                                onClick={() => this.getProjectListThis('WEB')}
                                style={{
                                    float: 'left',
                                    borderRight: '1px solid black',
                                    marginRight: '30px',
                                    paddingRight: '30px',
                                }}
                            >
                                Web
                            </li>
                            <li
                                onClick={() =>
                                    this.getProjectListThis('ANDROID')
                                }
                                style={{
                                    float: 'left',
                                    borderRight: '1px solid black',
                                    marginRight: '30px',
                                    paddingRight: '30px',
                                }}
                            >
                                Android
                            </li>
                            <li
                                onClick={() => this.getProjectListThis('IOS')}
                                style={{
                                    float: 'left',
                                }}
                            >
                                iOS
                            </li>
                        </ul>
                    </ProjectSelectGroup>
                    <ProjectList projectList={propsProjectList} />
                </ThirdBlock>
                {isOpenCreateProject === true ? (
                    <CreateNewProjectPopup
                        closeCreatePopup={closeCreatePopup}
                        handleOrders={handleOrders}
                        gisuList={gisuList}
                    />
                ) : (
                    ' '
                )}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

const FirstBlock = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #f6f6f6 50%, #b382de 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: TurretRoad;
    font-size: 150px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: -4.5px;
    text-align: left;
    color: #000000;
`;

const SecondBlock = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f6f6f6;
    font-family: TurretRoad;
    font-size: 100px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: -4.5px;
    text-align: left;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ThirdBlock = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    padding-top: 50px;
`;

const ProjectInfo = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    font-family: 'NotoSansCJKkr';
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -1.2px;
    text-align: center;
    color: #000000;
`;

const ProjectSelectGroup = styled.div`
    width: 100%;
    font-family: TurretRoad;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
`;

export default MainView;
