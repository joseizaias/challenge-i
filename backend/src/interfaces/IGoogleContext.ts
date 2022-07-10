export interface IUser {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export interface IResearch {
  id: string;
  title: string;
  link: string;
}

export type TResearchers = IResearch[];

export interface ISignInInput extends IUser {
  password: string;
}

export interface IGoogleContext {
  user: IUser | null;
  // signUp: ({ name, email, password }: ISignInInput) => Promise<void>;
  // signInGoogle: (email: string, password: string) => Promise<void>;
  // sendPasswordResetEmailfb: (email: string) => void;
  userData: TResearchers;
  handleSignOut: () => void;
  handleSignIn: (token: string) => void;
  // RedirectOnSuccessfulLogin: () => void;
}
