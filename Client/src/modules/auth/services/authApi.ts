import http from "../../../shared/utils/http";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const registerUser = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const { data } = await http.post<RegisterResponse>("/auth/register", payload);
  console.log("Payload sent to API:", payload);
  return data;
};
