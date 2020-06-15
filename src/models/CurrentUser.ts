import { UseCurrentUser } from "./hooks/queries/useCurrentUser";
import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";

export const CurrentUser = (attributes?: UseCurrentUser): CurrentUser | undefined => {
  if (!attributes) return;

  return {
    ...attributes,
    company: attributes.company && CurrentCompany(attributes.company),
    applicant: attributes.applicant,
    admin: attributes.admin
  };
};

interface ICurrentUser {
  company: ICurrentCompany | undefined;
  applicant: { uuid: string } | undefined;
  admin: { userUuid: string } | undefined;
}

export type CurrentUser = IUser & ICurrentUser;
