import React from 'react'
import styled from 'styled-components'
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <HeaderContainer>
            {/*  Header Left  */}
            <HeaderLeft>
                <HeaderAvatar
                    // TODO: add onclick
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/*  Header Middle  */}
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </HeaderSearch>

            {/*  Header Right  */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderSearch = styled.div`
  display: flex;
  flex: .4;
  opacity: 1;
  border-radius: 6px;
  background-color: #332e33;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--main-color);
  color: #fff;
`;

const HeaderLeft = styled.div`
    flex: .3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: .3;
  align-items: flex-end;
  
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: .8;
  }
`;
