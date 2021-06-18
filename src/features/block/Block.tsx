import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { selectBlockTemplate, getBlockTemplateAsync } from "./blockSlice";

import { blockTemplateProps, blockItemProps } from "constants/Types";

import * as S from "./styles";

export const BlockList = () => {
  const [allBlock, setAllBlock] = useState<any[]>([]);

  const blockTemplates = useAppSelector(selectBlockTemplate);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBlockTemplateAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllBlock(
      blockTemplates.reduce((accumulator: any[], value: blockTemplateProps) => {
        const key = "list";
        if (value.hasOwnProperty(key) && value.hasOwnProperty("category")) {
          value[key].forEach((block: blockItemProps) => {
            accumulator.push({ category: value.category, ...block });
          });
        }
        return accumulator;
      }, [])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockTemplates]);

  return (
    <S.BlockTemplateContents>
      <S.Title>블록 템플릿</S.Title>
      {allBlock.map((block: any, index: number) => (
        <div key={index}>
          {block.category}/{block.item_name}/{block.level}/{block.action_name}
        </div>
      ))}
    </S.BlockTemplateContents>
  );
};
