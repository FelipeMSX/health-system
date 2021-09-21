import styled from "styled-components";

export const UserPicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 88px;
  height: 88px;

  bottom: -30px;
  border-radius: 50px;
  position: absolute;
  background-color: var(--secondary);

  > img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }
`;
