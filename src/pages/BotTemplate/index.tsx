import React, { useEffect } from "react";

import { useAppSelector } from "app/hooks";
import { selectCommon } from "features/commonSlice/commonSlice";

import { DefaultContainer } from "modules/Styled";
import Topbar from "components/common/Topbar";
import LeftSideMenu from "components/common/LeftSideMenu";

import { BotList } from "features/bot/Bot";

const BotTemplate: React.FC = () => {
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;
  return (
    <DefaultContainer width={leftMenuSize}>
      <Topbar />
      <LeftSideMenu />
      <BotList />
    </DefaultContainer>
  );
};

export default BotTemplate;
