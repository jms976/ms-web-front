import React, { Suspense, useEffect } from "react";

import { useAppSelector } from "app/hooks";
import { selectCommon } from "features/commonSlice/commonSlice";

import { DefaultContainer } from "modules/Styled";
import Topbar from "components/common/Topbar";
import LeftSideMenu from "components/common/LeftSideMenu";

const Program: React.FC = () => {
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;
  return (
    <DefaultContainer width={leftMenuSize}>
      <Topbar />
      <LeftSideMenu />
      program
    </DefaultContainer>
  );
};

export default Program;
