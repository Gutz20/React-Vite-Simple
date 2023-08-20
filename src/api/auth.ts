import axios from "./axios";
import { getUserByUsernameRequest } from "./users";

interface VerifyOTPSchema {
  username: string;
  code: string;
}

interface ResetPasswordSchema {
  username: string;
  password: string;
}

export const registerRequest = async (user: any) => {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`auth/register`, user);

    let { username, email } = user;

    if (status === 201) {
      await axios.post(`auth/registerMail`, {
        username,
        email,
        text: "Sucessfully register",
      });
    }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const loginRequest = async (email: string, password: string) => {
  return axios.post(`auth/login`, {
    email,
    password,
  });
};

export const profileRequest = async () => {
  return await axios.get(`auth/profile`);
};

// This verify the token by the cookie
export const verifyTokenRequest = () => axios.post(`auth/verify`);

export const authenticateRequest = async (username: string) => {
  try {
    const { data, status } = await axios.post(`auth/authenticate`, {
      username,
    });

    return { data, status };
  } catch (error) {
    return { error: "Username doesn't exist...!" };
  }
};

export const generateOTPRequest = async (username: string) => {
  try {
    const {
      data: { code },
      status,
    } = await axios.get(`auth/generateOTP`, {
      params: { username },
    });

    // Send mail with the OTP
    if (status === 201) {
      const {
        data: { email },
      } = await getUserByUsernameRequest(username);

      const text = `Your Password Recoery OTP is ${code}. Verify and recover your password`;

      await axios.post(`auth/registerMail`, {
        username,
        email,
        text,
        subject: "Password Recovery OTP",
      });
    }

    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
};

// Verify OTP
export const verifyOTPRequest = async ({ username, code }: VerifyOTPSchema) => {
  try {
    const { data, status } = await axios.get(`auth/verifyOTP`, {
      params: { username, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
};

// Reset Password
export const resetPassword = async ({
  username,
  password,
}: ResetPasswordSchema) => {
  try {
    const { data, status } = await axios.put(`auth/resetPassword`, {
      username,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
};
