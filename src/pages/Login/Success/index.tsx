import React, { useEffect } from "react";

const LoginSuccess: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return <div>Thanks for loggin in!</div>;
};

export default LoginSuccess;
