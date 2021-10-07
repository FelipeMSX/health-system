import React from "react";
import { useSelector } from "react-redux";
import { UseAppContext } from "../../context/app-context";
import Routes from "../../Routes";
import { RootState } from "../../store/store";
import { Container } from "./styles";

const ContentArea: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);
  const { isFullcreen } = UseAppContext();

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <Routes />
    </Container>
  );
};

export default ContentArea;
