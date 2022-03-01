import React, { Suspense, useEffect } from "react";

import { useAppSelector } from "app/hooks";
import { selectCommon } from "features/commonSlice/commonSlice";

import { DefaultContainer } from "modules/Styled";
import Topbar from "components/common/Topbar";
import LeftSideMenu from "components/common/LeftSideMenu";

const Spot: React.FC = () => {
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;
  return (
    <DefaultContainer width={leftMenuSize}>
      <Topbar />
      <LeftSideMenu />
      먹고 즐기기 기록
    </DefaultContainer>
  );
};

export default Spot;
