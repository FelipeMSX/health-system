import styled from "styled-components";

export const Container = styled.div`
  grid-area: AL;
  padding-top: 24px;
  background-color: var(--primary);
  height: calc(100vh - 64px);
  position: relative;
  overflow: hidden;

  margin-left: 0;
  transition: margin-left 0.2s;

  &.expanded {
    margin-left: -280px;
  }

  .pro-sidebar {
    width: 100%;
  }

  .pro-sidebar-inner {
    background: inherit;
  }
  .pro-sidebar .pro-menu.shaped .pro-menu-item > .pro-inner-item > .pro-icon-wrapper {
    background: transparent;
  }
  .pro-sidebar .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item {
    background: inherit;
  }

  .pro-inner-list-item > div > ul {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }

  .pro-inner-item {
    padding: 3px 5px !important;
    border-radius: 6px;
    transition: background-color 0.2s;
    margin: 3px 10px;
    font-size: 13px;
    font-weight: 500;

    &:hover {
      background-color: var(--quaternary);
    }
  }

  > div {
    height: 4000px;
  }

  &:hover {
    overflow-y: scroll;
    overflow: overlay;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 6px;
    scrollbar-width: initial;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
