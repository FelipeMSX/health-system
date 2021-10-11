import { Fade, Slide } from "@mui/material";
import { Container, ContentArea, SubTitle, Title } from "./styles/_index";

const RightAreaPage: React.FC = () => {
  return (
    <>
      <Container>
        <ContentArea>
          <Slide direction="up" timeout={400} in mountOnEnter unmountOnExit>
            <Title>
              <p>
                Bem-vindo <br />
                ao <br /> Lazarus.
              </p>
            </Title>
          </Slide>
          <Fade in timeout={2000}>
            <SubTitle>
              <h6>Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more.</h6>
            </SubTitle>
          </Fade>
        </ContentArea>
      </Container>
    </>
  );
};

export default RightAreaPage;
