import { Secretary } from "../Secretary";
import { IUser } from "../User";

export interface IAdmin {
  uuid: string;
  user: IUser;
  secretary: Secretary;
  updatedAt: string;
  createdAt: string;
}
