import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: pink;
  h2 {
    text-align: center;
    margin: 10px;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 500px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`;

export const MainImg = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
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