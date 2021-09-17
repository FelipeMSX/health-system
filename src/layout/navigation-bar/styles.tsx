import styled from "styled-components";
import { Props } from ".";

export const Container = styled.div`
  grid-area: TB;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: white;
  height: 64px;
  margin-left: 0px;

  transition: margin-left 0.2s;

  &.expanded {
    margin-left: -280px;
  }
`;

export const LeftBar = styled.div`
  display: flex;
`;

export const ToggleableItem = styled.div<Props>`
  display: ${(props) => (props.isOpened ? "flex" : "none")};
`;

export const RightBar = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 18px;
  height: 52px;
  justify-content: space-between;
  cursor: pointer;
  width: max-content;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--lightgray);
  }

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

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
