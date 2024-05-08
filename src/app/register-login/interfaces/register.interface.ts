export interface IUserData {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
  };
}

export interface ILoginUser {
  mail: string;
  password: string;
}