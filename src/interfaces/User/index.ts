export interface IUser {
  uuid?: string;
  email: string;
  name: string;
  surname: string;
}

export interface IEditableUser {
  uuid?: string;
  email?: string;
  name?: string;
  surname?: string;
}

export interface IUserInput {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface IFiubaUserInput extends IUserInput {
  dni: string;
}

export interface IFiubaUser extends IUser {
  dni: string;
}
