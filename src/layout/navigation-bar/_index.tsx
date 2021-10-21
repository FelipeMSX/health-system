import React from "react";
import { Container, LeftBar, RightBar, ToggleableItem } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { open } from "../../store/slices/sidebar-slice";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { IconButton, Menu, MenuItem } from "@mui/material";
import UserProfile from "./components/user-profile/user-profile";

const NavBar: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);
  const dispatch = useDispatch();

  const handleClick = () => {};

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <LeftBar>
        <ToggleableItem isOpened={!isOpened}>
          <IconButton color="secondary" onClick={() => dispatch(open())}>
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
