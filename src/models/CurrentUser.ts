import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";
import { TCurrentUserAttributes } from "./hooks/queries/useCurrentUser";

export const CurrentUser = (attributes: TCurrentUserAttributes): TCurrentUser => {
  if (attributes?.company) return { ...attributes, company: CurrentCompany(attributes.company) };
  return attributes;
};

export type TCurrentUser =
  TGenericCurrentUser<{ userUuid: string; }, { uuid: string; }, ICurrentCompany>;

export type TGenericCurrentUser<TAdmin, TApplicant, TCompany> =
  IAdminUser<TAdmin> |
  ICurrentApplicantUser<TApplicant> |
  ICurrentCompanyUser<TCompany>;

interface IAdminUser<TAdmin> extends IUser {
  admin: TAdmin;
  company?: undefined;
  applicant?: undefined;
}

interface ICurrentApplicantUser<TApplicant> extends IUser {
  applicant: TApplicant;
  admin?: undefined;
  company?: undefined;
}

interface ICurrentCompanyUser<TCompany> extends IUser {
  company: TCompany;
  admin?: undefined;
  applicant?: undefined;
}
