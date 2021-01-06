import { Secretary } from "../Secretary";
import { IFiubaUser } from "../User";

export interface IAdmin {
  uuid: string;
  user: IFiubaUser;
  secretary: Secretary;
  updatedAt: string;
  createdAt: string;
}
