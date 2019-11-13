import React from 'react';
import styled, { css } from 'styled-components';

import NavBar from '../NavBar/ProjectArchiving/NavBar';
import ProgressView from '../Views/ProgressView';
import CompleteView from './CompleteView';
import CompletePopup from '../Popup/CompletePopup';
// import ManagingProjectPopup from '../Popup/ManagingProjectPopup';

const ProjectArchivingView = ({
    archivingView,
    handleArchivingView,
    isOpenManagingProjectPopup,
    openManagingPopup,
    closeManagingPopup,
}) => {
    return (
        <MainWrapper>
            <TopLine />
            {/* {isOpenManagingProjectPopup === true ? (
                <ManagingProjectPopup
                    closeManagingPopup={closeManagingPopup}
                    isOpenManagingProjectPopup={isOpenManagingProjectPopup}
                />
            ) : (
                ''
            )} */}
            <Wrapper>
                <NavBar openManagingPopup={openManagingPopup} />

                <SelectArchivingWrapper>
                    <SelectArchivingGroup>
                        <ProgressInstance
                            onClick={() => handleArchivingView('progress')}
                            archivingView={archivingView}
                        >
                            PROGRESS
                        </ProgressInstance>
                        <CompleteInstance
                            onClick={() => handleArchivingView('complete')}
                            archivingView={archivingView}
                        >
                            COMPLETE
                        </CompleteInstance>
                    </SelectArchivingGroup>
                </SelectArchivingWrapper>
                {/* <ProjectInfo>
                    <ProjectInfoText>{}</ProjectInfoText>
                </ProjectInfo> */}
                <ViewWrapper>
                    {archivingView === 'progress' ? (
                        <ProgressView />
                    ) : (
                        <CompleteView />
                    )}
                </ViewWrapper>
            </Wrapper>
            <CompletePopup />
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const TopLine = styled.div`
    width: 100%;
    height: 10px;
    background-image: linear-gradient(to right, #5ae0ff, #c86dd7);
`;

const Wrapper = styled.div`
    padding: 0px 50px 0px 50px;
`;

const SelectArchivingWrapper = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
`;

const SelectArchivingGroup = styled.div`
    width: 280px;
    display: flex;
    flex-direction: row;
`;

const ProgressInstance = styled.div`
    flex: 1;
    height: 2px;
    ${props => {
        if (props.archivingView === 'progress') {
            return css`
                background-image: linear-gradient(91deg, #5ae0ff, #c86dd7);
                color: #000000;
            `;
        } else {
            return css`
                background-color: #999999;
                color: #999999;
            `;
        }
    }}
    text-align: center;
    font-family: 'NotoSansCJKkr-Medium';
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.08px;
`;

const CompleteInstance = styled.div`
    flex: 1;
    height: 2px;
    ${props => {
        if (props.archivingView === 'complete') {
            return css`
                background-image: linear-gradient(91deg, #5ae0ff, #c86dd7);
                color: #000000;
            `;
        } else {
            return css`
                background-color: #999999;
                color: #999999;
            `;
        }
    }}
    text-align: center;
    font-family: 'NotoSansCJKkr-Medium';
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.08px;
`;

const ViewWrapper = styled.div`
    width: 100%;
`;

export default ProjectArchivingView;
