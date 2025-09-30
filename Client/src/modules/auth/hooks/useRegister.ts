import { useMutation } from "@tanstack/react-query";
import { registerUser, type RegisterPayload, type RegisterResponse } from "../services/authApi";

export const useRegister = () => {
return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: registerUser,
});
};
