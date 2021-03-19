import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

const Loading = () => {
  return (
    <AppLoading>
      <AppLoadingContent>
        <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
      </AppLoadingContent>
    </AppLoading>
  );
};

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Loading;
