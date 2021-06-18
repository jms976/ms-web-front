import Http from "modules/Http";

export const AllScenarioTemplate = async () => {
  try {
    const result = await Http.get(
      `${process.env.REACT_APP_API_PATH}/scenario/templates`
    );
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
