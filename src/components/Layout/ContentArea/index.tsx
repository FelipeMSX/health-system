import React from "react";

import { Container } from "./styles";
import Routes from "../../../Routes";
import { UseAppContext } from "../../../contexts/ApplicationContext";


const ContentArea: React.FC = () => {

const {isSideBarExpanded, setSideBarVisibilty} = UseAppContext();

    return (
        <Container className={isSideBarExpanded ? "" : "expanded"}>
          <Routes/>
        </Container>
    )
};

export default ContentArea;