import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

const SidebarOption = ({ title, Icon, addChannelOption }) => {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    console.log('select channel');
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span># </span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  padding-left: 2px;
  cursor: pointer;

  :nth-child(10) {
    border-top: 1px solid #49274b;
    border-bottom: 1px solid #49274b;
    padding: 8px 2px;
  }

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.div`
  > span {
    padding: 0.9rem;
  }
`;

export default SidebarOption;
