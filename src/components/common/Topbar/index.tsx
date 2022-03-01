import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  leftMenuSizeChange,
  selectCommon,
} from "features/commonSlice/commonSlice";
import useSize from "hooks/useWindowSize";

import { HiOutlineViewList } from "react-icons/hi";

import * as S from "./styles";

const Topbar: React.FC = () => {
  const windowWidth = useSize().width;

  const dispatch = useAppDispatch();
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;
  const user = useAppSelector(selectCommon).authUser;

  useEffect(() => {
    if (windowWidth > 1000) {
      dispatch(leftMenuSizeChange(150));
    }
    if (windowWidth <= 1000 && windowWidth > 500) {
      dispatch(leftMenuSizeChange(50));
    }
    if (windowWidth <= 500) {
      dispatch(leftMenuSizeChange(0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <S.Container>
      <S.MenuSize
        onClick={() => {
          if (windowWidth <= 500) {
            dispatch(leftMenuSizeChange(leftMenuSize === 150 ? 0 : 150));
          } else {
            dispatch(leftMenuSizeChange(leftMenuSize === 150 ? 50 : 150));
          }
        }}
      >
        <HiOutlineViewList size={25} />
      </S.MenuSize>
      <S.StieTitle>
        MS Story
      </S.StieTitle>
      {/* <Link to="/main">
        <S.Logo />
      </Link> */}

      {user && (
        <S.Profile>
          <S.ProfileImage src={user.picture || ""} />
          <S.UserInfo>{user.email || "--"}</S.UserInfo>
        </S.Profile>
      )}
    </S.Container>
  );
};

export default Topbar;
