import React from "react";
import { UseAppContext } from "../../context/app-context";

const Home: React.FC = () => {
  const { setFullscreen } = UseAppContext();

  setFullscreen(false);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
