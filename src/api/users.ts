import axios from "./axios";

export const getUserByUsernameRequest = async (username: string) => {
  try {
    const { data } = await axios.get(`users/find/${username}`);
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
};

export const updateUserRequest = async (response: any) => {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put(`/`, response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
};

