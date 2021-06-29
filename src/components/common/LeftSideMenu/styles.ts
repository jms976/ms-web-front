import styled from "styled-components";

export const Container = styled.div<{ width?: number }>`
  user-select: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  flex-direction: column;
  width: ${(props) => (typeof props.width === 'number' ? props.width + "px" : "150px")};
  height: calc(100% - 95px);
  top: 55px;
  right: 0;
  left: 0;
  z-index: 10;
  padding: 20px 0;
  color: #1a1a1a;
  background-color: #fcfcfc;
`;

export const ReSizer = styled.div`
  margin: 8px 11px;
  flex-direction: column;
  margin-right: auto;
  cursor: pointer;
  span {
    display: flex;
    background: #fcfcfc;
    padding: 2px;
    border: 1px solid hsl(0deg 0% 70%);
    border-radius: 5px;
    color: hsl(0deg 0% 70%);
    :hover {
      color: #377dff;
      border-color: #377dff;
    }
  }
`;

export const MenuList = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
export const FoldMenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  margin-right: auto;
  cursor: pointer;
  span {
    display: flex;
    background: #fcfcfc;
    padding: 4px;
    border-radius: 5px;
    color: hsl(0deg 0% 70%);
    margin-bottom: 20px;
    :hover {
      color: #377dff;
      background: #e9f1fe;
    }
    &.active {
      color: #377dff;
      background: #e9f1fe;
    }
  }
`;
export const Item = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  line-height: 30px;
  font-size: 13px;
  background: #fcfcfc;
  &.active {
    background-color: #e9f1fe;
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      bottom: 0;
      background-color: #377dff;
    }
  }
  &.itemWrapper:not(.active) {
    :hover {
      background: #f8f8f8;
    }
  }
  span {
    &.menuFlag {
      position: absolute;
      right: 20px;
    }
    &.menuTitle {
      width: 100%;
      padding-left: 10px;
    }
  }
`;
export const SubItem = styled.span`
  position: relative;
  padding: 0 20px 0;
  font-size: 11px;
  background: #fcfcfc;
  &.subItemWrapper:not(.active) {
    :hover {
      background: #f8f8f8;
    }
  }
  &.active {
    background-color: #e9f1fe;
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      bottom: 0;
      background-color: #377dff;
    }
  }
`;
