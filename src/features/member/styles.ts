import styled from "styled-components";
import * as Icons from "constants/Icons";

export const MembersContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 0 0 10px;
`;

export const Panel = styled.div<{ height?: number }>`
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  min-height: 500px;
`;

export const MemberDetail = styled.div<{ height?: number }>`
  height: ${(props) => (props.height ? props.height - 20 + "px" : "auto")};
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
`;

export const DetailProfile = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-end;
  button {
    margin-left: auto;
  }
`;

export const TitleName = styled.div`
  font-size: 25px;
  margin: 0 20px;
`;
export const ProfileImage = styled.div<{ image?: string }>`
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid #bbb;
  border-radius: 4em;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : `url(${Icons.profileThumbnail})`};
`;

export const ConfigList = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ConfigItem = styled.div`
  display: flex;
  margin-right: 25px;
  span {
    margin-right: 10px;
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  color: #767676;
`;
export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 40px;
  align-items: center;
`;
export const InfoLabel = styled.span`
  width: 100px;
  border-bottom: thick dotted transparent;
  font-size: 18px;
  font-weight: bold;
`;
export const InfoContent = styled.span`
  width: 300px;
  padding-bottom: 7px;
  padding-left: 10px;
  margin-left: 10p;
  border-bottom: thick dotted #bbb;
`;
