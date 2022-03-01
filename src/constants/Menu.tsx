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
    title: "비공개",
    itemId: "/private",
    subOpen: false,
    subNav: [
      {
        index: 0,
        title: "테스트",
        itemId: "/private/customer",
        show: true,
        icon: <BotTemplate size={20} />,
      },
      {
        index: 1,
        title: "메뉴판",
        itemId: "/private/houses",
        show: true,
        icon: <ScenarioTemplate size={20} />,
      }
    ],
  },
  {
    index: 1,
    title: "기록하기",
    itemId: "/record",
    subOpen: false,
    subNav: [
      {
        index: 0,
        title: "프로그래밍",
        itemId: "/record/program",
        show: true,
        icon: <BotTemplate size={20} />,
      },
      {
        index: 1,
        title: "가는곳들",
        itemId: "/record/spot",
        show: true,
        icon: <ScenarioTemplate size={20} />,
      }
    ],
    show: true,
  },
];

export default defaultMenu;
