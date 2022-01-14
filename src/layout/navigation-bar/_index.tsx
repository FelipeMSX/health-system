import React from "react";
import { Container, LeftBar, RightBar, ToggleableItem } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { IconButton, Menu, MenuItem } from "@mui/material";
import UserProfile from "./components/user-profile/user-profile";
import { toogleSideBar } from "../../store/slices/ui/ui-slice";

const NavBar: React.FC = () => {
  const isSideBarVisible = useSelector((state: RootState) => state.ui.isSideBarVisible);
  const isNavBarVisible = useSelector((state: RootState) => state.ui.isNavBarVisible);

  const dispatch = useDispatch();

  const handleClick = () => {};

  return (
    <Container className={isSideBarVisible ? "" : "expanded"}>
      <LeftBar>
        <ToggleableItem isOpened={!isSideBarVisible}>
          <IconButton color="secondary" onClick={() => dispatch(toogleSideBar(true))}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </ToggleableItem>
      </LeftBar>
      <RightBar>
        <UserProfile></UserProfile>
      </RightBar>
    </Container>
  );
};

export default NavBar;
