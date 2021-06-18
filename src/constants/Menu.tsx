import React from "react";

import {
  CgUserList as Customer,
  CgFileDocument as BotTemplate,
  CgExtensionAlt as ScenarioTemplate,
  CgToday as BlockTemplate,
  CgMic as Notice,
  CgSmileMouthOpen as Qna,
  CgSmileNone as Faq,
} from "react-icons/cg";

export const defaultMenu = () => [
  {
    index: 0,
    itemId: "/customer",
    title: "고객관리",
    show: true,
    icon: <Customer size={20} />,
  },
  {
    index: 1,
    title: "플러그인",
    itemId: "/plugin",
    subOpen: false,
    subNav: [
      {
        index: 0,
        title: "봇 템플릿",
        itemId: "/plugin/bot",
        show: true,
        icon: <BotTemplate size={20} />,
      },
      {
        index: 1,
        title: "시나리오 템플릿",
        itemId: "/plugin/scenario",
        show: true,
        icon: <ScenarioTemplate size={20} />,
      },
      {
        index: 2,
        title: "블록 템플릿",
        itemId: "/plugin/block",
        show: true,
        icon: <BlockTemplate size={20} />,
      },
    ],
    show: true,
  },
  {
    index: 2,
    title: "운영관리",
    itemId: "/manage",
    subOpen: false,
    subNav: [
      {
        index: 0,
        title: "공지사항",
        itemId: "/manage/notice",
        show: true,
        icon: <Notice size={20} />,
      },
      {
        index: 1,
        title: "QnA",
        itemId: "/manage/qna",
        show: true,
        icon: <Qna size={20} />,
      },
      {
        index: 2,
        title: "FAQ",
        itemId: "/manage/faq",
        show: true,
        icon: <Faq size={20} />,
      },
    ],
    show: true,
  },
];

export default defaultMenu;
