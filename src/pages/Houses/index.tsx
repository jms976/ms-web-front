
import React, { Component } from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { useAppSelector } from "app/hooks";
import { selectCommon } from "features/commonSlice/commonSlice";

import { DefaultContainer } from "modules/Styled";
import Topbar from "components/common/Topbar";
import LeftSideMenu from "components/common/LeftSideMenu";

import * as Icons from "constants/Icons";
import * as S from "./styles";

const Houses: React.FC = () => {
  const leftMenuSize = useAppSelector(selectCommon).leftMenuSize;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <DefaultContainer width={leftMenuSize}>
      <Topbar />
      <LeftSideMenu />
      <S.MenuContainer>
        <S.Header>
          <h2> 맹멍 홈파티 메뉴판  </h2>
        </S.Header>
        <S.Content>
          <span>시간: 2021.07.10 오후 5시</span>
          <span>장소: 마포도화 아파트 113동 310호</span>

        </S.Content>
        <S.MainImg>
          <img src={Icons.tomNjerry} height={"230px"} />
        </S.MainImg>
        <S.SliderWrapper>
          <Slider {...settings}>
            <div>
              <img src={Icons.menuItem01} width={'100%'} height={'300px'}/>
              <h3>엽떡</h3>
            </div>
            <div>
              <img src={Icons.menuItem02} width={'100%'} height={'300px'}/>
              <h3>오뎅탕</h3>
            </div>
            <div>
              <img src={Icons.menuItem03} width={'100%'} height={'300px'}/>
              <h3>도토리묵</h3>
            </div>
            <div>
              <img src={Icons.menuItem04} width={'100%'} height={'300px'}/>
              <h3>계란말이</h3>
            </div>
            <div>
              <img src={Icons.menuItem05} width={'100%'} height={'300px'}/>
              <h3>유부초밥</h3>
            </div>
            <div>
              <img src={Icons.menuItem06} width={'100%'} height={'300px'}/>
              <h3>수박</h3>
            </div>
            <div>
              <h3>**본 이미지들은 실제와 다를 수 있습니다.</h3>
            </div>
          </Slider>
        </S.SliderWrapper>
      </S.MenuContainer>
    </DefaultContainer>
  );
};

export default Houses;