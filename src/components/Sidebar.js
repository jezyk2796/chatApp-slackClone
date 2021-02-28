import React from 'react'
import styled from 'styled-components'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from "@material-ui/icons/Create";

// icons for SidebarOption
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import SidebarOption from "./SidebarOption";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";

function Sidebar() {

    const [channels, loading, error] = useCollection(db.collection('rooms'));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>NICK</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        John Doe
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map(doc => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--main-color);
  color: #fff;
  flex: .3;
  border-top: 1px solid #4d52f7;
  max-width: 260px;
  margin-top: 60px;
  
  > hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #4d52f7;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #4d52f7;
  padding: 13px;
  
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #4d52f7;
    font-size: 18px;
    background-color: #fff;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
