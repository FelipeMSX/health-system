import React from "react";
import { UseAppContext } from "../../contexts/ApplicationContext";

import Routes from "../../Routes";
import { Container } from "./styles";


const ContentArea: React.FC = () => {

const {isSideBarExpanded, setSideBarVisibilty} = UseAppContext();

    return (
        <Container className={isSideBarExpanded ? "" : "expanded"}>
          <Routes/>
        </Container>
    )
};

export default ContentArea;