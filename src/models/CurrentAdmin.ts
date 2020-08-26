import { Secretary } from "../interfaces/Secretary";

export type TCurrentAdminAttributes = {
  userUuid: string;
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
