import Http from "modules/Http";

export const AllMember = async () => {
  try {
    const result = await Http.get(`${process.env.REACT_APP_API_PATH}/member`, {
      headers: { noauth: "use" },
    });
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getMember = async (memberId: string) => {
  try {
    const result = await Http.get(
      `${process.env.REACT_APP_API_PATH}/member/${memberId}`
    );
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const MemberStateUpdate = async (memberId: string, state: string) => {
  try {
    const result = await Http.put(
      `${process.env.REACT_APP_API_PATH}/member/${memberId}/state?state=${state}`
    );
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const MemberLicenseUpdate = async (memberId: string, state: string) => {
  try {
    const result = await Http.put(
      `${process.env.REACT_APP_API_PATH}/member/${memberId}/license?license=${state}`
    );
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const MemberConfigUpdate = async (memberId: string, state: string) => {
  try {
    const result = await Http.put(
      `${process.env.REACT_APP_API_PATH}/member/${memberId}/config`,
      state
    );
    if (result.data.status !== "success") return Promise.reject(result);
    return result.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
