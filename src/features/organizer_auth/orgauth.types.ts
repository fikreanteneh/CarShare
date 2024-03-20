export type OrgAuthLoginRequest = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type OrgAuthLoginResponse = {
  token: string;
};

export type GoogleOauthResponse = {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
};
