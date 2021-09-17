import styled from "styled-components";

export const Container = styled.div`
  grid-area: CA;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--primary);
  height: calc(100vh - 64px);
  z-index: 20;
  margin-left: 0px;

  transition: margin-left 0.2s;
  &.expanded {
    margin-left: -280px;
  }
`;
