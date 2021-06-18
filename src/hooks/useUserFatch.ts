import Http from "modules/Http";

import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  setIsAuth,
  setAuthUser,
  selectCommon,
} from "features/commonSlice/commonSlice";

export default async function useUserFatch() {
  const isAuth = useAppSelector(selectCommon).authUser;
  const dispatch = useAppDispatch();
  const userFatch = async () => {
    if (isAuth) return true;
    const response = await Http.get(
      `${process.env.REACT_APP_API_HOST}/auth/user`
    ).catch((err) => {
      console.log("Not properly authenticated");
      dispatch(setIsAuth(false));
      dispatch(setAuthUser(null));
    });

    if (response && response.data) {
      dispatch(setIsAuth(true));
      if (response.data.status === "success") {
        dispatch(setAuthUser(response.data.data));
      }
      return true;
    }
    return false;
  };
  return await userFatch();
}
