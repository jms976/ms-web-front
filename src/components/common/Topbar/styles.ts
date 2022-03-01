import styled from "styled-components";
import * as Icons from "constants/Icons";

/** 탑바 커버 */
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 54px;
  z-index: 10;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d8d8d8;
`;

/** 로고 */
export const Logo = styled.span`
  display: flex;
  width: 90px;
  height: 22px;
  margin: 0 10px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${Icons.Logo});
  background-image: image-set(
    url(${Icons.Logo}) 1x,
    url(${Icons.Logo2x}) 2x,
    url(${Icons.Logo3x}) 3x
  );
`;

export const MenuSize = styled.span`
  margin: 15px 0 15px 10px;
  cursor: pointer;
  color: hsl(0deg 0% 70%);
  width: 25px;
  height: 25px;
  :hover {
    color: #377dff;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  margin-right: 20px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
`;

export const ProfileImage = styled.img`
  margin-right: 5px;
  width: 25px;
  border-radius: 2em;
`;

export const StieTitle = styled.div`
  display: flex;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  height: 100%;
  align-items: center;
`;