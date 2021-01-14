import { Secretary } from "../Secretary";
import { IFiubaUser } from "../User";

export enum AdminStatus {
  active = "active",
  deactivated = "deactivated"
}

export interface IAdmin {
  uuid: string;
  user: IFiubaUser;
  secretary: Secretary;
  status: AdminStatus;
  updatedAt: string;
  createdAt: string;
}
