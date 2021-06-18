import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "app/hooks";
import { memberConfigUpdate, memberStateUpdate } from "../memberSlice";

import { Switch } from "modules/Styled";

import * as S from "../styles";

import { memberProps } from "constants/Types";

interface UserDetailProps {
  rowIndex: number;
  data: memberProps;
  height?: number;
}

export const UserDetail: React.FC<UserDetailProps> = ({
  rowIndex,
  data,
  height,
}) => {
  const dispatch = useAppDispatch();

  const handleSwitchChange = useCallback(
    (flag: string) => {
      let { config } = data;
      config = {
        isRating:
          flag === "rate" ? !data.config?.isRating : data.config?.isRating,
        isSession:
          flag === "session" ? !data.config?.isSession : data.config?.isSession,
        isStatistics:
          flag === "stat"
            ? !data.config?.isStatistics
            : data.config?.isStatistics,
      };
      dispatch(memberConfigUpdate({ memberId: data._id, config: config }));
    },
    [data, dispatch]
  );

  return (
    <S.MemberDetail height={height}>
      <S.DetailProfile>
        <S.ProfileImage image={data.profileThumbnail} />
        <S.TitleName>{data.name}</S.TitleName>
        <Switch
          checked={data.state === "enabled" ? true : false}
          onChange={(e: any) => {
            const state = data.state === "enabled" ? "disabled" : "enabled";
            dispatch(memberStateUpdate({ memberId: data._id, state: state }));
          }}
        />
        <button>
          <a
            target="_blank"
            href={`https://dev-asb-market.happytalk.io/admin/account/login?memberId=${data._id}&name=${data.name}&email=${data.email}`}
            rel="noreferrer"
          >
            에디터 열기
          </a>
        </button>
      </S.DetailProfile>

      <S.InfoList>
        <S.InfoItem>
          <S.InfoLabel>Config</S.InfoLabel>
          <S.ConfigList>
            <S.ConfigItem>
              <span>평가목록</span>
              <Switch
                checked={data.config?.isRating || false}
                onChange={(e: any) => handleSwitchChange("rate")}
              />
            </S.ConfigItem>
            <S.ConfigItem>
              <span>세션목록</span>
              <Switch
                checked={data.config?.isSession || false}
                onChange={(e: any) => handleSwitchChange("session")}
              />
            </S.ConfigItem>
            <S.ConfigItem>
              <span>통계목록</span>
              <Switch
                checked={data.config?.isStatistics || false}
                onChange={(e: any) => handleSwitchChange("stat")}
              />
            </S.ConfigItem>
          </S.ConfigList>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>E-mail</S.InfoLabel>
          <S.InfoContent>{data.email}</S.InfoContent>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>Phone</S.InfoLabel>
          <S.InfoContent>{data.phone || "-----"}</S.InfoContent>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>Provider</S.InfoLabel>
          <S.InfoContent>{data.provider || "-----"}</S.InfoContent>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoLabel>License</S.InfoLabel>
          <S.InfoContent>{data.license}</S.InfoContent>
        </S.InfoItem>
      </S.InfoList>
    </S.MemberDetail>
  );
};
export default React.memo(UserDetail);
