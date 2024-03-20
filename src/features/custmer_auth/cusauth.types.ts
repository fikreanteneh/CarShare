

export type CusAuthLoginRequest = {
    email: string;
    client_id: string;
    client_secret: number;
}

export type CusAuthLoginResponse = {
  token: string;
};
export type CusAuthCheckResponse = {
  exist: boolean;
};




