import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (config.headers["noauth"] !== "use") {
      /** 인증 request */
      config.withCredentials = true;
    }
    return Promise.resolve(config);
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    if (response.data.status === "error") {
      /** 인증 없을때 리다이렉트 */
      console.log(response.data.message)
      if (response.data.message === "noauth") {
        window.location.href = "/login/fail";
      }
      return Promise.reject({
        response: response,
        message: response.data.message,
      });
    }
    return response;
  },
  (error: any) => {
    return Promise.reject({
      response: error.response,
      message: error.reponse.data.message,
    });
  }
);

export default axios;
