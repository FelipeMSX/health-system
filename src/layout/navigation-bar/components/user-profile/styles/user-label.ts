import styled from "styled-components";

export const UserLabel = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  padding: 6px 10px;
  justify-content: right;

  > h1 {
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    opacity: 0.8;
    color: var(--fontBlack);
  }

  > span {
    text-align: right;
    font-size: 10px;
    font-weight: normal;
    color: var(--fontBlack);
    opacity: 0.7;
  }
`;
