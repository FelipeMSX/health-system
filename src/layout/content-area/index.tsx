import React from "react";
import { useSelector } from "react-redux";
import Routes from "../../Routes";
import { RootState } from "../../store/store";
import { Container } from "./styles";

const ContentArea: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <Routes />
    </Container>
  );
};

export default ContentArea;
