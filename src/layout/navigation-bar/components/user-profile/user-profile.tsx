import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { UserInfo, UserLabel } from "./styles/_index";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import userService from "../../../../modules/users/infra/adapters/services/user-service";
import { logout } from "../../../../modules/users/infra/redux/slices/user-slice";
import { Redirect } from "react-router";

const UserProfile: React.FC = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubmit = () => {
    setAnchorEl(null);
    userService
      .logout()
      .then((response) => {
        if (response.isRight()) {
          dispatch(logout());
          setIsLogout(true);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log("Error no logout: " + err);
      });
  };

  return (
    <>
      <UserInfo onClick={handleClick}>
        <UserLabel>
          <h1>Felipe Morais</h1>
          <span>Administrador</span>
        </UserLabel>
        <img src="UserPicture.jpg"></img>
      </UserInfo>
      <Menu anchorEl={anchorEl} open={anchorEl !== null}>
        <MenuItem onClick={handleSubmit}>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="medium" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
      {isLogout && <Redirect to="/auth/login" push></Redirect>}
    </>
  );
};

export default UserProfile;
