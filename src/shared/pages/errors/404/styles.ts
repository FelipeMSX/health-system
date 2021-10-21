import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-light);
  width: 100%;
  height: 100%;

  p {
    font-size: 90px;
    font-weight: 500;
    color: black;
  }

  span {
    font-size: 22px;
    color: rgb(107, 114, 128);
  }
`;
