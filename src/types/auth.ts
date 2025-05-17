export type IVerifyEmail = {
    email: string;
    oneTimeCode: number;
};

export type ISignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ILoginData = {
    email: string;
    password: string;
};

export type IAuthResetPassword = {
    newPassword: string;
    confirmPassword: string;
};

export type IChangePassword = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};
  