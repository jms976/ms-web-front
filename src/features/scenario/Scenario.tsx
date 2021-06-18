import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  selectScenarioTemplate,
  getScenarioTemplateAsync,
} from "./scenarioSlice";

import { scenarioTemplateProps } from "constants/Types";

import * as S from "./styles";

export const ScenarioList = () => {
  const scenarioTemplates = useAppSelector(selectScenarioTemplate);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getScenarioTemplateAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.ScenarioTemplateContents>
      <S.Title>시나리오 템플릿</S.Title>
      {scenarioTemplates.map((scenario: scenarioTemplateProps) => (
        <div key={scenario._id}>
          {scenario.name}/{scenario.state}/{scenario.createdAt}
        </div>
      ))}
    </S.ScenarioTemplateContents>
  );
};
