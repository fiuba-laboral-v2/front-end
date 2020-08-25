import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";
import { TCurrentUserAttributes } from "./hooks/queries";
import { CurrentApplicant, TCurrentApplicant } from "./CurrentApplicant";
import { TCurrentAdminAttributes } from "./CurrentAdmin";

export const CurrentUser = (attributes: TCurrentUserAttributes): TCurrentUser => ({
  ...attributes,
  admin: attributes.admin,
  company: attributes.company && CurrentCompany(attributes.company),
  applicant: attributes.applicant && CurrentApplicant(attributes.applicant)
});

export type TCurrentUser =
  TGenericCurrentUser<TCurrentAdminAttributes, TCurrentApplicant, ICurrentCompany>;

export type TGenericCurrentUser<TAdmin, TApplicant, TCompany> = IUser & {
  admin?: TAdmin;
  company?: TCompany;
  applicant?: TApplicant;
};
