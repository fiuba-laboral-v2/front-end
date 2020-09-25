import { IUser } from "$interfaces/User";
import { Secretary } from "../interfaces/Secretary";

export type TCurrentAdminAttributes = {
  user: Partial<IUser>;
  secretary: Secretary;
};

export const CurrentAdmin = (
  {
    secretary,
    user: { uuid },
    ...attributes
  }: TCurrentAdminAttributes): TCurrentAdmin => {
  return {
    ...attributes,
    userUuid: uuid,
    secretary,
    isGraduados: () => secretary === Secretary.graduados,
    isExtension: () => secretary === Secretary.extension
  } as TCurrentAdmin;
};

export type TCurrentAdmin = {
  secretary: Secretary;
  userUuid: Secretary;
  isGraduados: () => boolean;
  isExtension: () => boolean;
};
