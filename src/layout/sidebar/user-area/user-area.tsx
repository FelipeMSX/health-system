import React, { useState } from "react";
import { UserData, UserPicture } from "./styles";

const UserArea: React.FC = () => {
  return (
    <>
      <UserData>
        <h1>Felipe Morais</h1>
        <span>felipeprodev@gmail.com</span>
        <UserPicture>
          <img src="UserPicture.jpg"></img>
        </UserPicture>
      </UserData>
    </>
  );
};

export default UserArea;
