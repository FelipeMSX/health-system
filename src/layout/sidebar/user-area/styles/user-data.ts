import styled from "styled-components";

export const UserData = styled.div`
  display: flex;
  height: 138px;
  max-height: 138px;
  width: 280px;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 0px 0px;

  > h1 {
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
    line-height: 25px;
  }

  > span {
    font-size: 13px;
    color: var(--white);
    opacity: 50%;
    font-weight: 500;
  }
`;
