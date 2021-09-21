import styled from "styled-components";

export const Container = styled.div`
  grid-area: AN;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: var(--primary);
  width: 280px;
  height: 64px;

  margin-left: 0;
  transition: margin-left 0.2s;

  &.expanded {
    margin-left: -280px;
  }
`;
