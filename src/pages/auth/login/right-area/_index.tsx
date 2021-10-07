import { Container, ContentArea, SubTitle, Title } from "./styles/_index";

const RightAreaPage: React.FC = () => {
  return (
    <>
      <Container>
        <ContentArea>
          <Title>
            <p>
              Bem-vindo <br />
              ao <br /> Lazarus.
            </p>
          </Title>
          <SubTitle>
            <h6>Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more.</h6>
          </SubTitle>
        </ContentArea>
      </Container>
    </>
  );
};

export default RightAreaPage;
