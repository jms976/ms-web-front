import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { selectBotTemplate, getBotTemplateAsync } from "./botSlice";

import { botTemplateProps } from "constants/Types";

import * as S from "./styles";

export const BotList = () => {
  const botTemplates = useAppSelector(selectBotTemplate);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBotTemplateAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.BotTemplateContents>
      <S.Title>봇 템플릿</S.Title>
      {botTemplates.map((bot: botTemplateProps) => (
        <div key={bot._id}>
          {bot.name}/{bot.state}
        </div>
      ))}
    </S.BotTemplateContents>
  );
};
