import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  selectUsers,
  getMembersAsync,
  getOneMembersAsync,
  memberStateUpdate,
  memberLicenceUpdateAsync,
  memberLicenceUpdate,
} from "../memberSlice";
import useSize from "hooks/useWindowSize";

import { UserDetail } from "./MemberDetail";

import { Table } from "modules/Table";
import { Switch, Select } from "modules/Styled";

import { useHistory } from "react-router-dom";

import { memberProps } from "constants/Types";

import * as S from "../styles";

const licenseOptions = [
  { label: "Single", key: "single" },
  { label: "Basic", key: "basic" },
  { label: "Standard", key: "standard" },
  { label: "Premium", key: "premium" },
  { label: "Unlimited", key: "unlimited" },
];

export const UsersList = () => {
  const users = useAppSelector(selectUsers);
  const history = useHistory();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMembersAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [tableData, setTableData] = useState<any[]>([]);
  const columns = React.useMemo(
    () => [
      {
        key: "index",
        dataKey: "index",
        title: "No.",
        width: 70,
        sortable: true,
        resizable: false,
        searchable: false,
        align: "center",
      },
      {
        key: "_id",
        dataKey: "_id",
        title: "ID",
        width: 250,
        sortable: true,
        resizable: true,
        tooltip: true,
        searchable: true,
      },
      {
        key: "name",
        dataKey: "name",
        title: "Name",
        width: 150,
        sortable: true,
        resizable: true,
        searchable: true,
        tooltip: true,
      },
      {
        key: "license",
        dataKey: "license",
        title: "License",
        width: 120,
        cellRenderer: ({ cellData, rowData }: any) => (
          <div style={{ width: "100px" }}>
            <Select
              className="searchCol"
              options={licenseOptions}
              value={licenseOptions.filter(
                (item: any) => item.key === cellData
              )}
              onChange={(e: any) => {
                dispatch(
                  memberLicenceUpdateAsync({
                    memberId: rowData._id,
                    state: e.key,
                  })
                );
              }}
              isSearchable={false}
            />
          </div>
        ),
        sortable: true,
        searchable: true,
        align: "center",
      },
      {
        key: "email",
        dataKey: "email",
        title: "Email",
        width: 200,
        flexGrow: 1,
        sortable: true,
        searchable: true,
        resizable: true,
        tooltip: true,
      },
      {
        key: "phone",
        dataKey: "phone",
        title: "Phone",
        width: 150,
        sortable: true,
        searchable: true,
        resizable: true,
        align: "center",
      },
      {
        key: "provider",
        dataKey: "provider",
        title: "Provider",
        width: 150,
        sortable: true,
        searchable: true,
        align: "center",
      },
      {
        key: "createdAt",
        dataKey: "createdAt",
        title: "CreatedAt",
        width: 150,
        flexGrow: 1,
        sortable: true,
        searchable: true,
        tooltip: true,
      },
      {
        key: "state",
        dataKey: "state",
        title: "State",
        width: 100,
        cellRenderer: ({ cellData, rowData }: any) => (
          <Switch
            checked={cellData === "enabled" ? true : false}
            onChange={(checked: any, event: any) => {
              event.stopPropagation();
              event.preventDefault();
              const state = cellData === "enabled" ? "disabled" : "enabled";
              dispatch(
                memberStateUpdate({ memberId: rowData._id, state: state })
              );
            }}
          />
        ),
        sortable: true,
        searchable: false,
        align: "center",
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    if (!users.lists.length) return;

    const tableTmp = users.lists.map((user: memberProps, index: number) => ({
      id: index,
      index: index + 1,
      _id: user._id,
      name: user.name,
      license: user.license,
      email: user.email,
      phone: user?.phone || "------",
      provider: user.provider,
      createdAt: moment(user.createdAt).format("YYYY/MM/DD HH:mm:ss"),
      state: user?.state || "error",
    }));
    setTableData(tableTmp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const [selectedIndex, setSelectedIndex] = useState(-9);

  /** 화면 사이즈 조절 */
  const windowHeight = useSize().height;
  const panelRef = useRef<any>(null);
  const [panelHeight, setPanelHeight] = useState(-1);
  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.offsetHeight as number);
      setSelectedIndex(-9);
      if ("_id" in users.active) {
        dispatch(getOneMembersAsync(null));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelRef, windowHeight]);

  return (
    <S.MembersContents>
      <S.Title>Customer List</S.Title>
      <S.Panel
        ref={panelRef}
        height={
          selectedIndex === -9
            ? windowHeight - 168
            : panelHeight - 440 > 300
            ? windowHeight - 168
            : 700
        }
      >
        <Table
          colums={columns}
          data={tableData}
          defaultHeight={
            selectedIndex === -9
              ? panelHeight - 40
              : panelHeight - 440 > 300
              ? panelHeight - 440
              : 300
          }
          search={true}
          emptyText={"No Data"}
          tableTitle={"어썸봇 고객 리스트"}
          rowEventHandlers={{
            onClick: ({ rowData, rowIndex }: any) => {
              if (rowIndex + 1 === selectedIndex) {
                setSelectedIndex(-9);
                dispatch(getOneMembersAsync(null));
              } else {
                const memberId: string = rowData._id;
                /** active member 디스패치 */
                dispatch(getOneMembersAsync(memberId));
                setSelectedIndex(rowIndex + 1);
              }
            },
          }}
          selectedRowIndex={selectedIndex}
        />
        {selectedIndex !== -9 && (
          <UserDetail
            rowIndex={selectedIndex}
            data={users.active}
            height={400}
          />
        )}
      </S.Panel>
    </S.MembersContents>
  );
};
