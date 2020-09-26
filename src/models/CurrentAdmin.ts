import { IUser } from "$interfaces/User";
import { Secretary } from "../interfaces/Secretary";

export type TCurrentAdminAttributes = {
  user: Pick<IUser, "uuid">;
  secretary: Secretary;
};

export const CurrentAdmin = (
  {
    secretary,
    ...attributes
  }: TCurrentAdminAttributes): TCurrentAdmin => {
  return {
    ...attributes,
    secretary,
    isGraduados: () => secretary === Secretary.graduados,
    isExtension: () => secretary === Secretary.extension
  } as TCurrentAdmin;
};

export type TCurrentAdmin = TCurrentAdminAttributes & {
  isGraduados: () => boolean;
  isExtension: () => boolean;
};
