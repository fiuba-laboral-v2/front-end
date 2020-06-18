import { TCurrentUser } from "./hooks/queries/useCurrentUser";
import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";

export const CurrentUser = (attributes?: TCurrentUser): ICurrentUser | undefined => {
  if (!attributes) return;

  return {
    ...attributes,
    company: attributes.company && CurrentCompany(attributes.company),
    applicant: attributes.applicant,
    admin: attributes.admin
  };
};

export interface ICurrentUser extends IUser {
  company: ICurrentCompany | undefined;
  applicant: { uuid: string } | undefined;
  admin: { userUuid: string } | undefined;
}
