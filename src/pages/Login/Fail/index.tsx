import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Http from "modules/Http";

import { useAppDispatch } from "app/hooks";
import { setIsAuth, setAuthUser } from "features/commonSlice/commonSlice";

import { DefaultContainer } from "modules/Styled";

const LoginFail: React.FC = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const fetchAuthUser = async () => {
    const response = await Http.get(
      `${process.env.REACT_APP_API_HOST}/auth/user`
    ).catch((err) => {
      console.log("Not properly authenticated");
      dispatch(setIsAuth(false));
      dispatch(setAuthUser(null));
      history.push("/login/fail");
    });

    if (response && response.data) {
      console.log("User: ", response.data);
      dispatch(setIsAuth(true));
      if (response.data.status === "success") {
        dispatch(setAuthUser(response.data.data));
      }
      history.push("/");
    }
  };

  return (
    <DefaultContainer>
      <div
        onClick={async () => {
          let timer: NodeJS.Timeout | null = null;
          const url = `${process.env.REACT_APP_API_HOST}/auth/login`;
          const newWin = window.open(url, "_blank", "width=500, height=600");
          if (newWin) {
            timer = setInterval(() => {
              if (newWin.closed) {
                fetchAuthUser();
                if (timer) clearInterval(timer);
              }
            }, 500);
          }
        }}
      >
        로그인
      </div>
      {/* <Counter /> */}
    </DefaultContainer>
  );
};

export default LoginFail;
