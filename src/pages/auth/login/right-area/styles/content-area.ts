import styled from "styled-components";

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 24rem;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
`;

export const SubTitle = styled.div`
  margin-top: 3.2rem;

  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.75;
  }
`;
