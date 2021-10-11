import styled from "styled-components";

export const LeftContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 320px;
  height: 100%;
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;

  form > div > div {
    margin-bottom: 1.2rem;
  }

  form > button {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;
