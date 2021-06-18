/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import BaseTable, { Column, AutoResizer, SortOrder } from "react-base-table";
import "react-base-table/styles.css";

import { Input, Select, Tooltip } from "modules/Styled";

const TableWrapper = styled.div<{ heigth?: number }>`
  user-select: none;
  width: 100%;
  height: ${(props) => (props.heigth ? props.heigth + "px" : "1000px")};
  .BaseTable__table-main {
    outline: none;
  }
  .BaseTable__header-row {
    border: none;
    box-shadow: inset 0 -1px 0 0 #eaeaea;
    color: #767676;
    font-weight: 500;
  }
  .BaseTable__header-cell {
    justify-content: center;
    text-align: center;
  }
  .BaseTable__header-cell:after {
    position: absolute;
    content: "";
    border-right: 1px solid #d8d8d8;
    height: 60%;
    -webkit-transform: translateX(-5%);
    -ms-transform: translateX(-5%);
    transform: translateX(-5%);
    right: 2px;
  }
  .BaseTable__row-cell {
    color: #767676;
    user-select: text;
    cursor: pointer;
  }
  .BaseTable__header-cell:first-child,
  .BaseTable__row-cell:first-child {
    padding-left: 5px;
  }
  .row-selected {
    background-color: #e9f1fe;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 33px;
  color: #767676;
  margin: 0 7px 5px;
  font-size: 18px;
  font-weight: 400;
`;
const SearchWrapper = styled.div`
  display: flex;
  margin: 0 0 5px;
  .selectRow {
    display: flex;
    align-items: center;
    margin: 0 10px;
    color: #767676;
  }
  .searchCol {
    width: 100px;
    margin-right: 5px;
  }
`;

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 30px;
  color: rgb(148, 148, 148);
`;

interface BasicTableProps {
  colums: any[];
  data: any[];
  defaultHeight?: number;
  emptyText?: string;
  search?: boolean;
  tableTitle?: string;
  rowEventHandlers?: {
    [key: string]: (args: {
      rowData: any;
      rowIndex: number;
      rowKey: string | number;
      event: React.SyntheticEvent;
    }) => void;
  };
  selectedRowIndex?: number;
}

const BasicTable: React.FC<BasicTableProps> = ({ ...props }) => {
  type SortProps = {
    key: React.Key;
    order: SortOrder;
  };
  const [rowData, setRowData] = useState(props.data);
  const [sortBy, setSortBy] = useState<SortProps>();
  const [searchValue, setSearchValue] = useState("");
  const [searchOption, setSearchOption] = useState<
    { key: string; label: string }[]
  >([]);
  const [searchColums, setSearColums] = useState({ key: "all", label: "All" });
  const [selectRow, setSelectRow] = useState(-9);

  useEffect(() => {
    if (!props.selectedRowIndex) return;
    setSelectRow(props.selectedRowIndex);
  }, [props.selectedRowIndex]);
  useEffect(() => {
    if (!props.search) return;
    const optionCol = props.colums
      .filter((col) => {
        return col.hasOwnProperty("searchable") && col.searchable;
      })
      .map((col) => {
        return { key: col.key, label: col.title };
      });
    setSearchOption([...optionCol, { key: "all", label: "All" }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.colums]);

  /** 정렬 */
  const onColumnSort = ({ key, order }: SortProps) => {
    const dataSorted = [...rowData].sort((a, b) => {
      if (a[key] > b[key]) return order === "asc" ? -1 : 1;
      if (a[key] < b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });
    if (sortBy && sortBy.key && sortBy.order === "desc") {
      setSortBy({ key: "", order: "asc" });
      setRowData([...props.data]);
    } else {
      setSortBy({ key, order });
      setRowData([...dataSorted]);
    }
  };

  /** 검색 */
  useEffect(() => {
    let newData = [];
    if (searchValue !== "") {
      const colArray = props.colums
        .filter((col) => {
          // 검색 옵션 적용
          if (searchColums.key === "all") {
            return col.hasOwnProperty("searchable") && col.searchable;
          }
          return col.key === searchColums.key;
        })
        .map((col) => col.key);

      newData = props.data.filter((item: { [key in React.Key]: any }) => {
        let flag = false;
        for (let [key, value] of Object.entries(item)) {
          if (colArray.includes(key)) {
            let val = value.toString().toLowerCase();
            let search = searchValue.toLowerCase();
            if (val.includes(search)) {
              flag = true;
            }
          }
        }
        if (flag) {
          return item;
        } else {
          return false;
        }
      });
      setRowData(newData);
    } else {
      setRowData(props.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, props.data]);

  const selectedRowCurrent = useCallback(
    ({ rowIndex }: any) => {
      if (selectRow && rowIndex === selectRow - 1) {
        return "row-selected";
      }
      return "";
    },
    [selectRow]
  );

  const TableCell = ({ cellData, column, className }: any) => {
    /** 툴팁 유무 */
    if (column.tooltip) {
      return (
        <Tooltip
          content={cellData}
          color="#1a1a1a"
          borderColor="#377dff"
          bgColor="#fff"
        >
          <span className={className}>{cellData}</span>
        </Tooltip>
      );
    }
    return <span className={className}>{cellData}</span>;
  };

  return (
    <TableWrapper heigth={props.defaultHeight}>
      {(props.search || props.tableTitle) && (
        <TopWrapper>
          <TitleWrapper>{props.tableTitle}</TitleWrapper>
          {props.search && (
            <SearchWrapper>
              <span className="selectRow">{rowData.length} Items</span>
              <Select
                className="searchCol"
                options={searchOption}
                value={searchColums}
                onChange={(e: any) => {
                  setSearColums(e);
                  setSearchValue("");
                }}
                isSearchable={true}
                minHeight={33}
              />
              <Input
                width={"200px"}
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSelectRow(-9);
                  setSearchValue(e.target.value);
                }}
                isSeachIcon
                placeholder="Search..."
              />
            </SearchWrapper>
          )}
        </TopWrapper>
      )}
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            data={rowData}
            columns={props.colums}
            width={width}
            height={props.search || props.tableTitle ? height - 53 : height}
            headerHeight={32}
            rowHeight={32}
            sortBy={sortBy}
            onColumnSort={onColumnSort}
            emptyRenderer={<Empty>{props.emptyText}</Empty>}
            rowEventHandlers={props.rowEventHandlers}
            rowClassName={props.selectedRowIndex ? selectedRowCurrent : ""}
            components={{ TableCell }}
          />
        )}
      </AutoResizer>
    </TableWrapper>
  );
};
export default React.memo(BasicTable);
