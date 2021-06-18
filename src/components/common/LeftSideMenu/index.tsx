import React, { useState, useEffect, useCallback } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import classNames from "classnames";
import { withRouter, RouteComponentProps, useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/hooks";

import defaultMenu from "constants/Menu";
import { Tooltip } from "modules/Styled";

import {
  selectCommon,
  menuStyleChange,
} from "features/commonSlice/commonSlice";

import * as S from "./styles";

const LeftSideMenu: React.FC<RouteComponentProps> = ({
  location: { pathname },
}) => {
  const commonState = useAppSelector(selectCommon);
  const dispatch = useAppDispatch();

  const history = useHistory();
  const [menuItems, setMenuItems] = useState<any[]>(defaultMenu());
  const [sizeState, setSizeState] = useState<"fold" | "unfold">(
    commonState.leftMenuSize === 150 ? "unfold" : "fold"
  );

  useEffect(() => {
    setSizeState(commonState.leftMenuSize === 150 ? "unfold" : "fold");
  }, [commonState.leftMenuSize]);

  useEffect(() => {
    const mainPath = `/${pathname.split("/")[1]}`;

    const contaionSubOpen = commonState.menuStyle.filter(
      (item: any) => item.subOpen
    );
    setMenuItems(
      menuItems.map((item: any) => {
        if (
          item.itemId === mainPath ||
          contaionSubOpen.some((contain: any) => contain.itemId === item.itemId)
        ) {
          item.subOpen = true;
          return item;
        }
        return item;
      })
    );
    dispatch(
      menuStyleChange(
        menuItems.map((item: any) => ({
          itemId: item.itemId,
          subOpen: item?.subOpen || false,
        }))
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleClickMenu = useCallback(
    (item: any) => {
      if (item.subOpen && pathname.split("/")[1] === item.itemId.split("/")[1])
        return;
      if (item.subNav) {
        let newArr = [...menuItems];
        newArr[item.index].subOpen = !newArr[item.index].subOpen;
        setMenuItems(newArr);
        dispatch(
          menuStyleChange(
            newArr.map((item: any) => ({
              itemId: item.itemId,
              subOpen: item?.subOpen || false,
            }))
          )
        );
      } else {
        history.push(item.itemId);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [menuItems]
  );

  return (
    <S.Container width={commonState.leftMenuSize}>
      {sizeState === "unfold" && (
        <S.MenuList>
          {menuItems &&
            menuItems.map((item: any) => (
              <S.Item
                key={item.index}
                className={classNames({
                  active: pathname === item.itemId,
                  itemWrapper: true,
                })}
              >
                <div
                  onClick={() => {
                    handleClickMenu(item);
                  }}
                >
                  <span className={"menuTitle"}>{item.title}</span>
                  {item.subNav && (
                    <span className={"menuFlag"}>
                      {item.subOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  )}
                </div>
                <S.MenuList>
                  {item.subNav &&
                    item.subNav
                      .filter((sub: any) => item.subOpen)
                      .map((sub: any) => (
                        <S.SubItem
                          key={sub.index}
                          onClick={() => {
                            if (!sub.itemId) return;
                            history.push(sub.itemId);
                          }}
                          className={classNames({
                            active: pathname === sub.itemId,
                            subItemWrapper: true,
                          })}
                        >
                          {sub.title}
                        </S.SubItem>
                      ))}
                </S.MenuList>
              </S.Item>
            ))}
        </S.MenuList>
      )}
      {sizeState === "fold" && (
        <S.FoldMenuList>
          {menuItems &&
            menuItems
              .filter((item: any) => item.show)
              .map((item: any) => {
                if ("subNav" in item) {
                  return item.subNav
                    .filter((sub: any) => sub.show)
                    .map((sub: any) => {
                      const Icon = () => {
                        return sub.icon;
                      };
                      return (
                        <Tooltip
                          content={sub.title}
                          placement={"right-center"}
                          color="#1a1a1a"
                          borderColor="#377dff"
                          bgColor="#fff"
                          key={sub.index}
                        >
                          <span
                            onClick={() => {
                              history.push(sub.itemId);
                            }}
                            className={classNames({
                              active: pathname === sub.itemId,
                            })}
                          >
                            <Icon />
                          </span>
                        </Tooltip>
                      );
                    });
                } else {
                  const Icon = () => {
                    return item.icon;
                  };
                  return (
                    <Tooltip
                      content={item.title}
                      placement={"right-center"}
                      color="#1a1a1a"
                      borderColor="#377dff"
                      bgColor="#fff"
                      key={item.index}
                    >
                      <span
                        onClick={() => {
                          history.push(item.itemId);
                        }}
                        className={classNames({
                          active: pathname === item.itemId,
                        })}
                      >
                        <Icon />
                      </span>
                    </Tooltip>
                  );
                }
              })}
        </S.FoldMenuList>
      )}
    </S.Container>
  );
};

export default withRouter(LeftSideMenu);
