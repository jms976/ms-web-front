import styled from "styled-components";

const DefaultContainer = styled.div<{ width?: number }>`
  display: flex;
  position: absolute;
  top: 55px;
  left: ${(props) => (typeof props.width === 'number' ? props.width + "px" : "150px")};
  width: ${(props) =>
    typeof props.width === 'number' ? "calc(100% - " + props.width + "px);" : "calc(100% - 150px)"};
  min-width: 200px;
`;

export default DefaultContainer;
