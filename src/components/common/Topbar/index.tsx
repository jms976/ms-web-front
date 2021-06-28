import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  leftMenuSizeChange,
  selectCommon,
} from "features/commonSlice/commonSlice";

import { HiOutlineViewList } from "react-icons/hi";

import * as S from "./styles";

const Topbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;
  const user = useAppSelector(selectCommon).authUser;

  return (
    <S.Container>
      <S.MenuSize
        onClick={() => {
          dispatch(leftMenuSizeChange(leftMenuSize === 150 ? 50 : 150));
        }}
      >
        <HiOutlineViewList size={25} />
      </S.MenuSize>
      <Link to="/main">
        <S.Logo />
      </Link>
      
      {user && <S.Profile>
        <S.ProfileImage src={user.picture || ''}/>
        <S.UserInfo>{user.email || "--"}</S.UserInfo>
        </S.Profile>}
    </S.Container>
  );
};

export default Topbar;
