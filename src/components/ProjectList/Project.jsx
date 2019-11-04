import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: this.props.project,
            hover: false,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            project: nextProps.project,
        });
    }

    handleHoverOn = () => {
        this.setState({
            hover: true,
        });
    };

    handleHoverOff = () => {
        this.setState({
            hover: false,
        });
    };

    render() {
        const { project, hover } = this.state;
        let picture = project.fileList.filter(file => file.type === 'IMAGE');

        return (
            <Link to={`/project/` + project.idx}>
                <Wrapper
                    picture={picture[0].fileUrl}
                    onMouseOver={this.handleHoverOn}
                    onMouseLeave={this.handleHoverOff}
                >
                    {hover === true ? (
                        <ProjectWrapper>
                            <ProjectTop>
                                <ProjectTopIcon>{project.type}</ProjectTopIcon>
                                <ProjectTopIcon kind={`orders`}>
                                    {parseInt(project.ordersIdx) + 9} 기
                                </ProjectTopIcon>
                            </ProjectTop>
                            {project.name.toUpperCase()}
                        </ProjectWrapper>
                    ) : (
                        ''
                    )}
                </Wrapper>
            </Link>
        );
    }
}

const ProjectWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 200;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const Wrapper = styled.div`
    width: 25vw;
    height: 25vw;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.picture});
`;

const ProjectTop = styled.div`
    position: absolute;
    top: 27px;
    left: 23px;
    display: flex;
    flex-direction: row;
`;

const ProjectTopIcon = styled.div`
    width: 84px;
    height: 30px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #ffffff;
    border-radius: 15px;
    border: solid 1px #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${props => (props.kind === 'orders' ? '14px' : '0px')};
`;

export default Project;
