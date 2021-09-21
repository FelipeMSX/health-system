import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  background-color: #f6f7f9;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1570px;
  padding: 0 32px;
  margin: 0 auto;
  background-color: transparent;
`;

export const Header = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  position: absolute;
  background: linear-gradient(to right, #1b2330 0%, #252f3e 100%);
  pointer-events: none;
  background-size: cover;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;

  height: 200px;
`;

export const LabelArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: auto;
  justify-content: center;
`;

export const ActionArea = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const BackLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;

  > span {
    margin-left: 4px;
    margin-right: 4px;
    font-size: 13px;
    font-weight: 500;
    color: white;
  }
`;

export const PageName = styled.div`
  display: flex;

  > img {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
  }
`;

export const PageNameItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  > h1 {
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

  > h3 {
    font-size: 11px;
    font-weight: 500;
    color: white;
  }
`;

export const ArrowBackIcon = styled(ArrowLeftOutlined)`
  width: 20px;
  height: 20px;
  color: var(--white);
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`;

export const ButtonSave = styled.button`
  display: inline-flex;
  padding: 6px 16px;
  min-width: 64px;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 18px;
  height: 34px;
  cursor: pointer;
  vertical-align: center;
  justify-content: center;
  align-items: center;
  background-color: #22d3ee;

  ::-webkit-tap-highlight-color {
    background-color: #ff4;
  }
`;
