// src/modules/auth/dtos/auth.dto.ts
// update DTO to include token if we return it
export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
  }
  
  export interface RegisterResponse {
    id: string;
    name: string;
    email: string;
    token?: string; // optional token
  }
  