import styled from "styled-components";

const DefaultContainer = styled.div<{ width?: number }>`
  display: flex;
  position: absolute;
  top: 55px;
  left: ${(props) => (props.width ? props.width + "px" : "150px")};
  width: ${(props) =>
    props.width ? "calc(100% - " + props.width + "px);" : "calc(100% - 150px)"};
  min-width: 900px;
`;

export default DefaultContainer;
