import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import { sidebarOpt } from '../data';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Three Quarters</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      {sidebarOpt.map((option) => {
        return <SidebarOption key={option.id} {...option} />;
      })}

      {channels?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  color: #fff;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 3.75rem;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 0.8rem;
  align-items: center;

  > .MuiSvgIcon-root {
    padding: 0.5rem;
    color: #49274b;
    font-size: 1.125rem;
    background-color: #fff;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 1rem;
    font-weight: 900;
    margin-top: 0.3rem;
  }

  > h3 {
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      font-size: 0.7rem;
      margin-top: 2px;
      margin-right: 2px;
      color: green;
    }
  }
`;

export default Sidebar;
