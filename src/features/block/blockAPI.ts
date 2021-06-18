import Http from "modules/Http";

export const AllBlockTemplate = async () => {
  try {
    const result = await Http.get(`${process.env.REACT_APP_API_PATH}/library`);
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
