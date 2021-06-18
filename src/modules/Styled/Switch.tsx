import styled from "styled-components";
import React from "react";
import Switch from "react-switch";
import classNames from "classnames";

/** 셀렉트 박스 컨테이너 */
const Container = styled.span`
  display: inline-block;
`;

interface SwitchProps {
  /** 활성/비활성 설정 */
  checked: boolean;
  /** 값 변경시 */
  onChange: (event: any, checked?: any) => void;
  /** 라이사이즈 */
  large?: boolean;
  /** 로딩중 여부 */
  isLoading?: boolean;
}

const SwitchWrapper: React.FC<SwitchProps> = ({
  checked,
  onChange,
  large = false,
  isLoading = false,
}) => {
  const hanndleChange = (checked: any, event: any) => {
    onChange(checked, event);
  };
  return (
    <Container>
      <Switch
        onChange={hanndleChange}
        checked={checked}
        onColor={large ? "#d2e3ff" : "#E9F1FE"}
        onHandleColor="#377dff"
        offColor="#eaeaea"
        offHandleColor="#c0bfc0"
        handleDiameter={large ? 26 : 16}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="none"
        activeBoxShadow="none"
        height={large ? 20 : 20}
        width={large ? 50 : 36}
        className={classNames({
          "react-switch": true,
          large: large,
          active: checked,
        })}
        disabled={isLoading}
      />
    </Container>
  );
};

export default React.memo(SwitchWrapper);
