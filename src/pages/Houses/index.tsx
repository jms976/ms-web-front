
import React, { Component } from "react";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import * as Icons from "constants/Icons";
import * as S from "./styles";

const Houses: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <>
      <h2> 맹멍 홈파티 메뉴판 2021.07.08 </h2>
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
    </>
  );
};

export default Houses;