import { Secretary } from "../Secretary";
import { IFiubaUser } from "../User";

export enum AdminStatus {
  active = "Active",
  deactivated = "Deactivated"
}

export interface IAdmin {
  uuid: string;
  user: IFiubaUser;
  secretary: Secretary;
  status: AdminStatus;
  updatedAt: string;
  createdAt: string;
}
