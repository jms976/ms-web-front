import React from "react";

import { useAppSelector } from "app/hooks";
import { selectCommon } from "features/commonSlice/commonSlice";

import { DefaultContainer } from "modules/Styled";
import Topbar from "components/common/Topbar";
import LeftSideMenu from "components/common/LeftSideMenu";

const Main: React.FC = () => {
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;

  return (
    <DefaultContainer width={leftMenuSize}>
      <Topbar />
      <LeftSideMenu />
      <div>메인 페이지</div>

      {/* <Counter /> */}
    </DefaultContainer>
  );
};

export default Main;
