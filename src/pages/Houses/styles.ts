import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 54px;
  z-index: 10;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d8d8d8;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  width: calc(100% - 60px);
  .slick-prev:before,
  .slick-next:before {
    color: #1f1f1f;
  }
`;