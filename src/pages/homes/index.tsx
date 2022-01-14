import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toogleFullscreenMode } from "../../store/slices/ui/ui-slice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  // dispatch(toogleFullscreenMode(false));
  // useEffect(() => {
  //   console.log("teste user effect no Home");
  //   dispatch(toogleFullscreenMode(false));
  // });
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
