import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "app/store";

import {
  AllMember,
  getMember,
  MemberStateUpdate,
  MemberLicenseUpdate,
  MemberConfigUpdate,
} from "./memberAPI";

import { memberProps } from "constants/Types";

export interface MemberState {
  active: any;
  lists: memberProps[];
}

const initialState: MemberState = {
  active: {},
  lists: [],
};

export const getOneMembersAsync = createAsyncThunk(
  "members/oneMember",
  async (memberId: string | null) => {
    const response = memberId ? await getMember(memberId) : {};
    return response;
  }
);

export const getMembersAsync = createAsyncThunk(
  "members/allMember",
  async () => {
    const response = await AllMember();
    return response;
  }
);

export const memberStateUpdate = createAsyncThunk(
  "members/stateUpeate",
  async (data: any) => {
    const response = await MemberStateUpdate(data.memberId, data.state);
    return response;
  }
);
export const memberLicenceUpdateAsync = createAsyncThunk(
  "members/licenceUpeate",
  async (data: any) => {
    const response = await MemberLicenseUpdate(data.memberId, data.state);
    return response;
  }
);
export const memberConfigUpdate = createAsyncThunk(
  "members/configUpeate",
  async (data: any) => {
    const response = await MemberConfigUpdate(data.memberId, data.config);
    return await response;
  }
);

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    /** 일반 리듀서로 API example */
    licenseUadate: (state, action: PayloadAction<memberProps>) => {
      state.active = action.payload;
      state.lists = state.lists.map((item: any) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMembersAsync.fulfilled,
      (state, action: PayloadAction<memberProps[]>) => {
        state.lists = action.payload;
      }
    );
    builder.addCase(
      getOneMembersAsync.fulfilled,
      (state, action: PayloadAction<memberProps>) => {
        state.active = action.payload;
      }
    );
    builder.addCase(
      memberStateUpdate.fulfilled,
      (state, action: PayloadAction<memberProps>) => {
        if (state.active?._id && state.active?._id === action.payload._id) {
          state.active = action.payload;
        }
        state.lists = state.lists.map((item: any) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        });
      }
    );
    builder.addCase(
      memberLicenceUpdateAsync.fulfilled,
      (state, action: PayloadAction<memberProps>) => {
        if (state.active?._id && state.active?._id === action.payload._id) {
          state.active = action.payload;
        }
        state.lists = state.lists.map((item: any) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        });
      }
    );
    builder.addCase(
      memberConfigUpdate.fulfilled,
      (state, action: PayloadAction<memberProps>) => {
        state.active = action.payload;
        state.lists = state.lists.map((item: any) => {
          if (item._id === action.payload._id) {
            return action.payload;
          } else {
            return item;
          }
        });
      }
    );
  },
});

export const selectUsers = (state: RootState) => state.member;

/** 일반 리듀서로 API example */
export const { licenseUadate } = memberSlice.actions;
export const memberLicenceUpdate =
  (data: any): AppThunk =>
  async (dispatch) => {
    const response = await MemberLicenseUpdate(data.memberId, data.state);
    dispatch(licenseUadate(response));
  };

export default memberSlice.reducer;
