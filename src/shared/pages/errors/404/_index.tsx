import React from "react";
import { Container } from "./styles";

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <p>404</p>
      <span>Descule, não conseguimos encontrar a página que você estava procurando.</span>
    </Container>
  );
};

export default PageNotFound;
